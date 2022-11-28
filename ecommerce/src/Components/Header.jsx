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


export default Header;
