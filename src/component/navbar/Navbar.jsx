import React from "react";
import "./navbar.css";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
//BEM --> Block ELement Modifier
const Menu = () => (
  <>
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
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="modern__navbar">
      <div className="modern__navbar-links">
        <div className="modern__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="modern__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="modern__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="modern__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="modern__navbar-menu_container scale-up-center">
            <div className="modern__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="modern__navbar-menu_container-links-sign">
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
