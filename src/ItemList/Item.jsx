import React from 'react'
import './Item.css'
import DefaultButton from '../components/Button/DefaultButton'
import { Link } from 'react-router-dom';


function Item({ product }) {
  const urlDetail = `/detail/${product.id}`;

  return (
    <div className='item'>
        <img src={product.img} alt={product.title} srcSet="" />
        <h2>{product.title}</h2>
        <h3>${product.price}.-</h3>

        <Link to={urlDetail}>
          <DefaultButton> Ver mas </DefaultButton>
        </Link>
        
    </div>
  )
}

export default Item