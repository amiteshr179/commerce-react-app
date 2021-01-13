import React, {Fragment, useEffect, useReducer, useState} from 'react'

import { getList } from '../services/list';
import  List from '../components/ListOfItems';
// @ts-ignore
import {ItemDetail} from "./ItemDetail";
import * as actions from "../features/Items";
import ItemReducer from "../features/Items/ItemReducer";
// @ts-ignore
import CartReducer from "../features/Items/CartReducer";


export const Home: React.FC = () => {
    // eslint-disable-next-line no-use-before-define
    const [list, setList]:[list: any, setList:any] = useState([]);
    // eslint-disable-next-line no-use-before-define
  const [item, dispatch]:[item: any, dispatch:any] = useReducer(ItemReducer,{product:{}});
    // eslint-disable-next-line no-use-before-define
    const [ItemClick, setItemClick]:[ItemClick: any, setItemClick:any] = useState(false);
    const [cartProduct, dispatchCart]:[cartProduct:any, dispatchCart:any] = useReducer(CartReducer,{items:[]})
    const handleChange =(product:any)=>{
        setItemClick(true);
        dispatch(actions.productDetails(product));
    };

    const addToCartChange=(product:any) =>{
        dispatchCart(actions.addToCart(product));
    };


  useEffect(() => {
    getList('https://api.jsonbin.io/b/5f45e8d8514ec5112d0e72aa')
        .then(items => {
            setList(items);
        })
  }, [])
    return (
    <Fragment>
        {!ItemClick ? (
            <List products={list} singleClick={handleChange} addToCartChange={addToCartChange}/>) : (
            <ItemDetail item={item}/>
        )
        }
        {console.log(cartProduct)}
     </Fragment>
  )
}
