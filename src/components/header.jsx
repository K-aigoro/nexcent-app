// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "../assets/Header-logo.png";
import Button from "./reuseable/Button";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header1">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Nexcent Logo" className="logo-image" />
        </div>

        {/* navbar  */}
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#community">Community</a>
          <a href="#blog">Blog</a>
          <a href="#pricing">Pricing</a>
          <Button name="Register Now →" />
        </nav>
        <button className="toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
