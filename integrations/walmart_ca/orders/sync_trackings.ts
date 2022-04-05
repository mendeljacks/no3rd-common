import * as dayjs from 'dayjs'
import * as dayjs_utc from 'dayjs/plugin/utc'
import * as walmart from 'walmart_marketplace'
import { lir_join } from 'yay_json'
import { AxiosFunction, No3rdQueryFunction } from '../../../types/request_function_types'
import { WalmartOrder } from './convert/walmart_to_no3rd_order'
import { Options } from './import_walmart_orders'
dayjs.extend(dayjs_utc)

export const get_no3rd_orders_by_name_with_trackings = async (
    no3rd_query: No3rdQueryFunction,
    names: string[],
    integration_id: number
): Promise<{ name: string }[]> => {
    const query = {
        orders: {
            select: ['name', 'open'],
            order_items: {
                select: ['variant_id', 'quantity'],
                variants: {
                    select: ['id'],
                    variant_in_walmart_cas: {
                        select: ['variant_id', 'walmart_sku']
                    }
                }
            },
            boxes: {
                select: ['id'],
                shipping_labels: {
                    select: ['tracking_number', 'carrier', 'created_at']
                }
            },
            where: {
                and: [{ in: ['name', names] }, { eq: ['integration_id', integration_id] }]
            }
        }
    }
    const { orders } = await no3rd_query(query)
    return orders
}

export const sync_trackings = async (
    no3rd_query: No3rdQueryFunction,
    axios: AxiosFunction,
    walmart_auth: any,
    walmart_orders: WalmartOrder[],
    options: Options
) => {
    // Fetch
    const order_names = walmart_orders.map((el) => el.purchaseOrderId)
    const no3rd_orders = await get_no3rd_orders_by_name_with_trackings(
        no3rd_query,
        order_names,
        options.integration_id
    )

    const {
        left: deleted_from_walmart,
        inner: matched_orders,
        right: unimported_orders,
    } = lir_join(
        no3rd_orders,
        [],
        walmart_orders,
        (el) => el.name,
        (l, i, r) => {
            if (l.length !== 1 || r.length !== 1) {
                throw new Error(
                    `Expected 1:1 relationship between no3rd and walmart orders`
                )
            }
            i.push({ no3rd_order: l[0], walmart_order: r[0] })
            return i
        },
        (el) => el.purchaseOrderId
    )

    // Update tracking
    for (let i = 0; i < matched_orders.length; i++) {
        const {
            no3rd_order,
            walmart_order,
        }: { no3rd_order: any; walmart_order: WalmartOrder } = matched_orders[i]

        // Match no3rd order items to walmart order items
        const {
            left,
            inner: matched_order_items,
            right,
        } = lir_join(
            no3rd_order.order_items,
            [],
            walmart_order.orderLines.orderLine,
            (el) => el.variants[0].variant_in_walmart_cas[0].walmart_sku,
            (l, i, r) => {
                if (l.length !== 1 || r.length !== 1) {
                    throw new Error(
                        `Expected 1:1 relationship between no3rd and walmart order items`
                    )
                }
                i.push({ no3rd_order_item: l[0], walmart_order_item: r[0] })
                return i
            },
            (el) => el.item.sku
        )

        // If the status is acknowledged, shipped, cancelled or refunded, we don't need to do anything
        if (no3rd_order.open === 1) {
            continue // Order is already acknowledged
        }
        if (no3rd_order.boxes.length === 0) {
            continue // Order is not shipped
        }

        // // Update tracking
        const request = walmart.shipping_updates_ca(
            walmart_auth,
            { purchaseOrderId: walmart_order.purchaseOrderId },
            {
                // @ts-ignore
                orderShipment: {
                    orderLines: {
                        orderLine: no3rd_boxes_to_walmart_order_lines(
                            matched_order_items,
                            no3rd_order
                        ),
                    },
                },
            },
            { 'Content-Type': 'application/json' }
        )

        const response: { data: { list: walmart.shipping_updates_ca_type } } =
            await axios(request)
    }
}

type WalmartOrderLines = {
    orderLines: {
        orderLine: {
            lineNumber: string
            orderLineStatuses: {
                orderLineStatus: {
                    status:
                        | 'CREATED'
                        | 'ACKNOWLEDGED'
                        | 'SHIPPED'
                        | 'CANCELLED'
                        | 'REFUND'
                    asn?: { packageASN: string; palletASN?: string }
                    statusQuantity: {
                        unitOfMeasurement: string
                        amount: string
                    }
                    trackingInfo: {
                        shipDateTime: string
                        carrierName: {
                            otherCarrier?: string
                            carrier?:
                                | 'UPS'
                                | 'USPS'
                                | 'FED_EX'
                                | 'CPC'
                                | 'PCLINT'
                                | 'DHL'
                                | 'GLB'
                                | 'PURINTL_SWWGROUND'
                                | 'FEDEX_SWWEXPRESS'
                        }
                        methodCode:
                            | 'STANDARD'
                            | 'EXPRESS'
                            | 'ONE_DAY'
                            | 'FREIGHT'
                            | 'WHITE_GLOVE'
                            | 'VALUE'
                        trackingNumber: string
                        trackingURL?: string
                    }
                }[]
            }
        }[]
    }
}

type OrderLine = WalmartOrderLines['orderLines']['orderLine'][number]
const no3rd_boxes_to_walmart_order_lines = (
    matched_order_items,
    no3rd_order
): OrderLine[] => {
    return matched_order_items.map(
        ({ no3rd_order_item, walmart_order_item }) => {
            const boxes = no3rd_order.boxes

            const shipping_label = boxes?.[0]?.shipping_labels?.[0]
            const orderLine: OrderLine = {
                lineNumber: walmart_order_item.lineNumber,
                orderLineStatuses: {
                    orderLineStatus: [
                        {
                            status: 'Shipped' as 'SHIPPED',
                            statusQuantity: {
                                unitOfMeasurement: 'Each' as 'EACH',
                                amount: String(no3rd_order_item.quantity),
                            },
                            trackingInfo: {
                                methodCode: 'Standard' as 'STANDARD',
                                shipDateTime: !shipping_label
                                    ? dayjs.utc().toISOString()
                                    : dayjs
                                          .utc(shipping_label.created_at)
                                          .toISOString(),
                                carrierName: {
                                    otherCarrier: !shipping_label
                                        ? 'Other'
                                        : shipping_label.carrier,
                                },
                                trackingNumber: !shipping_label
                                    ? no3rd_order.name
                                    : shipping_label.tracking_number,
                                trackingURL: !shipping_label
                                    ? 'https://lettermail'
                                    : `https://www.canadapost-postescanada.ca/track-reperage/en#/details/${shipping_label.tracking_number}`,
                            },
                        },
                    ],
                },
            }
            return orderLine
        }
    )
}
