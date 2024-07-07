// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Style/Style.css";
import Path from "../assets/Illustration (1).png";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__section">
        <div className="hero__content">
          <h1>
            Lessons and insights
            <br />
            <span> From 8 years</span>
          </h1>
          <p>
            Want to grow your business as a photographer, site or social media?
          </p>
          <button className="hero__button">Register</button>
        </div>
        <div className="hero-image">
          <img src={Path} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
