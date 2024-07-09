// eslint-disable-next-line no-unused-vars
import React from "react";
import { icon } from "../../data";
import Stat from "../reuseable/Stat";

function StatisticSection() {
  const statsData = [
    { icon: icon.Vector1, value: "2,245,341", label: "Members" },
    { icon: icon.Vector2, value: "46,328", label: "Clubs" },
    { icon: icon.Vector3, value: "828,867", label: "Event Bookings" },
    { icon: icon.Vector4, value: "1,926,436", label: "Payments" },
  ];

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
        {statsData.map((stat, index) => (
          <Stat
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
}

export default StatisticSection;
