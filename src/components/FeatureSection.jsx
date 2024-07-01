// eslint-disable-next-line no-unused-vars
import React from "react";

function FeatureSection() {
  return (
    <section className="features__section">
      <h2>Manage your entire community in a single system</h2>
      <p>Who is Nextcent suitable for?</p>
      <div className="features-grid">
        <div className="feature">
          <h3>Membership Organisations</h3>
          <p>
            Our platform allows the management of membership organizations,
            providing essential tools and resources.
          </p>
        </div>
        <div className="feature">
          <h3>National Associations</h3>
          <p>
            We provide services tailored to the needs of national associations,
            ensuring efficient management.
          </p>
        </div>
        <div className="feature">
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
