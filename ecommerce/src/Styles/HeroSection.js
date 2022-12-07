import styled from "styled-components"

export const HeroSectionStyle = styled.section`
padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;

    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      font-size: 5vh;
    }
    .intro-data {
      margin-bottom: 0;
      font-size: 3vh;

    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px solid red; */
    
  }
  figure {
    position: relative;
    /* border: 2px solid red; */


    &::after {
      content: "";
      width: 70%;
      height: 80%;
      /* background-color: rgba(81, 56, 238, 0.4); */
      background-color: rgb(201,186,229);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
      /* border: 2px solid red; */
    }
  }
  .img-style {
    width: 100%;
    max-width: 30vw;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }


`