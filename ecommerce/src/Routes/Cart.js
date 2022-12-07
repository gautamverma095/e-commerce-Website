import React from 'react'
import { NavLink } from 'react-router-dom'
import CartItem from '../Components/CartItem'
import { UseCartContext } from '../context/CartContext'
import { CartStyles } from '../Styles/Cart'
import { Button } from "../Styles/Button"
import { FormatPrice } from '../help/help'
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {


  const { cart, clearCart, totalAmount, shippingFee } = UseCartContext()

  const { user, isAuthenticated } = useAuth0();


  let emptyStyles = {
    display: "grid",
    placeItems: "center",
    height: "50vh",


    h2: {
      fontSize: "4.2rem",
      textTransform: "capitalize",
      fontWeight: "300",
      textAlign: "right",

    }



  }

  if (cart.length === 0) {
    return <div styles={emptyStyles}>

      <h2> No Item in your cart</h2>

    </div>
  }

  return (




    <CartStyles>
      

      {
        isAuthenticated && (
          <div className='cart-user--profile'>
            <img src={user.picture} alt={user.name} />
            <h2 className='cart-user--name '>{ user.name}</h2>
          
          </div>
      
        )

      }

      <div className="container">
        <div className="cart-heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>


        </div>
        <hr />
        <div className="cart-item">
          {
            cart.map((el, index) => {

              return <CartItem key={index}  {...el} />
            })
          }


        </div>

        <hr />

        <div className="cart-two-button">

          <NavLink to="/products">

            <Button>
              Continue Shopping
            </Button>
          </NavLink>

          <Button className='btn btn-clear' onClick={clearCart}>Clear Cart</Button>

        </div>

        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>

              <p>Subtotal:</p>
              <p><FormatPrice price={totalAmount} /></p>
            </div>
            <div>

              <p>Shipping Fee:</p>
              <p><FormatPrice price={shippingFee} /></p>
            </div>

            <div>

              <p>Order Total:</p>
              <p><FormatPrice price={shippingFee + totalAmount} /></p>
            </div>


          </div>
        </div>

      </div>



    </CartStyles>
  )
}

export default Cart
