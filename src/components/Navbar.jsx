import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className='logo'><h1>JoseShop</h1></Link>
            <ul className='menu'>
                <li><Link className='menu-link' to="/">Inicio</Link></li>
                <li><Link className='menu-link' to="/productos">Productos</Link></li>
                <li><Link className='menu-link' to="/productos/Alimentos">Alimentos</Link></li>
                <li><Link className='menu-link' to="/productos/Salud">Salud</Link></li>
                <li><Link className='menu-link' to="/productos/Bebidas">Bebidas</Link></li>
                <li><Link className='menu-link' to="/productos/Hogar">Hogar</Link></li>
                <li><Link className='menu-link' to="/nosotros">Nosotros</Link></li>
                <li><Link className='menu-link' to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    ) 
}

export default Navbar