import React, { useContext } from 'react'
import './Nav.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'



 const Nav = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className="nav-logo">
          <logo/>
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <div className="nav-menu">
            <ul>
            
            <li onClick={() =>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}} >  Shop  </Link> {menu ==="shop"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}} >  Mens </Link> {menu ==="mens"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("womens")}}><Link to='womens' style={{textDecoration:'none'}} >   Womens  </Link>  {menu ==="womens"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}} >   Kids  </Link> {menu ==="kids"?<hr/>:<></>}</li>
            </ul>
        </div>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button> </Link>
            <Link to='/cart'><img src={cart_icon} alt="" />  </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Nav