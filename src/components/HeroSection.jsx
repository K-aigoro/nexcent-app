// eslint-disable-next-line no-unused-vars
import React from "react";
import Path from "../assets/Illustration.png";
import Button from "./reuseable/Button";

function HeroSection() {
  return (
    <section className="hero__section">
      <div className="hero__content">
        <h1>
          Lessons and insights
          <br />
          <span> From 8 years</span>
        </h1>
        <p>
          Want to grow your business as a photographer, site or social media?
        </p>
        <Button name="Register" />
      </div>
      <div className="hero-image">
        <img src={Path} alt="Hero" />
      </div>
    </section>
  );
}

export default HeroSection;
