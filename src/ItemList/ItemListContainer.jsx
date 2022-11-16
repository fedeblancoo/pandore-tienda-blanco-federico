import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import getItems from '../Services/MockService';
import Item from './Item';
import { useParams } from "react-router-dom";
 
 function ItemListContainer() {
    const [products, setProducts] = useState([]);

    const paramsUrl = useParams();
    const idCategory = paramsUrl.idCategory;

  useEffect(
    () => {
      getItems(idCategory).then((respuestaDatos) => setProducts(respuestaDatos), []);
    }
  )

   return (
    <div className='item-list'>
        {products.map ((product) => {
                return (
                    <Item 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    img={product.img}
                    />
                    
                )
            })
        }
    </div>
   )
 }
 
 export default ItemListContainer