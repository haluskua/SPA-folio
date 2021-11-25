import React from "react";
import { Article } from "../../component";
import "./blog.css";
const Blog = () => {
  return (
    <div className="ompa__blog section__padding">
      <div className="ompa__blog-heading">
        <h1 className="gradient__text">A lot is happening</h1>
      </div>
      <div className="ompa__blog-container">
        <div className="ompa__blog-container_groupA">
          <Article />
        </div>
        <div className="ompa__blog-container_groupB">
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  );
};

export default Blog;
