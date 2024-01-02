import "../assets/css/fixedButtons.css";
import { FaArrowUp } from "react-icons/fa6";

function ReturnButton() {
  console.log(document.documentElement.scrollTop);
  const handleClick = (event) => {
    event.preventDefault();
    document
      .getElementById("hero")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <button className="returnButton" onClick={handleClick}>
      <div className="button-text">
        <FaArrowUp />
      </div>
    </button>
  );
}

export default ReturnButton;
