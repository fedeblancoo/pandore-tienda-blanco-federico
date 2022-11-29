import React, {useState, useEffect} from 'react';
import {getSingleItem} from '../../Services/MockService';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom"

 
 function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const paramsUrl = useParams();
    const id = paramsUrl.id;

  useEffect(
    () => {
      getSingleItem(id).then((respuestaDatos) => {
      setProduct(respuestaDatos);
      setIsLoading(false)
    },
      []);
    }
  )

  if (isLoading)
    return ( 
      <div className='div-loader'>
        <div className='lds-dual-ring'></div>
      </div> 
    )
    
    return (
      <ItemDetail product={product}/> 
    )
 }
 
 export default ItemDetailContainer