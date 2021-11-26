import React from "react";
import "./footer.css";
import ompaLogo from "../../assets/crest3.png";

const Footer = () => {
  return (
    <div className="ompa__footer section__padding">
      <div className="ompa__footer-">
        <h1 className="gradient__text">Do you want to make contact</h1>
      </div>
      <div className="ompa__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="ompa__footer-links">
        <div className="ompa__footer-links_logo">
          <img src={ompaLogo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            eveniet eos saepe animi, ratione nam?
          </p>
        </div>
        <div className="ompa__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="ompa__footer-links_div">
          <h4>Company</h4>
          <p>Terms Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="ompa__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 dk aLKNJKCB</p>
          <p>0225732261</p>
          <p>haluskua.one@gmail.com</p>
        </div>
      </div>
      <div className="ompa__footer-copyright">
        <p>@ 2021 OMPA. All rights reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
