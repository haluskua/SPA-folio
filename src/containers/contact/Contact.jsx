import React from "react";
import contactImage from "../../assets/x.png";
import "../contact/contact.css";

const Contact = () => {
  return (
    <div className="ompa__contact section__padding" id="Contact">
      <div className="ompa__contact-img">
        <img src={contactImage} alt="" alt="contact-img" />
      </div>
      <div className="ompa__contact-content">
        <h4>Lorem, ipsum </h4>
        <h1 className="gradient__text">Contact Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur elit. Voluptatem.</p>
        <h4>Request early to work on project together</h4>
      </div>
    </div>
  );
};

export default Contact;
