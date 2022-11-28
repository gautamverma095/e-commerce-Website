import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components"
import { MainHeader } from "../Styles/Header";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="logo" height="90px" width="130px" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};



// const MainHeader = styled.header`
//   padding: 0 4.8rem;
//   height: 10rem;
//   background-color: ${({ theme }) => theme.colors.bg};
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;
//   .logo {
//     height: 5rem;
//   }
// `;
export default Header;
