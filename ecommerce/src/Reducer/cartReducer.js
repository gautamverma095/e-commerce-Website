const CartReducer = (state, action) => {


    if (action.type === "ADD_TO_CART") {
        const { id, color, colors, amount, product } = action.payload


        const newData = {
            id: id + color,
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
    return state
}

export default CartReducer