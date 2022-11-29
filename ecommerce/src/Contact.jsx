import React from 'react'

import styled from "styled-components"

const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1793737.742140434!2d76.31833297361732!3d28.587953873983096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0abeecefe3a1f%3A0xb4383eecf9c6de08!2sHill%20Aesthetics%20Unisex%20Gym!5e0!3m2!1sen!2sin!4v1669714132301!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


      <div className="container">
        <div className="contact-form">

          <form method='POST' className='contact-inputs' action='https://formspree.io/f/mjvzqbvd' >

            <input type="text" placeholder='username' name="username" required autoComplete='off' />

    <input type="email" placeholder='Email' name='Email' required autoComplete='off'  />
    <textarea name="Message" placeholder='Enter your message' id="" cols="30" rows="10"></textarea>

    <input type="submit" value="Send" />
          </form>


        </div>

      </div>

    </Wrapper>
  )
}


const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;


    .container {

      margin-top: 6rem;


      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs 
        {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] 
          
          {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact