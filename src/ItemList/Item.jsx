import React from 'react'
import './Item.css'
import DefaultButton from '../components/Button/DefaultButton'
import { Link } from 'react-router-dom';


function Item(props) {
  const urlDetail = `/detail/${props.id}`;

  return (
    <div className='item'>
        <img src={props.img} alt={props.title} srcSet="" />
        <h2>{props.title}</h2>
        <h3>${props.price}.-</h3>

        <Link to={urlDetail}>
          <DefaultButton> Ver mas </DefaultButton>
        </Link>
        
    </div>
  )
}

export default Item