import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/cartReducer";


const CartContext = createContext()
const intialState = {
    cart: [],
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


    return (


        <CartContext.Provider value={{ ...state, addToCart }}>

            {children}

        </CartContext.Provider>
    )
}


export const UseCartContext = () => {
    return useContext(CartContext)
}