import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='container-header'>
        <header>
          <Link to="/">
            <h1>P A N D O R E - Tienda de ropa</h1>
          </Link>
            
          <ul>
            <Link to="/">
              <li>Inicio</li>
            </Link>
            <Link to="/category/Abrigo">
              <li>Abrigos</li>
            </Link>
            <Link  to="/category/Calzado">
              <li>Calzados</li>
            </Link>
            <Link  to="/category/Accesorio">
              <li>Accesorios</li>
            </Link>
            <Link  to="/category/Falda">
              <li>Faldas</li>
            </Link>
            <Link  to="/category/Top">
              <li>Tops</li>
            </Link>
            <Link to='cart'>
              <li><CartWidget /></li>
            </Link>
            
          </ul>
        </header>
    </div>
  )
}

export default NavBar