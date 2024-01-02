import "../assets/css/fixedButtons.css";

function ModeToggle({ mode, toggleDarkMode }) {
  let toggleText = "Dark Mode";

  if (mode) {
    toggleText = "Light Mode";
  }

  return (
    <div>
      <button className="toggleButton" onClick={toggleDarkMode}>
        <div className="button-text">{toggleText}</div>
      </button>
    </div>
  );
}

export default ModeToggle;
