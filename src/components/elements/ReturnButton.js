import "../../assets/css/toggle.css";
import { FaArrowDown } from "react-icons/fa6";
import { useState, useEffect } from "react";

function ReturnButton({ scrollPos }) {
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
  return (
    <button className="returnButton" onClick={handleClick}>
      <div className="button-text" id={dir}>
        <FaArrowDown />
      </div>
    </button>
  );
}

export default ReturnButton;
