import React from "react";
import Feature from "../../component/feature/Feature";

import "./aboutOmpa.css";

const AboutOmpa = () => {
  return (
    <div className="ompa__aboutOmpa" id="About">
      <div className="ompa__aboutOmpa-feature">
        <Feature
          title="About Me"
          text="My name is Omphalus Harkie Kua, and I come from the Highlands of Papua New Guinea. My favorite sport is Rugby League and I was blessed to be given the opportunity represent my country to play an international test against the Australian Kangaroos.."
        />
      </div>
      <div className="ompa__aboutOmpa-heading">
        <h1 className="gradient__text">Designer + Developer </h1>
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
