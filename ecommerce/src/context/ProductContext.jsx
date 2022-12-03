import React from 'react'
import { createContext } from 'react'

export const Appcontext = createContext()

const ProductContext = ({children}) => {


    
  return (
    <>
    <Appcontext.Provider >
    {children}
    
    </Appcontext.Provider>
    </>
  )
}

export default ProductContext