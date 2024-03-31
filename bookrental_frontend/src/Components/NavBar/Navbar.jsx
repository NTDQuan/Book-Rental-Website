import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/shopping-cart.png'

const Navbar = () => {

    const [menu, setMenu] = useState("home")

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=""/>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => {setMenu("home")}}><Link style={{ textDecoration: 'none', color: 'var(--text-color)' }} to='/'>Home</Link>{menu === "home"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("allbooks")}}><Link style={{ textDecoration: 'none', color: 'var(--text-color)' }} to='/allbooks'>All Books</Link>{menu === "brower"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("about")}}><Link style={{ textDecoration: 'none', color: 'var(--text-color)' }} to='/about'>About</Link>{menu === "about"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt=""/></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}
export default Navbar