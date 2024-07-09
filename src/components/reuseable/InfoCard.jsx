// eslint-disable-next-line no-unused-vars
import React from "react";
import { icon } from "../../data";

function InfoCard() {
  return (
    <div className="card">
      <img src={icon.image18} alt="Post 1" />
      <div>
        <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
        <a href="#" className="link">
          Readmore &rarr;
        </a>
      </div>
    </div>
  );
}

export default InfoCard;
