import { add_fulfillments_to_orders } from './middleware/add_fulfillments_to_order'
import {
    WalmartOrder,
    walmart_to_no3rd_order,
} from './convert/walmart_to_no3rd_order'
import { get_orders_to_create } from './fetch/get_orders_to_create'
import * as walmart from 'walmart_marketplace'
import {
    AxiosFunction,
    No3rdMutateFunction,
    No3rdQueryFunction,
} from '../../../types/request_function_types'

export type Options = {
    axios: any
    // base_url: string
    // cookie: string
    integration_id: number
    store_id: number
}

export const import_walmart_orders = async (
    no3rd_query: No3rdQueryFunction,
    no3rd_mutate: No3rdMutateFunction,
    axios: AxiosFunction,
    no3rd_axios: (url: string, body: object) => Promise<any>,
    walmart_auth: any,
    walmart_orders: WalmartOrder[],
    store_id: number,
    integration_id: number,
    walmart_connector: ({ method: string, params: any }) => Promise<any>
): Promise<string> => {
    // Fetch
    const { walmart_orders_to_create, provinces, variant_in_walmart_cas } =
        await get_orders_to_create(no3rd_query, walmart_orders, integration_id)

    if (walmart_orders_to_create.length === 0) {
        return 'No new orders to import. All orders already exist in No3rd.'
    }

    // Normalise
    const normalized_orders_raw = walmart_orders_to_create.map(
        (walmart_order) =>
            walmart_to_no3rd_order(
                walmart_order,
                store_id,
                provinces.reduce(
                    (acc, val) =>
                        Object.assign(acc, { [val.two_letter_code]: val }),
                    {}
                ),
                variant_in_walmart_cas.reduce(
                    (acc, val) =>
                        Object.assign(acc, { [val.walmart_sku]: val }),
                    {}
                ),
                integration_id
            )
    )

    const missingVariantIds = (order) => {
        const variant_ids = order.order_items.map((el) => el.variant_id)
        return variant_ids.some((el) => el === undefined || el === null)
    }
    const normalized_orders = normalized_orders_raw.filter(
        (order) => !missingVariantIds(order)
    )
    const unmapped_orders = normalized_orders_raw.filter((order) =>
        missingVariantIds(order)
    )

    await add_fulfillments_to_orders(no3rd_axios, normalized_orders, {
        should_generate_boxes: true,
        should_generate_inventory_adjustments: true,
    })

    // Acknowledge the orders
    for (let i = 0; i < walmart_orders_to_create.length; i++) {
        const walmart_order_to_create = walmart_orders_to_create[i]
        const statuses =
            walmart_order_to_create?.orderLines?.orderLine?.flatMap(
                (order_line) =>
                    order_line?.orderLineStatuses?.orderLineStatus?.map(
                        (el) => el.status
                    )
            ) || []

        // If the status is acknowledged, shipped, cancelled or refunded, we don't need to do anything
        if (!statuses.map((el) => el?.toLowerCase()).includes('created')) {
            continue // Order is already acknowledged
        }

        let request = walmart_connector({
            method: 'acknowledge_orders_ca',
            params: [
                walmart_auth,
                {
                    purchaseOrderId: walmart_order_to_create.purchaseOrderId,
                },
                {},
            ],
        })

        const response: { data: { list: walmart.acknowledge_orders_ca_type } } =
            await axios({ ...request, data: {} })
    }

    const mutation_results = await Promise.allSettled(
        normalized_orders.map((order) =>
            no3rd_mutate({
                meta: { operation: 'create' },
                orders: [order],
            })
                .then((res) => {
                    return `${order.name} created`
                })
                .catch((err) => {
                    return Promise.reject(
                        `${order.name} failed: ` +
                            err?.response?.data?.summary?.join('. Also ') || ''
                    )
                })
        )
    )

    const all_g = mutation_results
        .map((el) => el.status)
        .every((el) => el === 'fulfilled')

    const output =
        mutation_results.map((el: any) => el.value || el.reason).join('\n') +
        (unmapped_orders.length > 0
            ? `\n\nSkipped ${unmapped_orders.length} unmapped orders.`
            : '')
    return all_g ? Promise.resolve(output) : Promise.reject(output)
}
