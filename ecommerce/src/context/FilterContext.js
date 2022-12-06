import { createContext, useContext, useEffect, useReducer } from "react";
import { Appcontext } from "./ProductContext";
import reducer from "../Reducer/filterReducer"

const Filtercontext = createContext()

const initialState = {
    filter_products:[],
    all_products:[],
    grid_view:false,
    sort_val:"lth",
    filter: {
        text:"",
        cateogry:"All",
      company: "All",
        color:"All"
    }
}


export const FilterContextProvider = ({children}) =>{

    const {products} = useContext(Appcontext)

  const [state,dispatch] = useReducer(reducer,initialState)



//   sorting
  const toggleSort = (event) =>{
             const val = event.target.value
          dispatch({type:"SORTING",payload:val})

  }


// filter

const toggleSearch = (event) => {
    const {name,value} = event.target
    console.log(name,value);

    dispatch({type:"SEARCH_FILTER_VAL",payload:{name,value}})
}



  useEffect(() => {
    dispatch({type:"FILTERED_PRODUCT"})
    dispatch({type:"SORTED_PRODUCTS"})
  },[state.sort_val,state.filter])



  const setGrid = () => {


  return  dispatch({type:"SET_GRID",payload:state.grid_view})

  }


useEffect(() => {
dispatch({type:"FILTER_PRODUCTS",payload:products})

},[products])


return (

    <Filtercontext.Provider value={{...state , setGrid,toggleSort,toggleSearch}} >
    
    {children}
    </Filtercontext.Provider>
)

}

export const useFilterContext = () => {
    return useContext(Filtercontext)
}