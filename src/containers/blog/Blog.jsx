import React from "react";
import { Article } from "../../component";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
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
          <Article imgUrl={blog01} />
          <Article imgUrl={blog02} />
          <Article imgUrl={blog03} />
          <Article imgUrl={blog04} />
          <Article imgUrl={blog05} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
