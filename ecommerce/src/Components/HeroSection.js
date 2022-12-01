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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores cupiditate quidem, hic nam et dolorem amet incidunt provident id. Impedit saepe amet sed laudantium quod voluptas eveniet commodi accusantium architecto!</p>

            <NavLink>
              <Button>
                Shop Now
              </Button>

            </NavLink>
          </div>
          {/* our image */}

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
