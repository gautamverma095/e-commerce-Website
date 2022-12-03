import React from 'react'
import {  Route, Routes } from "react-router-dom";

import Home from './Home';
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./Error";

const AllRoutes = () => {
  return (
 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
  
    
  )
}

export default AllRoutes