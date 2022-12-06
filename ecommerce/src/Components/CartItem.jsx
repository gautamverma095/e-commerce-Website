import React from 'react'

const CartItem = ({id,name,image,price,amount ,color}) => {
  return (
      <div className='cart_heading grid grid-five-column'>

          <div className="cart-image--name">
              <div>
              <img src={image} alt={name} />
              </div>
          
          
          </div>
      
      
      </div>
  )
}

export default CartItem