export const ADD_CRYPTO = 'ADD_CRYPTO'
export const MODIFY_CRYPTO = 'MODIFY_CRYPTO'

export function addCrypto(item) {
    return { type: ADD_CRYPTO, item }
}

export function modifyCrypto(item) {
    return { type: MODIFY_CRYPTO, item }
}
