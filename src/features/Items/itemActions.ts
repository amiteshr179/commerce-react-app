import * as actionTypes from "./actionTypes";

export const setProducts = (products: any) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        "products": products,
    };
};

export const fetchProductsFailed = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILED,
    };
};

export const productDetails = (product: any) => {
    return {
        type: actionTypes.PRODUCT_DETAILS,
        "product": product,
    };
};

