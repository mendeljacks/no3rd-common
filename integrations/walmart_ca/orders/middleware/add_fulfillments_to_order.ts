import { deep_get } from 'yay_json'
//import { api_store } from '../../../../../stores/api_store'

export const add_fulfillments_to_orders = async (
    no3rd_axios: (server_route: string, body: object) => Promise<any>,
    orders,
    {
        should_generate_boxes,
        should_generate_inventory_adjustments
    }: { should_generate_boxes: boolean; should_generate_inventory_adjustments: boolean }
) => {
    if (orders.length === 0) return []
    // Add fulfillments
    const { inventory_adjustments, inventory_adjustment_order_item_paths, boxes } = await no3rd_axios('/business_logic/fulfillment_generator', {
            should_generate_boxes: should_generate_boxes,
            should_generate_inventory_adjustments: should_generate_inventory_adjustments,
            orders
        })
        .catch(err => {
            console.error(err)
            return Promise.reject('Failed to generate fulfillments')
        })

    for (let i = 0; i < inventory_adjustments.length; i++) {
        const inventory_adjustment = inventory_adjustments[i]
        const order_item_path = inventory_adjustment_order_item_paths[i]

        const value = {
            inventory_adjustments: [inventory_adjustment]
        }
        deep_get([...order_item_path, 'order_item_fulfillments', 0], value, orders)
    }
}
