import "../../assets/css/toggle.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { useState, useEffect } from "react";

function Toggle({ purpose, mode, toggleDarkMode, scrollPos }) {
  let toggleText = "Dark Mode";
  let toggleIcon = <MdDarkMode />;

  if (mode) {
    toggleText = "Light Mode";
    toggleIcon = <MdLightMode />;
  }

  const [dir, setDir] = useState("down");

  let atTop = scrollPos === 0;

  useEffect(() => {
    if (atTop) {
      setDir("down");
    } else {
      setDir("up");
    }
  }, [atTop]);

  const handleClick = (event) => {
    event.preventDefault();
    if (dir === "up") {
      document
        .getElementById("hero")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      document
        .getElementById("about")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  let renderedToggle;
  if (purpose === "dark-mode") {
    renderedToggle = (
      <button className="toggleButton" onClick={toggleDarkMode}>
        <div className="button-text">
          <div>{toggleIcon}</div>
          <div>{toggleText}</div>
        </div>
      </button>
    );
  } else if (purpose === "anchor") {
    renderedToggle = (
      <button className="returnButton" onClick={handleClick}>
        <div className="button-text" id={dir}>
          <FaArrowDown />
        </div>
      </button>
    );
  }

  return <div>{renderedToggle}</div>;
}

export default Toggle;
