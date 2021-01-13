import React, { Fragment } from 'react'

export const ItemDetail: React.FC <{item:any}> = (singleProduct:any) => {

    let authorsList = singleProduct.item.product.authors;
    if(authorsList){
        authorsList = authorsList.join(", ");
    }
    return (
        <Fragment>
            <div>
                <div className="product-info">
                    <div className="product-image">
                        <img src={singleProduct.item.product.thumbnailUrl} alt="" />
                    </div>
                    <div className="product-details">
                        <h3>{singleProduct.item.product.title}</h3>
                        <p>Pages: {singleProduct.item.product.pageCount}</p>
                        <p>Price: {singleProduct.item.product.price}</p>
                        <p>Authors: {authorsList}</p>
                        <p>Status: {singleProduct.item.product.status}</p>
                    </div>
                </div>
                <div className="product-desc">{singleProduct.item.product.longDescription}</div>
            </div>
        </Fragment>
    )
}
