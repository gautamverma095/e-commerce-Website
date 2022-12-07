import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer";


const CartContext = createContext()
const intialState = {
    cart: JSON.parse(localStorage.getItem("Products")) || [],
    totalItem: "",
    totalAmount: "",
    shippingFee: 500,



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

        dispatch({ type: "TOTAL_CART_ITEMS" })
        dispatch({ type: "TOTAL_CART_PRICE" })
        
        localStorage.setItem("Products", JSON.stringify(state.cart))


    }, [state.cart])


    // clear cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })

    }

    // increaseAmount and decreaseAmount in the cart

    const increaseAmount = (id) => {

        dispatch({type:"INCREMENT_AMOUNT",payload:id})

    }
    const decreaseAmount = (id) => {
        dispatch({ type: "DECREMENT_AMOUNT", payload: id })

    }

    return (


        <CartContext.Provider value={{ ...state, addToCart, toggleDelete, clearCart, decreaseAmount, increaseAmount }}>

            {children}

        </CartContext.Provider>
    )
}


export const UseCartContext = () => {
    return useContext(CartContext)
}