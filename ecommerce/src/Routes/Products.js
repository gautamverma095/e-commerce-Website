import React from 'react'
import FilterSection from '../Components/FilterSection'
import ProductMain from '../Components/ProductMain'
import Sort from '../Components/Sort'
import { ProductStyles } from '../Styles/Product'

 const Products = () => {

  return (
    <ProductStyles>
    
    <div className="container grid grid-filter-column">
    <div>
    <FilterSection/>
    </div>

    <section className="product-view--sort">
    <div className="sort-filter">
    <Sort/>
    </div>

    <div className="main-product">
    <ProductMain/>
    </div>
    
    </section>
    
    
    
    </div>
    
    </ProductStyles>
  )
}

export default Products
