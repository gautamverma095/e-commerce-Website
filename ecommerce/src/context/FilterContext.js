import { createContext, useContext, useEffect, useReducer } from "react";
import { Appcontext } from "./ProductContext";
import reducer from "../Reducer/filterReducer"

const Filtercontext = createContext()

const initialState = {
    filter_products:[],
    all_products:[],
    grid_view:false
}


export const FilterContextProvider = ({children}) =>{

    const {products} = useContext(Appcontext)

  const [state,dispatch] = useReducer(reducer,initialState)



  const setGrid = () => {
  return  dispatch({type:"SET_GRID"})

  }


useEffect(() => {
dispatch({type:"FILTER_PRODUCTS",payload:products})

},[products])


return (

    <Filtercontext.Provider value={{...state , setGrid}} >
    
    {children}
    </Filtercontext.Provider>
)

}

export const useFilterContext = () => {
    return useContext(Filtercontext)
}