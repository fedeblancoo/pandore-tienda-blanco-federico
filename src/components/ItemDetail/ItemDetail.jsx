import React, {useContext, useState} from 'react';
import ItemCounter from '../ItemCounter/ItemCounter';
import { cartContext } from '../../context/cartContext';
import DefaultButton from '../Button/DefaultButton';
import { Link } from 'react-router-dom';

function ItemDetail({ product }) {
  const { addToCart } = useContext(cartContext);
  const [inCart, setInCart] = useState(false);

  function onAddToCart (count) {
    addToCart(product, count)
    setInCart(true)
  }

  return (
    <div className='item-list'>
      <div className='item'>
          <img src={product.img} alt={product.title} />
          <h2>{product.title}</h2>
          <h3>${product.price}.-</h3>
          
          {inCart ?
            <Link to='/cart'>
              <DefaultButton> Ir al carrito </DefaultButton>
            </Link>
          : <ItemCounter onAddToCart={onAddToCart} stock={product.stock}/>}
      </div>
    </div>
  )
}

export default ItemDetail;