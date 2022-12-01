import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { HeaderStyle } from "../Styles/Header";

const Header = () => {
  return (
    <HeaderStyle>
      <NavLink to="/">
        <img src="./images/logo.png" alt="logo" height="90px" width="130px" />
      </NavLink>
      <Navbar />
    </HeaderStyle>
  );
};


export default Header;
