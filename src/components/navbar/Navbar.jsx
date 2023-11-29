import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

import './navbar.css'

import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'



const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);  //картинката cart(пазарната количка) е на една линия заедноо с "shop","men","women","kids" в нашия дизайн на website затова я слагаме и нея тук

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo icon' />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}><Link style={{ textDecoration: 'none' }} to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("mens")}><Link style={{ textDecoration: 'none' }} to="/mens">Men</Link> {menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("womens")}><Link style={{ textDecoration: 'none' }} to="/womens">Women</Link> {menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("kids")}><Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt='cart icon' /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;
