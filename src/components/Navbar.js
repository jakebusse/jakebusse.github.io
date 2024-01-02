import "../assets/css/hero.css";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

function Navbar() {
  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.value.slice(0, 5) === "https") {
      window.open(event.target.value);
    } else {
      document
        .getElementById(event.target.value)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
        <button
          className="nav-item nav-link"
          value="contact"
          onClick={handleClick}
        >
          Contact
        </button>
      </div>
      <div className="nav-container" id="socials">
        <button
          className="nav-item nav-button"
          value="https://linkedin.com/in/jakebusse"
          onClick={handleClick}
        >
          <FaLinkedin />
        </button>
        <button
          className="nav-item nav-button"
          value="https://github.com/jakebusse"
          onClick={handleClick}
        >
          <FaGithub />
        </button>
        <button
          className="nav-item nav-button"
          value="https://instagram.com/jakerbusse"
          onClick={handleClick}
        >
          <FaInstagram />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
