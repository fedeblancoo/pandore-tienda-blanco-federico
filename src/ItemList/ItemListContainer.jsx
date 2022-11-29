import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import getItems from '../Services/MockService';
import Item from './Item';
import { useParams } from "react-router-dom";
 
 function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const paramsUrl = useParams();
    const idCategory = paramsUrl.idCategory;

  useEffect(
    () => {
      getItems(idCategory).then((respuestaDatos) =>{
       setProducts(respuestaDatos);
       setIsLoading(false);
      }, []);
    }
  )
    if (isLoading)
    return (
      <div className='div-loader'>
        <div className='lds-dual-ring'></div>
      </div>
    )

   return (
    <div className='item-list'>
        {products.map ((product) => {
                return (
                    <Item product= {product} key={product.id}/>
                )
            })
        }
    </div>
   )
 }
 
 export default ItemListContainer

