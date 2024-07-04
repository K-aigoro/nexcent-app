// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../assets/Icon.png";
import "./reuseable/footer.css";

function Footer() {
  return (
    <footer className="footer-sec">
      <div className="main">
        <div className="footer__row">
          <div className="footer_logo">
            <img src={Logo} alt="Nexcent Logo" className="" />
            <span>Nexcent</span>
          </div>
          <p>Copyright © 2020 Landify UI Kit.</p>
          <p>All rights reserved</p>
        </div>
        <div className="footer__down">
          <div className="footer_list">
            <div className="footer-header">
              <h3>Company</h3>
            </div>
            <div className="link-des">
              <a href="#" className="footer-links">
                About Us
              </a>
              <a href="#" className="footer-links">
                Blog
              </a>
              <a href="#" className="footer-links">
                Contact Us
              </a>
              <a href="#" className="footer-links">
                Pricing
              </a>
              <a href="#" className="footer-links">
                Testimonial
              </a>
            </div>
          </div>

          <div className="footer_list">
            <div className="footer-header">
              <h3>Support</h3>
            </div>
            <div className="link-des">
              <a href="#" className="footer-links">
                Help Center
              </a>
              <a href="#" className="footer-links">
                Term of Services
              </a>
              <a href="#" className="footer-links">
                Legal
              </a>
              <a href="#" className="footer-links">
                Privacy Policy
              </a>
              <a href="#" className="footer-links">
                Status
              </a>
            </div>
          </div>
          <div className="footer_list">
            <div className="footer-header">
              <h3>Stay up to date</h3>
            </div>
            <div className="input">
              <input type="email" placeholder="Your Email Address" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
