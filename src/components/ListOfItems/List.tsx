import React from "react";
import "./items.css";

const List : React.FC<{products:any , singleClick: any, addToCartChange:any}>  = (props: any) => {
    const { products, singleClick, addToCartChange } : any = props;
    return (
        <div className="product-wrapper">
            {products.map((product: any) => {
                return (
                    <div className="product-div" key={product.isbn}>
                        <img src={product.thumbnailUrl} alt="" />
                        <button type="button" onClick={()=>singleClick(product)}>
                                {product.title}
                            </button>
                        <button type="button"
                            className="add-cart-btn btn"
                            onClick={() => addToCartChange(product)} >
                            Add To Cart
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default List;
