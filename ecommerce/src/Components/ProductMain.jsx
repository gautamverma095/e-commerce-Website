import React from 'react'
import { useFilterContext } from '../context/FilterContext'

import ListView from "../Components/ListView"
import Gridview from "../Components/GridView"

const ProductMain = () => {


  const {filter_products,grid_view} = useFilterContext()

  console.log(filter_products);

 if(grid_view)
 {
   return <Gridview   products = {filter_products}/>
 }
 if(!grid_view)
 {
return   <ListView products = {filter_products} />
   
 }
}

export default ProductMain