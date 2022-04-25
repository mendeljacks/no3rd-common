import { Buffer } from 'buffer'
import * as walmart from 'walmart_marketplace'

export const get_changed_variant_ids_query = (last_updated: string) => {
    return {
        variants: {
            select: 'id',
            where: {
                and: [
                    // {
                    //     any: [
                    //         'variant_in_walmart_cas',
                    //         { eq: ['is_active', 1] },
                    //     ],
                    // },
                    {
                        or: [
                            {
                                any: [
                                    'inventory_adjustments',
                                    { gte: ['updated_at', last_updated] },
                                ],
                            },
                            {
                                any: [
                                    'variant_in_walmart_cas',
                                    { gte: ['updated_at', last_updated] },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    }
}

export const get_variants_query = (variant_ids: number[]) => {
    return {
        variants: {
            select: ['id'],
            inventory_adjustments: {
                select: [{ sum: 'quantity' }],
                group_by: ['variant_id'],
            },
            variant_in_walmart_cas: {
                select: ['walmart_sku'],
            },
            where: {
                in: ['id', variant_ids],
            },
        },
    }
}

export const get_walmart_request = (
    variant_ids: number[],
    variants: any[],
    walmart_auth: any,
    walmart_connector: ({ method: string, params: any }) => Promise<any>
) => {
    // Complain if some variants are unmapped
    const unmapped_variants = variant_ids.filter(
        (el) => !variants.find((el2) => el2.id === el)
    )
    if (unmapped_variants.length) {
        throw new Error(
            `Could not find mappings for ${unmapped_variants.join(', ')}`
        )
    }

    const walmart_inventory = variants.flatMap((variant) => {
        return variant.variant_in_walmart_cas?.map((el, i) => {
            const sku = variant.variant_in_walmart_cas[i].walmart_sku
            const quantity =
                variant.inventory_adjustments?.[0]?.sum_quantity || 0

            return {
                sku: sku,
                quantity: {
                    unit: 'EACH',
                    amount: quantity,
                },
                fulfillmentLagTime: 1,
            }
        }) ?? []
    })

    const body = Buffer.from(
        JSON.stringify({
            InventoryHeader: { version: '1.4' },
            Inventory: walmart_inventory,
        })
    )
    const headers: any = { accept: 'application/json' }

    const walmart_request = walmart_connector({
        method: 'update_bulk_inventory',
        params: [walmart_auth, { feedType: 'inventory' }, body, headers],
    })

    return { walmart_request, walmart_inventory }
}
