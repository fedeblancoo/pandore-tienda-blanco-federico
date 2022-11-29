import React from 'react'
import DefaultButton from '../Button/DefaultButton';


function ItemCounter( { stock, onAddToCart }) {
    let [count, setCount] = React.useState(1);

    function handleSuma () {
        if (count < stock )
        setCount (count+1)
    }

    function handleResta () {
        if (count > 1)
            setCount (count-1)
    }

    return (
        <div>
            <DefaultButton onClick={handleResta}><img src="./img/minus.png" alt="resta" /></DefaultButton>
            <span>{count}</span>
            <DefaultButton onClick={handleSuma}><img src="./img/plus.png" alt="suma" /></DefaultButton>
            <DefaultButton onClick={()=> onAddToCart(count)} >Agregar al carrito</DefaultButton>

        </div>
    )
}

export default ItemCounter