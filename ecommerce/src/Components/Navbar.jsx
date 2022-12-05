import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"
import { Nav } from '../Styles/Navbar'
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from 'react'

const Navbar = () => {

  const [menuIcon, setMenuIcon] = useState()


  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">

          <li>
            <NavLink to="/" className="navbar-link" onClick={() => setMenuIcon(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link" onClick={() => setMenuIcon(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link" onClick={() => setMenuIcon(false)}>Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link" onClick={() => setMenuIcon(false)}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link"  onClick={() => setMenuIcon(false)}>
              <FiShoppingCart className='cart-trolley' />
              <span className='cart-total--item'>10</span>
            </NavLink>
          </li>
          
        </ul>

        {/*two buttons for open and close menu*/}
        <div className='mobile-navbar-btn'>
          <CgMenu name="menu-outline" className="mobile-nav-icon"
           onClick={() => setMenuIcon(true)} />
          <CgClose name="close-outline" className="mobile-nav-icon close-outline" 
          onClick={() => setMenuIcon(false)} />
        </div>

      </div>
    </Nav>
  )
}



export default Navbar