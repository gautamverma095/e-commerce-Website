import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer";


const CartContext = createContext()
const intialState = {
    cart:   JSON.parse(localStorage.getItem("Products")) || [],
    totalItem: "",
    totalAmount: "",
    shippingFee: 500


}


export const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialState)
 


    

    const addToCart = (id, color, colors, amount, product) => {

        dispatch({
            type: "ADD_TO_CART", payload: {
                id, color, colors, amount, product
            }
        })

    }


    const toggleDelete = (id) => {

        // console.log("id",id);
        dispatch({ type: "DELETE_FROM_CART", payload: id })

    }


        // localStorage
    
    useEffect(() => {
      localStorage.setItem("Products",JSON.stringify(state.cart))


    }, [state.cart])


    // clear cart
    const clearCart = () => {
        dispatch({type:"CLEAR_CART"})

    }
    

    return (


        <CartContext.Provider value={{ ...state, addToCart, toggleDelete, clearCart}}>

            {children}

        </CartContext.Provider>
    )
}


export const UseCartContext = () => {
    return useContext(CartContext)
}