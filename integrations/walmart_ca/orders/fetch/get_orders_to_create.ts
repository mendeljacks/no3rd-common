import { Options } from '../import_walmart_orders'
import {
    VariantInWalmartCa,
    WalmartOrder,
} from '../convert/walmart_to_no3rd_order'
import { get_variant_in_walmarts_by_walmart_skus } from './get_variant_in_walmarts_by_walmart_skus'
import { No3rdQueryFunction } from '../../../../types/request_function_types'

const get_no3rd_orders_by_name = async (
    no3rd_query: No3rdQueryFunction,
    names: string[],
    integration_id: number
): Promise<{ name: string }[]> => {
    const query = {
        orders: {
            select: ['name'],
            where: {
                and: [
                    { in: ['name', names] },
                    { eq: ['integration_id', integration_id] },
                ],
            },
        },
    }
    const { orders } = await no3rd_query(query)
    return orders
}

export type Province = { id: number; name: string; two_letter_code: string }
export const get_provinces_by_tlc = async (
    no3rd_query: No3rdQueryFunction,
    tlcs: string[]
): Promise<Province[]> => {
    const two_letter_codes = [...new Set(tlcs.filter((el) => el !== null))]
    if (two_letter_codes.length === 0) return []

    const query = {
        provinces: {
            select: ['id', 'name', 'two_letter_code'],
            countries: {
                select: ['name'],
            },
            where: {
                in: ['two_letter_code', two_letter_codes],
            },
        },
    }

    const { provinces } = await no3rd_query(query)
    return provinces
}

export const get_orders_to_create = async (
    no3rd_query: No3rdQueryFunction,
    walmart_orders: WalmartOrder[],
    integration_id: number
): Promise<{
    walmart_orders_to_create: WalmartOrder[]
    provinces: Province[]
    variant_in_walmart_cas: VariantInWalmartCa[]
}> => {
    // Existance check
    const existing_walmart_orders = await get_no3rd_orders_by_name(
        no3rd_query,
        walmart_orders.map((walmart_order) => walmart_order.purchaseOrderId),
        integration_id
    )
    const walmart_orders_to_create = walmart_orders.filter(
        (o) =>
            !existing_walmart_orders
                .map((o) => o.name)
                .includes(o.purchaseOrderId)
    )
    // Fetch provinces
    const provinces = await get_provinces_by_tlc(
        no3rd_query,
        walmart_orders_to_create.map(
            (el) => el.shippingInfo.postalAddress.state
        )
    )
    // Fetch variant_in_walmarts
    const walmart_skus = walmart_orders_to_create.flatMap(
        (el) => el.orderLines?.orderLine?.map((i) => String(i.item.sku)) || ''
    )

    const variant_in_walmart_cas =
        await get_variant_in_walmarts_by_walmart_skus(no3rd_query, walmart_skus)
    return { walmart_orders_to_create, provinces, variant_in_walmart_cas }
}
