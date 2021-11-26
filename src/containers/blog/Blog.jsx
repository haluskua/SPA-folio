import React from "react";
import { Article } from "../../component";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";
const Blog = () => {
  return (
    <div className="ompa__blog section__padding">
      <div className="ompa__blog-heading">
        <h1 className="gradient__title">A lot is happening</h1>
      </div>
      <div className="ompa__blog-container">
        <div className="ompa__blog-container_groupA">
          <Article imgUrl={blog01} />
        </div>
        <div className="ompa__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
