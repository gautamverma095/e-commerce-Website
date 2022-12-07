import React, { useContext } from 'react'
import { Appcontext } from '../context/ProductContext'
import { FeaturedProductsStyles } from '../Styles/FeaturedProducts';
import Product from './Product';




const FeaturedProducts = () => {

    const  {isLoading,featuredProducts} = useContext(Appcontext)

    if(isLoading)
    {
        return <h1 style={{textAlign:"center"}}>...Loading</h1>
    }
  return (
    <FeaturedProductsStyles className='section'>

    <div className="container">
    <div className="intro-data">Check Now!</div>

    <div className="common-heading"> Our Feature Services </div>

    <div className=' grid grid-three-column'>
    
    {
        featuredProducts.map((el,index) => {
            return <Product  key={el.id}  {...el}/>

        })
    }
    </div>

    </div>
    
    
    
    
    </FeaturedProductsStyles>
  )
}

export default FeaturedProducts