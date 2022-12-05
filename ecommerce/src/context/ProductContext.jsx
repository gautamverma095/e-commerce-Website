import React, { useReducer } from 'react'
import { useEffect } from "react"
import { createContext } from 'react'
import { getProducts } from '../Utils/utils';
import reducer from "../Reducer/productReducer.js"
import axios  from 'axios';
const API = "https://enchanting-gray-housecoat.cyclic.app/products"



export const Appcontext = createContext()

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {}
}


const ProductContext = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)


  const getProducts = async (url) => {
    return axios.get(url)
  
  }

  // for all products

  useEffect(() => {
    dispatch({ type: "SET_LOADING" })
    getProducts(API).then((res) => {
      dispatch({ type: "SET_PRODUCTS_DATA", payload: res.data })


    }).catch((err) => {
      dispatch({ type: "API_ERROR" })
    })
  }, [])

// for single product
  const getSingleProduct = (url) => {

    dispatch({ type: "SET_SINGLE_LOADING" })

    axios.get(url).then((res) => {
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: res.data })


    }).catch((err) => {
      dispatch({ type: "SINGLE_ERROR" })
    })


  }


  return (
    <>
      <Appcontext.Provider value={{ ...state ,getSingleProduct}} >
        {children}

      </Appcontext.Provider>
    </>
  )
}


export default ProductContext