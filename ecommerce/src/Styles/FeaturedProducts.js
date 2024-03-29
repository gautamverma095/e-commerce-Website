import styled from "styled-components";


export const FeaturedProductsStyles = styled.section`



padding: 9rem 0;
background-color: ${({ theme }) => theme.colors.bg};


.container {
  max-width: 120rem;
}
figure {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  /* border: 1px solid green; */
  /* transition: width 2s, height 2s, background-color 2s, transform 2s; */
  transition: all 0.5s linear;
  &::after {
    content: "";
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover img {
    /* transform: scale(1.2); */
    background-color: #ffcccc;
  width: 200px;
  height: 200px;
  rotate: -50deg;
  }
  img {
    /* max-width: 95%; */
    width: 230px;
    margin-top: 1.5rem;
    height: 24rem;
    transition: all 0.2s linear;
  }
  .caption {
    position: absolute;
    top: 5.9%;
    right: 10%;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.helper};
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
    border-radius: 2rem;
  }
}
.card {
  background-color: #fff;
  border-radius: 1rem;
  .card-data {
    padding: 0 2rem;
  }
  .card-data-flex {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
    margin-left: 3%;
  }
  .card-data--price {
    color: ${({ theme }) => theme.colors.helper};
    font-size:20px;
    /* border: 1px solid red; */
  }
  .btn {
    margin: 2rem auto;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: rgb(98 84 243);
    }
    &:hover a {
      color: #fff;
    }
    a {
      color: rgb(98 84 243);
      font-size: 1.4rem;
    }
  }
}
`;