// eslint-disable-next-line no-unused-vars
import React from "react";
import { icon } from "../../data";

function StatisticSection() {
  return (
    <div className="statistics">
      <div className="statistics__content">
        <h2>
          Helping a local <br />
          <span className="highlight">business reinvent itself</span>
        </h2>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className="stats">
        <div className="stat">
          <img src={icon.Vector1} alt="yes" />
          <div>
            <h3>2,245,341</h3>
            <p>Members</p>
          </div>
        </div>
        <div className="stat">
          <img src={icon.Vector2} alt="yes" />
          <div>
            <h3>46,328</h3>
            <p>Clubs</p>
          </div>
        </div>
        <div className="stat">
          <img src={icon.Vector3} alt="yes" />
          <div>
            <h3>828,867</h3>
            <p>Event Bookings</p>
          </div>
        </div>
        <div className="stat">
          <img src={icon.Vector4} alt="yes" />
          <div>
            <h3>1,926,436</h3>
            <p>Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticSection;
