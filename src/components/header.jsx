// import React from "react";
import Logo from "../assets/Icon.png";
import Button from "./reuseable/Button";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Nexcent Logo" className="logo-image" />
        <span>Nexcent</span>
      </div>

      {/* navbar  */}
      <nav className="nav">
        <a href="#home" className="nav__link">
          Home
        </a>
        <a href="#features" className="nav__link">
          Features
        </a>
        <a href="#community" className="nav__link">
          Community
        </a>
        <a href="#blog" className="nav__link">
          Blog
        </a>
        <a href="#pricing" className="nav__link">
          Pricing
        </a>
        <Button name="Register Now →" />
      </nav>
    </header>
  );
}

export default Header;
