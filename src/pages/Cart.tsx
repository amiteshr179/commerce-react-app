import React, {Fragment} from 'react'
import {useDispatch} from "react-redux";
import * as actions from "../features/Items";



export const Cart: React.FC = (props:any) => {
    const dispatch = useDispatch();
    const cartItems = props;
    const removeItem = (item:any)=> {
        dispatch(actions.removeFromCart(item));
    }
    return (
        <Fragment>
            { cartItems.length === 0 ?(<div className="cart-empty">Cart is empty</div>):(
            <div className="cart-wrapper">
                <h3 className="heading">Cart</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((item:any) => {
                        return (
                            <tr key={item.isbn}>
                                <td className="img-td">
                                    <img src={item.thumbnailUrl} alt="" />
                                </td>
                                <td>
                                    <h4>{item.title}</h4>
                                </td>
                                <td>{item.price}</td>
                                <td>
                  <button type="button"
                      className="cart-remove"
                      onClick={() => removeItem(item)}
                  >
                    Remove
                  </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
                )}
        </Fragment>
    )
}
