import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"
import {FiShoppingCart} from "react-icons/fi"
import { Nav } from '../Styles/Navbar'

 const Navbar = () => {


  return (
   <Nav>
   <div className='navbar'>
     <ul className="navbar-lists">
     
      <li>
        <NavLink to = "/" className="navbar-link">Home</NavLink>
      </li>
      <li>
        <NavLink to = "/about"  className="navbar-link">About</NavLink>
      </li>
      <li>
        <NavLink to = "/products" className="navbar-link">Products</NavLink>
      </li>
      <li>
        <NavLink to = "/contact" className="navbar-link">Contact</NavLink>
      </li>
      <li>
        <NavLink to = "/cart" className="navbar-link cart-trolley--link">
        <FiShoppingCart className='cart-trolley'/>
        <span className='cart-total--item'>10</span>
        </NavLink>
      </li>
     </ul>
   
   </div>
   </Nav>
  )
}



export default Navbar