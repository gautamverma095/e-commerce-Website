import React from 'react'
import {FaStarHalfAlt,FaStar} from "react-icons/fa"
import {AiOutlineStar} from "react-icons/ai"
import { StarStyles } from '../Styles/Star'

const Stars = ({stars,reviews}) => {

const starRating = Array.from({length:5}, (el,index) =>  {
    let number = index +0.5
    return (
<span key={index}>
   {
       (stars >= index+1) ?
        (<FaStar className='icon'/>) :
         (stars >= number )? 
         (<FaStarHalfAlt className='icon'/>) :
          (<AiOutlineStar className='icon'/>
)}
</span>
        )

})

return (
    <StarStyles>

    <div className="icon-style">
    
    {starRating}

    <p>{reviews} customer reviews</p>
    </div>
    
    </StarStyles>
)
  
}

export default Stars