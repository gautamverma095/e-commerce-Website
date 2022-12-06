import React from 'react'
import CartItem from '../Components/CartItem'
import { UseCartContext } from '../context/CartContext'
import { CartStyles } from '../Styles/Cart'

const Cart = () => {


  const { cart } = UseCartContext()
  console.log(cart);
  return (
    <CartStyles>

      <div className="container">
        <div className="cart_heading grid grid-five-column">
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
              
              <CartItem key={el.id}  {...el}/>
            })
          }
        
        
        </div>

      </div>



    </CartStyles>
  )
}

export default Cart
