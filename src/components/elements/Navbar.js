import "../../assets/css/navbar.css";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { CiMenuBurger, Ci } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import classNames from "classnames";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const navClass = classNames("navbar", {
    expanded,
  });

  const scroll = (anchor) => {
    document
      .getElementById(anchor)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.slot.slice(0, 5) === "https") {
      window.open(event.target.slot);
    } else {
      scroll(event.target.slot);
    }
    setExpanded(false);
  };

  useHotkeys("esc", () => setExpanded(false));
  useHotkeys("shift+alt+h", () => scroll("hero"));
  useHotkeys("shift+alt+a", () => scroll("about"));
  useHotkeys("shift+alt+w", () => scroll("work"));
  useHotkeys("shift+alt+e", () => scroll("education"));
  useHotkeys("shift+alt+p", () => scroll("portfolio"));
  useHotkeys("shift+alt+c", () => scroll("contact"));
  useHotkeys("shift+alt+esc", () => setExpanded(true));

  const mobileMenu = () => {
    setExpanded(!expanded);
  };

  const linkedin = "https://linkedin.com/in/jakebusse";
  const github = "https://github.com/jakebusse";
  const instagram = "https://instagram.com/jakerbusse";
  const facebook = "https://facebook.com/jakerbusse";

  return (
    <div className={navClass}>
      <div className="nav-container" id="title">
        <div className="nav-item nav-title">
          <strong>Jake Busse</strong>
        </div>
      </div>

      <div className="nav-container" id="burger">
        <button className="nav-item nav-button burger" onClick={mobileMenu}>
          <CiMenuBurger />
        </button>
      </div>

      <div className={"nav-container"} id="anchors">
        <button className="nav-item nav-button close" onClick={mobileMenu}>
          <IoClose />
        </button>
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
        <button
          className="nav-item nav-button"
          slot={facebook}
          onClick={handleClick}
        >
          <FaFacebook slot={facebook} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
