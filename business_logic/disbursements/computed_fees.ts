export const computed_storage_fees = (storage_fees) => {
    const subtotal_storage_fees = storage_fees
        .map(el => el.units / el.units_per_pallet * el.fee_per_pallet)
        .reduce((a, b) => a + b, 0)
    const tax_storage_fees = storage_fees
        .map(el => el.units / el.units_per_pallet * el.fee_per_pallet * el.tax_rate)
        .reduce((a, b) => a + b, 0)
    return { storage_fees, subtotal_storage_fees, tax_storage_fees }
}