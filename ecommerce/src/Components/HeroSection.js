import React from 'react'
import { Button } from '../Styles/Button'

import { NavLink } from 'react-router-dom'
import { HeroSectionStyle } from '../Styles/HeroSection'

const HeroSection = ({ myData }) => {

  return (
    <HeroSectionStyle>

      <div className='container'>
        <div className='grid grid-two-column'>
          <div className='hero-section-data'>
            <p className='intro-data'>welcome to        </p>
            <h1>{myData.name}</h1>
            <p>
              Hues with Vaishali is a sustainable Brand that creates products keeping in mind the need of it’s customers .
              Each product is handpainted, handmade and can also be customised as per the design demands of customers.
              Most of the products reflect art, culture and beauty of Uttarakhand and also promote folk art of Uttarakhand, Aipan in a more fresh and contemporary way.
              We solely follow the values of Sustainability and Exclusivity
             </p>

            <NavLink>
              <Button>
                Shop Now
              </Button>

            </NavLink>
          </div>
          {/* our main image */}

          <div className='hero-section-image'>

            <figure>
              <img src="images/paint.png" alt="loading" className='img-style' />
            </figure>
          </div>

        </div>
      </div>

    </HeroSectionStyle>

  )
}



export default HeroSection
