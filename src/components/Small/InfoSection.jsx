// eslint-disable-next-line no-unused-vars
import React from "react";
import { icon } from "../../data";
function InfoSection() {
  return (
    <section className="info__section">
      <h2>Caring is the new marketing</h2>
      <p>
        The Nextcent blog is the best place to read about the latest membership
        insights, trends and more. See whos joining the community, read about
        how our community are increasing their membership income and lots more.
      </p>
      <div className="info__posts">
        <div className="post">
          <img src={icon.image18} alt="Post 1" />

          <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
          <a href="#" className="link">
            Readmore &rarr;
          </a>
        </div>
        <div className="post">
          <img src="path/to/image2.jpg" alt="Post 2" />
          <h3>
            What are your safeguarding responsibilities and how can you manage
            them?
          </h3>
          <a href="#" className="link">
            Readmore &rarr;
          </a>
        </div>
        <div className="post">
          <img src="path/to/image3.jpg" alt="Post 3" />
          <h3>Revamping the Membership Model with Triathlon Australia</h3>
          <a href="#" className="link">
            Readmore &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
