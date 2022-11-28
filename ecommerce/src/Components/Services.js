import React from 'react'
import styled from "styled-components"

import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {

  return (
    <Wrapper>

      <div className='container'>

        <div className='grid grid-three-column'>

          <div className='services-1'>

            <div>
              <TbTruckDelivery className="icon" />

            </div>


          </div>

          <div className='services-2'>

            <div className='services-colum-2'>

              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>


            </div>
            <div className='services-colum-2'>
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>

            </div>


          </div>

          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>



        </div>



      </div>
    </Wrapper>
  )
}

export default Services


const Wrapper = styled.section`


  padding: 9rem 0;


  .grid {
    gap: 4.8rem;
    // border:6px solid black;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    // border:6px solid pink;
   
  }


  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;
    // border:6px solid brown;
  



    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      // border:6px solid brown;
      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        // border:6px solid brown;
      }
    }
  }
  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }
  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
    // border:6px solid brown;
   
  }
`;