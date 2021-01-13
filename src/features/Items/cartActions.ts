import * as actionTypes from "./actionTypes";

export const addToCart = (cartItems : any) => {
    return {
        type: actionTypes.ADD_TO_CART,
        "cartItems": cartItems,
    };
};

export const buyNow = (cartItems : any) => {
    return {
        type: actionTypes.BUY_NOW,
        "cartItems": cartItems,
    };
};

export const removeFromCart = (cartItems: any) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        "cartItems": cartItems,
    };
};

export const cleanCart = () => (dispatch : any) => {
    dispatch({
        type: actionTypes.CLEAN_CART,
    });
};

export const FetchCart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS
    };
}


