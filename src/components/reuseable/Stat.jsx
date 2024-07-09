/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Stat = ({ icon, value, label }) => (
  <div className="stat">
    <img src={icon} alt="stat icon" />
    <div>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  </div>
);

export default Stat;
