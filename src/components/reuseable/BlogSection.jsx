/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "./Button";

function BlogSection({ name, title, img }) {
  return (
    <div className="blog__section">
      {" "}
      <div className="blog__content">
        <div className="blog__image">
          <img src={img} alt="" />
        </div>
        <div className="blog__text">
          <h1>{name}</h1>
          <p>{title}</p>
          <Button name="Learn More" />
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
