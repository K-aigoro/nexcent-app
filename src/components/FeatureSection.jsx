// eslint-disable-next-line no-unused-vars
import React from "react";
import { icon } from "../data";

function FeatureSection() {
  return (
    <section className="features__section">
      <h2>Manage your entire community in a single system</h2>
      <p>Who is Nextcent suitable for?</p>

      <div className="features-grid">
        <div className="feature">
          <img src={icon.Membership} alt="yes" />
          <h3>Membership Organisations</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="feature">
          <img src={icon.National} alt="yes" />
          <h3>National Associations</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="feature">
          <img src={icon.Club} alt="yes" />
          <h3>Clubs And Groups</h3>
          <p>
            Our platform is ideal for managing clubs and groups, offering
            comprehensive features to support their activities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
