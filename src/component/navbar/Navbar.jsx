import React from "react";
import "./navbar.css";

import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import logo from "../../assets/logo.svg";
//BEM --> Block ELement Modifier

const Navbar = () => {
  return (
    <div className="modern_navbar">
      <div className="modern__navbar-links">
        <div className="modern__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
