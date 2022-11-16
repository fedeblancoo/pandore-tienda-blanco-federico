import React, {useState, useEffect} from 'react';
import {getSingleItem} from '../../Services/MockService';
import ItemDetail from './ItemDetail';
import { useParams, UseParams } from "react-router-dom"

 
 function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    const paramsUrl = useParams();
    const id = paramsUrl.id;

  useEffect(
    () => {
      getSingleItem(id).then((respuestaDatos) => setProduct(respuestaDatos), []);
    }
  )

   return (
    <div className='item-list'>
        <ItemDetail 
        title={product.title}
        price={product.price}
        img={product.img}
        />
    </div>
   )
 }
 
 export default ItemDetailContainer