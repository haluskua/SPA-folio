import React from "react";
import { Feature } from "../../component";
import "./aboutOmpa.css";

const AboutOmpa = () => {
  return (
    <div className="ompa__aboutOmpa" id="Aboutompa">
      <div className="ompa__aboutOmpa-feature">
        <Feature
          title="About Me"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et nemo quod reiciendis voluptates voluptatem. ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </div>
      <div className="ompa__aboutOmpa-heading">
        <h1 className="gradient__text">Creative Technologist</h1>
        <p>Web and Grafix Enthusiast</p>
      </div>
      <div className="ompa__aboutOmpa-container">
        <Feature
          title="About Ompa"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, et nemo quod reiciendis voluptates voluptatem."
        />

        <Feature
          title="UX/UI"
          text="magnam mollitia architecto veniam? Delectus aut quisquam laboriosam nemo quod reiciendis voluptates voluptatem."
        />
        <Feature
          title="Skills"
          text="magnam mollitia architecto veniam? Delectus aut quisquam laboriosam nemo quod reiciendis voluptates voluptatem."
        />
        <Feature
          title="Education"
          text="magnam mollitia architecto veniam? Delectus aut quisquam laboriosam nemo quod reiciendis voluptates voluptatem."
        />
      </div>
    </div>
  );
};

export default AboutOmpa;
