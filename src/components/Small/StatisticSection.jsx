// eslint-disable-next-line no-unused-vars
import React from "react";

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
          <h3>2,245,341</h3>
          <p>Members</p>
        </div>
        <div className="stat">
          <h3>46,328</h3>
          <p>Clubs</p>
        </div>
        <div className="stat">
          <h3>828,867</h3>
          <p>Event Bookings</p>
        </div>
        <div className="stat">
          <h3>1,926,436</h3>
          <p>Payments</p>
        </div>
      </div>
    </div>
  );
}

export default StatisticSection;
