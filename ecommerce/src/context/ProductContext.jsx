import React, { useReducer } from 'react'
import {useEffect} from "react"
import { createContext } from 'react'

import { getProducts } from '../Utils/utils';



export const Appcontext = createContext()








const ProductContext = ({children}) => {


  const [state,dispatch] = useReducer()


  useEffect(() => {
    
getProducts().then((res) => {
  console.log(res.data);
})


  }, [])
  


    
  return (
    <>
    <Appcontext.Provider >
    {children}
    
    </Appcontext.Provider>
    </>
  )
}

export default ProductContext