
const filterReducer = (state, action) => {


    if (action.type === "FILTER_PRODUCTS") {

        let priceArr = action.payload.map((el) => {
            return el.price
        })

        let maxPrice = Math.max.apply(null, priceArr)
        // console.log(maxPrice);


        return {
            ...state,
            filter_products: [...action.payload],
            all_products: [...action.payload],
            filter: {
                ...state.filter,
                price: maxPrice,
                maxPrice
            }
        }

    }
    if (action.type === "SET_GRID") {
        return {
            ...state,
            grid_view: !(action.payload)
        }

    }
    if (action.type === "SORTING") {

        // const sortVal = document.getElementById("sort")
        // const temp = sortVal.options[sortVal.selectedIndex].value   

        return {
            ...state,
            sort_val: action.payload
        }

    }

    const tempData = [...state.filter_products]

    let filteredData

    if (state.sort_val === "a-z") {
        filteredData = tempData.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (state.sort_val === "z-a") {
        filteredData = tempData.sort((a, b) => b.name.localeCompare(a.name))
    }


    if (state.sort_val === "lth") {
        filteredData = tempData.sort((a, b) => {
            return a.price - b.price
        })
    }
    if (state.sort_val === "htl") {
        filteredData = tempData.sort((a, b) => {
            return b.price - a.price
        })
    }

    if (action.type === "SORTED_PRODUCTS") {
        return {
            ...state,
            filter_products: filteredData
        }

    }

    if (action.type === "SEARCH_FILTER_VAL") {
        const { name, value } = action.payload

        return {
            ...state,
            filter: {
                ...state.filter,
                [name]: value
            }
        }
    }

    if (action.type === "FILTERED_PRODUCT") {

        let { all_products } = state
        let tempFiltered = [...all_products]

        const { text, category, company, price } = state.filter

        if (text) {
            tempFiltered = tempFiltered.filter((el) => {


                return el.name.toLowerCase().includes(text)
            })
        }
        if (category !== "All") {
            tempFiltered = tempFiltered.filter((el) => {


                return el.category === category
            })
        }
        if (company !== "All") {
            tempFiltered = tempFiltered.filter((el) => {


                return el.company === company
            })
        }
        if (price === 0) {
            tempFiltered = tempFiltered.filter((el) => {


                return (+el.price) === price

            })


        }
        else {
            tempFiltered = tempFiltered.filter((el) => {


                return (+el.price) <= price

            })

        }



        return {
            ...state,
            filter_products: tempFiltered
        }
    }

    if (action.type === "CLEAR_FILTERS") {
        console.log("first")

        return {
            ...state,
            filter: {
                ...state.filter,
                text: "",
                category: "All",
                company: "All",
                color: "All",
                price: state.filter.maxPrice,
                maxPrice: state.filter.maxPrice,
                minPrice: 0
            }
        }


    }



    return state

}

export default filterReducer