import { get_all_released_orders_type } from 'walmart_marketplace'
import { Options } from '../import_walmart_orders'

export type ExtractTypeFromUnion<U, T> = T extends U ? never : T
export type WalmartOrder = ExtractTypeFromUnion<
    undefined,
    get_all_released_orders_type['elements']['order']
>[number]
export type VariantInWalmartCa = {
    id?: number
    walmart_sku: string
    price: number
    promo_price: number
    is_active: number
    variant_id: number | null
    integration_id: number | undefined
    variants: {
        id?: number
        sku?: string
        barcode?: string
        images?: {
            bucket_url?: string
        }[]
    }[]
    _local_meta?: any
}

export const walmart_to_no3rd_order = (
    walmart_order: WalmartOrder,
    store_id: number,
    provinces: { [two_letter_code: string]: { id: number; name: string; two_letter_code: string } },
    variant_in_walmart_cas: { [key: string]: VariantInWalmartCa },
    integration_id: number
) => {
    const no3rd_order = {
        integration_id,
        store_id: store_id,
        province_id: provinces[walmart_order.shippingInfo.postalAddress.state]?.id,
        name: walmart_order.purchaseOrderId,
        first_name: walmart_order.shippingInfo.postalAddress.name?.split(' ')?.[0],
        last_name: walmart_order.shippingInfo.postalAddress.name?.split(' ')?.slice(1)?.join(' '),
        phone: walmart_order.shippingInfo.phone,
        address: walmart_order.shippingInfo.postalAddress.address1,
        address2: `${walmart_order.shippingInfo.postalAddress.address2}`.trim(),
        note: walmart_order.shippingInfo.postalAddress.addressType,
        zip: walmart_order.shippingInfo.postalAddress.postalCode,
        city: walmart_order.shippingInfo.postalAddress.city,
        province: walmart_order.shippingInfo.postalAddress.state,
        country: walmart_order.shippingInfo.postalAddress.country,
        order_items: walmart_order.orderLines.orderLine?.map(orderLine => {
            const charge_amounts =
                orderLine.charges?.charge?.map(charge => {
                    const amount = charge?.chargeAmount?.amount || 0
                    return amount
                }) || []
            if (orderLine.orderLineQuantity.unitOfMeasurement !== 'EACH') {
                throw new Error(
                    `Unit of measurement is not EACH: ${orderLine.orderLineQuantity.unitOfMeasurement}`
                )
            }
            return {
                variant_id: variant_in_walmart_cas[orderLine.item.sku]?.variant_id,
                quantity: Number(orderLine.orderLineQuantity.amount),
                order_item_marketplace_info: [
                    {
                        price: charge_amounts.reduce((acc, val) => acc + val, 0)
                        // TODO: gst_customer_rate
                        // TODO: hst_customer_rate
                        // TODO: pst_customer_rate
                        // TODO: qst_customer_rate
                    }
                ]
            }
        })
    }
    return no3rd_order
}
