import "../assets/css/fixedButtons.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ModeToggle({ mode, toggleDarkMode }) {
  let toggleText = "Dark Mode";
  let toggleIcon = <MdDarkMode />;

  if (mode) {
    toggleText = "Light Mode";
    toggleIcon = <MdLightMode />;
  }

  return (
    <div>
      <button className="toggleButton" onClick={toggleDarkMode}>
        <div className="button-text">
          <div>{toggleIcon}</div>
          <div>{toggleText}</div>
        </div>
      </button>
    </div>
  );
}

export default ModeToggle;
