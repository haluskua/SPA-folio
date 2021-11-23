import React from "react";
import "./header.css";
import adobe from "../../assets/adobe3.svg";
import logo from "../../assets/crest3.png";

const Header = () => (
  <div className="ompa__header section__padding" id="home">
    <div className="ompa__header-content">
      <h1 className="gradient__text">
        {" I am "}
        <strong>{"Omphalus Kua "}</strong>
        <br />
      </h1>
      <p>Fullstack Developer</p>

      <div className="ompa__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">PORTFOLIO</button>
      </div>

      <div className="ompa__header-content__people">
        <img src={adobe} />
        <p>Using popular tools</p>
      </div>
    </div>

    <div className="ompa__header-image">{<img src={logo} />}</div>
  </div>
);

export default Header;
