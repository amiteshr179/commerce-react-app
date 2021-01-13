import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import ItemReducer from "./features/Items/ItemReducer";
import CartReducer from "./features/Items/CartReducer";

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  product: ItemReducer,
  cart: CartReducer
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store

export type RootState = ReturnType<typeof rootReducer>
