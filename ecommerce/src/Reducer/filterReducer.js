const filterReducer = (state,action) => {


    if(action.type === "FILTER_PRODUCTS")
    {
              return {
                  ...state,
                  filter_products:[...action.payload],
                  all_products:[...action.payload]
              }

    }
    if(action.type === "FILTER_PRODUCTS")
    {
              return {
                  ...state,
                  grid_view:true
              }

    }

    

    return state

}

export default filterReducer