import React, { useContext} from 'react'
import { cartContext } from '../../context/cartContext'

function Cart () {
    const {cart, removeItem} = useContext(cartContext)
    

    return (
        <h1>Estamos trabajando</h1>
    )
}

export default Cart