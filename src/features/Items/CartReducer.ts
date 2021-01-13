import * as actionTypes from "./actionTypes";

const initialState = {
    items: []
};

export default(state = initialState, action: any) => {
    const cartItems = state.items;
    let isSelected = false;
    const updatedCart = [...state.items];
    const updatedItemIndex = updatedCart.findIndex(
        (item:any) => item.isbn === action.cartItems.isbn
    );
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            cartItems.forEach((x:any) => {
                if (x.isbn === action.cartItems.isbn) {
                    isSelected = true;
                }
            });

            if (!isSelected) {
                // @ts-ignore
                cartItems.push(action.cartItems);
            }
            return {
                ...state,
                items: cartItems
            };
        case actionTypes.REMOVE_FROM_CART:
            updatedCart.splice(updatedItemIndex, 1);
            return {
                ...state,
                items: updatedCart
            };
        case actionTypes.CLEAN_CART:
            alert("Successfully Order Created");
            return {
                ...state,
                items: []
            };
        case actionTypes.FETCH_PRODUCTS:
            return state;
        default:
            return state;
    }
};
