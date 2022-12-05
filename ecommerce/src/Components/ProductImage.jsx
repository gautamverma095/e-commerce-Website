import React, { useState } from 'react'

import { ProductImageStyles } from '../Styles/ProductImage'

const ProductImage = ({images = [{url:""}],image = "" }) => {

    const [mainImage,setMainImage] = useState(image)



  return (
    <ProductImageStyles>
    
    <div className="grid grid-four-column">
    {
        images.map((el,index) => {
            return (
                <figure key={index}>
                <img 
                key={index}
        src={el.url}
         alt={el.filename} 
          className = "box-image--style"

          onClick={() => setMainImage(el.url)}
           />
                </figure>
            )
        })
    }
    
    </div>

    <div className="main-screen">
    <img src={mainImage} alt="error" />
    </div>
    
    
    </ProductImageStyles>
  )
}

export default ProductImage