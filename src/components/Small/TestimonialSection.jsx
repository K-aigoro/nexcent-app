// eslint-disable-next-line no-unused-vars
import React from "react";
import { icon } from "../../data";

function TestimonialSection() {
  return (
    <section className="testimonial">
      <div className="testimonial__content">
        <div className="testimonial__image">
          <img src={icon.image9} alt="Tesla Logo" />
        </div>
        <div className="testimonial__text">
          <p className="p1">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className="p2">
            <strong>Tim Smith</strong>
          </p>
          <p className="p3">British Dragon Boat Racing Association</p>

          <div className="testimonial__icon">
            <img src={icon.clientLogo1} alt="Client 1" />
            <img src={icon.clientLogo2} alt="Client 2" />
            <img src={icon.clientLogo3} alt="Client 3" />
            <img src={icon.clientLogo4} alt="Client 5" />
            <img src={icon.clientLogo5} alt="Client 5" />
            <img src={icon.clientLogo6} alt="Client 5" />
            <img src={icon.clientLogo3} alt="Client 7" />
            <p>Meet all customers </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
