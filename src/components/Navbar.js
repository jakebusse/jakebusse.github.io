import "../assets/css/hero.css";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

function Navbar() {
  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.slot.slice(0, 5) === "https") {
      window.open(event.target.slot);
    } else {
      document
        .getElementById(event.target.slot)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const linkedin = "https://linkedin.com/in/jakebusse";
  const github = "https://github.com/jakebusse";
  const instagram = "https://instagram.com/jakebusse";

  return (
    <div className="navbar">
      <div className="nav-item nav-title">
        <strong>Jake Busse</strong>
      </div>
      <div className="nav-container" id="anchors">
        <button
          className="nav-item nav-link"
          slot="about"
          onClick={handleClick}
        >
          About
        </button>
        <button className="nav-item nav-link" slot="work" onClick={handleClick}>
          Work
        </button>
        <button
          className="nav-item nav-link"
          slot="education"
          onClick={handleClick}
        >
          Education
        </button>
        <button
          className="nav-item nav-link"
          slot="portfolio"
          onClick={handleClick}
        >
          Portfolio
        </button>
        <button
          className="nav-item nav-link"
          slot="contact"
          onClick={handleClick}
        >
          Contact
        </button>
      </div>
      <div className="nav-container" id="socials">
        <button
          className="nav-item nav-button"
          slot={linkedin}
          onClick={handleClick}
        >
          <FaLinkedin slot={linkedin} />
        </button>
        <button
          className="nav-item nav-button"
          slot={github}
          onClick={handleClick}
        >
          <FaGithub slot={github} />
        </button>
        <button
          className="nav-item nav-button"
          slot={instagram}
          onClick={handleClick}
        >
          <FaInstagram slot={instagram} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
