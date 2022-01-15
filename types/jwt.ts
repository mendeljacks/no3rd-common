export type No3rdJWT = {
    account_id: number
    vendor_ids: number[]
    role_ids: number[]
}

export type LoginData = {
    token: string
    jwt: No3rdJWT
    permissions: {
        id: number
        label: string
    }[]
}