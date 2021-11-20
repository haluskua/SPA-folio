import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="ohk2__header__padding" id="home">
      <div className="ohk2__header-content">
        <h1 className="gradient_text">
          Lets's Build Something amazing with OHK-2 Brand
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          illum labore sapiente minus perspiciatis!
        </p>
        <div className="ohk__header-content__input">
          <input type="email" name="" id="" placeholder="your email address" />
          <button type="button"> Get Started</button>
          <img src={people} alt="people" />
          <p>Lorem, dolor sit amet t deleniti perspiciatis laboriosam.</p>
        </div>
        <div className="ohk__header-im">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </div>
  );
};

export default Header;
