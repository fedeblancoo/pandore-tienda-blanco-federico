import React, { useContext} from 'react'
import { cartContext } from '../../context/cartContext'

function CartWidget() {
 const miContext = useContext(cartContext);
 const cantidadDeItems = miContext.itemsInCart();
 
 if (cantidadDeItems === 0) return <img src="./img/shopping-bag-solid-24.png" alt="carrito" srcSet="" />
  
 return (
    <div>
      <img src="./img/shopping-bag-solid-24.png" alt="carrito" srcSet="" />
      <span>{miContext.itemsInCart()}</span>
    </div>
  )
}

export default CartWidget