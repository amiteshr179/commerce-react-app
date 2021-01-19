import React, { Fragment } from 'react'

export const ItemDetail: React.FC = (singleProduct:any) => {

    let authorsList = singleProduct.location.state.item.product.authors;
    if(authorsList){
        authorsList = authorsList.join(", ");
    }
    return (
        <Fragment>
            <div>
                <div className="product-info">
                    <div className="product-image">
                        <img src={singleProduct.location.state.item.product.thumbnailUrl} alt="" />
                    </div>
                    <div className="product-details">
                        <h3>{singleProduct.location.state.item.product.title}</h3>
                        <p>Pages: {singleProduct.location.state.item.product.pageCount}</p>
                        <p>Price: {singleProduct.location.state.item.product.price}</p>
                        <p>Authors: {authorsList}</p>
                        <p>Status: {singleProduct.location.state.item.product.status}</p>
                    </div>
                </div>
                <div className="product-desc">{singleProduct.location.state.item.product.longDescription}</div>
            </div>
        </Fragment>
    )
}
