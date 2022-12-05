import React from 'react'
import { GridViewStyles } from '../Styles/GridView'
import Product from './Product'

const GridView = ({products}) => {
  return (
    <GridViewStyles className='section'>

    <div className='container grid grid-three-column'>
    {
        products.map((el,index) => {
            return (
      <Product key = {el.id}  {...el}/>

            )
        })
    }
    
    </div>


    
    
    </GridViewStyles>
  )
}

export default GridView