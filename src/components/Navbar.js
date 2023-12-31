import "../assets/css/hero.css";
import { useState, useEffect } from "react";

function Navbar() {
  const handleClick = (event) => {
    event.preventDefault();
    document
      .getElementById(event.target.value)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleButtonClick = () => {
    window.open("https://linkedin.com/in/jakebusse", "_blank");
  };

  return (
    <div className="navbar">
      <div className="nav-item nav-title">
        <strong>Jake Busse</strong>
      </div>
      <div className="nav-container" id="anchors">
        <button
          className="nav-item nav-link"
          value="about"
          onClick={handleClick}
        >
          About
        </button>
        <button
          className="nav-item nav-link"
          value="work"
          onClick={handleClick}
        >
          Work
        </button>
        <button
          className="nav-item nav-link"
          value="education"
          onClick={handleClick}
        >
          Education
        </button>
        <button
          className="nav-item nav-link"
          value="portfolio"
          onClick={handleClick}
        >
          Portfolio
        </button>
        <button className="nav-item nav-link">Contact</button>
      </div>
      <div className="nav-container" id="socials">
        <div className="nav-item nav-button" onClick={handleButtonClick}>
          LinkedIn
        </div>
      </div>
    </div>
  );
}

export default Navbar;
