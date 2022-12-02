import React from 'react'
import { Button } from '../Styles/Button'
import { FooterStyle } from '../Styles/Footer'
import { NavLink } from "react-router-dom"
import { FaFacebook,FaInstagram ,FaDiscord} from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterStyle>

      <section className='contact-short'>

        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button>

              <NavLink to="/contact">
                Get Started
              </NavLink>
            </Button>
          </div>

        </div>
      </section>

      {/*footer started*/}
<footer>
      <div className='footer container grid grid-four-column'>
        <div className='footer-about'>
          <h3>Vaishali Verma</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium.</p>
        </div>

        <div className="footer-subscribe">
         <h3>Subscribed To Get updates</h3>

         <form action="">
           <input type="email" name="" id="" placeholder='email' />
           <input type="submit" value="Subscibe" />
         </form>
        </div>


        <div className="footer-social">
        <h3>Foolow Us</h3>
        <div className="footer-social--icons">
        <div>
        <FaDiscord className='icons'/>
        </div>
        <div>
        <FaFacebook className='icons'/>
        </div>
        <div>
        <FaInstagram className='icons'/>
        </div>

        </div>
        
        
        </div>

        <div className="footer-contact">
        <h3>Call us</h3>
        <a href='tel:9927648210'>+91 9927648210</a>
          </div>


        
      </div>
  {/* bottom */}

  <div className="footer-bottom--section">
  
  <hr />
  <div className="container grid grid-two-column">
  <p>@{new Date().getFullYear()}  All rights Reserved</p>

  <div>
  <p>PRIVACY POLICY</p>
  <p>TERMS AND CONDITION</p>
  </div>
  </div>

  </div>

      </footer>
    </FooterStyle>
  )
}


export default Footer