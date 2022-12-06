
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
                    newAmount = el.amount + amount


                    if (newAmount >= el.max) {
                        newAmount = el.max
                    }
                    return {
                        ...el,
                        amount: newAmount
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

    if (action.type === "INCREMENT_AMOUNT") {
        // vaishali13
        let newAmount
        let updatedAmount = state.cart.map((el) => {
            if (el.id === action.payload)  // vaishali13 === vaishali13
            {
                if (el.amount < el.max)
                {
                     newAmount = el.amount + 1
                }
                else {
                    newAmount = el.amount
                }
              
                

                return {
                    ...el,
                    amount:newAmount
                }
                
            }
            else {
                return el
            }


        })

        return {
            ...state,
            cart:updatedAmount
        }




    }
    if (action.type === "DECREMENT_AMOUNT") {
        // vaishali13
        let newAmount
        let updatedAmount = state.cart.map((el) => {
            
            if (el.id === action.payload)  // vaishali13 === vaishali13
            {
                
                if (el.amount > 1) {

                    console.log(el.amount);
                    newAmount = el.amount - 1
                }
                else {
                    newAmount = el.amount
                }
            


                return {
                    ...el,
                    amount: newAmount
                }

            }
            else {
                return el
            }


        })

        return {
            ...state,
            cart: updatedAmount
        }




    }
    return state
}

export default CartReducer