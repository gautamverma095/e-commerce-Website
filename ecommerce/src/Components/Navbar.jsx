import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"
import { Nav } from '../Styles/Navbar'
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from 'react'
import { UseCartContext } from '../context/CartContext';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '../Styles/Button';

const Navbar = () => {

  const [menuIcon, setMenuIcon] = useState()

  const { totalItem } = UseCartContext()
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();


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
          {
            isAuthenticated && <p>{user.name}</p>
          }

          {
            isAuthenticated ? (
              <li>

                <Button onClick={() => logout({ returnTo: window.location.origin })}>
                  Log Out
                </Button>
              </li>

            ) : (
              <li>
                <Button onClick={() => loginWithRedirect()}>Log In</Button>

              </li>

            )
          }




          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link" onClick={() => setMenuIcon(false)}>
              <FiShoppingCart className='cart-trolley' />
              <span className='cart-total--item'>{totalItem}</span>
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