
const CartReducer = (state, action) => {


    if (action.type === "ADD_TO_CART") {
        const { id, color, colors, amount, product } = action.payload

        let checkingExisting = state.cart.find((el) => {
            return el.id === id
        })

        if (checkingExisting) {
            let newAmount

            let updatedProducts = state.cart.map((el) => {
                if (el.id === id) {

                    return {
                        ...el,
                        amount: el.amount + amount
                    }
                }
                else {
                    return el
                }

            })

            return {
                ...state,
                cart: updatedProducts

            }



        }

        const newData = {
            id,
            name: product.name,
            price: product.price,
            image: product.image,
            max: product.stock,
            color,
            amount,

        }
        return {
            ...state,
            cart: [...state.cart, newData]

        }
    }

    if (action.type === "DELETE_FROM_CART") {

        let updatedData = state.cart.filter((el, index) => {
            return el.id !== action.payload
        })
        return {
            ...state,
            cart: updatedData
        }
    }

    if (action.type === "CLEAR_CART") {

        return {
            ...state,
            cart: []
        }

    }
    return state
}

export default CartReducer