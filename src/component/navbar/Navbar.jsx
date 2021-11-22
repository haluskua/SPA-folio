import React from "react";
import "./navbar.css";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/folio-black.svg";
//BEM --> Block ELement Modifier
const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#ompa">ABOUT</a>
    </p>
    <p>
      <a href="#possibility">CONTACT</a>
    </p>
    <p>
      <a href="#feature">PORTFOLIO</a>
    </p>
    <p>
      <a href="#blog">RESUME</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="ompa__navbar">
      <div className="ompa__navbar-links">
        <div className="ompa__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="ompa__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="ompa__navbar-sign">
        <p>Sign in</p>
        <button type="button">Lets chat</button>
      </div>
      <div className="ompa__navbar-menu">
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
          <div className="ompa__navbar-menu_container scale-up-center">
            <div className="ompa__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="ompa__navbar-menu_container-links-sign">
              <button type="button">Lets chat</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
