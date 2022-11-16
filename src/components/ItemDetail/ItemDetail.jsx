import React from 'react'
import ItemCounter from '../ItemCounter/ItemCounter';

function ItemDetail(props) {
  return (
    <div className='item'>
        <img src={props.img} alt={props.title} srcSet="" />
        <h2>{props.title}</h2>
        <h3>${props.price}.-</h3>
        
        <ItemCounter />
    </div>
  )
}

export default ItemDetail;