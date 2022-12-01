
import React from 'react'
import { TrustedStyle } from '../Styles/Trusted'

const Trusted = () => {
  return (


    <TrustedStyle className="brand-section">
      <div className='container'>
        <h3>Trusted By companies</h3>

        <div className="brand-section-slider">
          {/* 1st image*/}
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
              alt="trusted-brands"
            />

          </div>

          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">

            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
              alt="trusted-brands"
            />

          </div>


        </div>


      </div>
    </TrustedStyle>


  )
}



export default Trusted
