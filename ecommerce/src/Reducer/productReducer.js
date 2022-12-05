

const ProductReducer = (state, action) => {


    if (action.type === "SET_LOADING") {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === "SET_PRODUCTS_DATA") {

        const featuredData = action.payload.filter((el, index) => {
            return el.featured === true

        })


        return {
            ...state,
            products: action.payload,
            featuredProducts: featuredData,
            isLoading: false,
            // isError:false
        }
    }


    if (action.type === "API_ERROR") {
        return {
            ...state,
            isLoading: false,
            isError: true
        }
    }

    if (action.type === "SET_SINGLE_LOADING") {
        return {
            ...state,
            isSingleLoading: true
        }
    }

    if (action.type === "SET_SINGLE_PRODUCT") {
       
        return {
            ...state,
            isSingleLoading: false,
            isError: false,
            singleProduct:action.payload[0]
           
        }
    }
    if (action.type === "SINGLE_ERROR") {
        return {
            ...state,
            isSingleLoading: false,
            isError: true
        }
    }


    return state

}

export default ProductReducer