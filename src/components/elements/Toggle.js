import "../../assets/css/toggle.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { useState, useEffect } from "react";

function Toggle({ purpose, mode, toggleDarkMode, dir }) {
  const [toggleText, setToggleText] = useState("Dark Mode");
  const [toggleIcon, setToggleIcon] = useState(<MdDarkMode />);

  useEffect(() => {
    if (mode) {
      setToggleText("Light Mode");
      setToggleIcon(<MdLightMode />);
    } else {
      setToggleText("Dark Mode");
      setToggleIcon(<MdDarkMode />);
    }
  }, [mode]);

  const [arrow, setArrow] = useState("down");
  const [scrollTo, setScrollTo] = useState("about");

  useEffect(() => {
    if (dir) {
      setArrow("down");
      setScrollTo("about");
    } else {
      setArrow("up");
      setScrollTo("hero");
    }
  }, [dir]);

  const handleAnchorClick = (event) => {
    event.preventDefault();
    document
      .getElementById(scrollTo)
      .scrollIntoView({ behavior: "smooth", block: "start" });
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
      <button className="returnButton" onClick={handleAnchorClick}>
        <div className="button-text" id={arrow}>
          <FaArrowDown />
        </div>
      </button>
    );
  }

  return <div>{renderedToggle}</div>;
}

export default Toggle;
