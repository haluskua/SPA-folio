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
        <div className="modern__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#modern">What is Modern</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#feature">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="modern__navbar-sign">
        <button type="button">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
