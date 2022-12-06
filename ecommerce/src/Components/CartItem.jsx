import React, { useState } from 'react'
import { FormatPrice } from '../help/help';
import CartAmount from './CartAmount';
import { FaTrash } from "react-icons/fa";
import { UseCartContext } from '../context/CartContext';

const CartItem = ({ id, name, image, price, amount, color, stock }) => {

    const { toggleDelete,increaseAmount,decreaseAmount  } = UseCartContext()

       


    return (
        <div className='cart-heading grid grid-five-column'>

            <div className="cart-image--name ">
                <div>
                    <figure>
                        <img src={image} alt={name} />
                    </figure>

                </div>

                <div>
                    <p>{name}</p>
                    <div className="color-div">
                        <p>Color:</p>
                        <div className='color-style' style={{ backgroundColor: color, color: color }}></div>
                    </div>
                </div>
            </div>

            <div className='cart-hide'>
                <p><FormatPrice price={price} /></p>

            </div>

            {/*total price or quantity */}


            <CartAmount
                amount={amount}
                increaseAmount={() =>  increaseAmount(id)}
                decreaseAmount={() => decreaseAmount(id)} />

         

            <div className="cart-hide">

                <p><FormatPrice price={price * amount} /></p>

            </div>

            <FaTrash className='remove_icon' onClick={() => toggleDelete(id)} />
            <div>
            </div>





        </div>
    )
}

export default CartItem