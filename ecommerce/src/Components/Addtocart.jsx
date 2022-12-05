import React, { useState } from 'react'
import { AddToCartStyles } from '../Styles/Addtocart'
import { FaCheck } from "react-icons/fa";
import CartAmount from './CartAmount';
import { NavLink } from 'react-router-dom';
import { Button } from '../Styles/Button';



const Addtocart = ({product}) => {

    const {id,colors,stock} = product
    const [color,setColor] = useState(colors[0])
    const [amount,setAmount] = useState(1)

    const increaseAmount = () => {

      amount < stock ? setAmount(amount+1) : setAmount(stock)

    }
    const decreaseAmount = () => {

      amount > 0 ? setAmount(amount-1) : setAmount(1)
      
    }


  return (
    <AddToCartStyles>


    <div className="colors">
    
    <p>
    Colors:

    {
        colors.map((el,index) => {
            return (
                
                <button key={index}  style = {{backgroundColor : el,}} 
                className = {color === el  ? "btnStyle active" : "btnStyle"}
                
                >
                {color === el ? <FaCheck/> :null}
                </button>
                
                
            )
        })
    }
    </p>
    
    </div>
  
    
    
<CartAmount 
 amount = {amount}
  increaseAmount ={increaseAmount}
   decreaseAmount = {decreaseAmount}   />


   <NavLink to="/cart">
   <Button className='btn'>
   Add To Cart
   
   </Button>
   </NavLink>
     
    </AddToCartStyles>
  )
}

export default Addtocart