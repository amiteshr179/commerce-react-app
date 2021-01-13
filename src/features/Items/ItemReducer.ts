import { PRODUCT_DETAILS } from './actionTypes'
import { ProductState } from './types'

const initialState = {
    product: {}
}

export default (state = initialState, action: ProductState) => {
    switch (action.type) {
        case PRODUCT_DETAILS:
            return { ...state, product: action.product }
        default:
            return state
    }
}
