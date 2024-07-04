// eslint-disable-next-line no-unused-vars
import React from "react";
import { icon } from "../data";

function ClientSection() {
  return (
    <section className="clients__section">
      <h2>Our Clients</h2>
      <p>We have been working with some Fortune 500+ clients</p>
      <div className="clients-logos">
        {/* Add client logos here */}
        <img src={icon.Client} alt="Client 1" />
        <img src={icon.Partner} alt="Client 2" />
        <img src={icon.Whatsapp} alt="Client 3" />
        <img src={icon.Facebook} alt="Client 5" />
        <img src={icon.Partner1} alt="Client 5" />
        <img src={icon.Partner2} alt="Client 5" />
        <img src={icon.Goggle} alt="Client 7" />
        {/* Add more logos as needed */}
      </div>
    </section>
  );
}

export default ClientSection;
