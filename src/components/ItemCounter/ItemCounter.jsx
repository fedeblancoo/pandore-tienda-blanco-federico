import React from 'react'
import DefaultButton from '../Button/DefaultButton';

function ItemCounter() {
    let [count, setCount] = React.useState(1);

    function handleSuma () {
        setCount (count+1)
    }

    function handleResta () {
        if (count > 1)
            setCount (count-1)
    }

    return (
        <div>
            <button onClick={handleResta}><img src="./img/minus.png" alt="resta" /></button>
            <span>{count}</span>
            <button onClick={handleSuma}><img src="./img/plus.png" alt="suma" /></button>
            <DefaultButton>Agregar al carrito</DefaultButton>

        </div>
    )
}

export default ItemCounter