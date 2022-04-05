import { No3rdQueryFunction } from '../../../../types/request_function_types'
import { VariantInWalmartCa } from '../convert/walmart_to_no3rd_order'

export const get_variant_in_walmarts_by_walmart_skus = async (
    no3rd_query: No3rdQueryFunction,
    walmart_skus: string[]
): Promise<VariantInWalmartCa[]> => {
    if (walmart_skus.length === 0) {
        return []
    }
    const { variant_in_walmart_cas } = await no3rd_query({
        variant_in_walmart_cas: {
            select: ['id', 'walmart_sku', 'price', 'promo_price', 'is_active', 'variant_id'],
            variants: {
                select: ['id', 'sku', 'barcode'],
                images: {
                    select: ['bucket_url']
                }
            },
            where: {
                in: ['walmart_sku', [...new Set(walmart_skus)]]
            }
        }
    })

    return variant_in_walmart_cas
}
