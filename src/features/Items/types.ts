import { PRODUCT_DETAILS } from './actionTypes'

export interface SystemState {
  count: {
    value: number
  }
}

export interface ProductState {
  type: typeof PRODUCT_DETAILS,
  product:{

  }
}

export interface SystemListState {
  data:[]
}
