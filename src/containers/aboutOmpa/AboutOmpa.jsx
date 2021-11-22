import React from "react";
import { Feature } from "../../component";
import "./aboutOmpa.css";

const AboutOmpa = () => {
  return (
    <div className="ompa__aboutOmpa section__margin" id="Aboutompa">
      <div className="ompa__aboutOmpa-feature">
        <Feature />
      </div>
      <div className="ompa__aboutOmpa-heading">
        <h1 className="gradient__text">Creative Technologist</h1>
        <p>Web and Grafix Enthusiast</p>
      </div>
      <div className="ompa__aboutOmpa-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default AboutOmpa;
