import "../assets/css/fixedButtons.css";

function ReturnButton() {
  const handleClick = (event) => {
    event.preventDefault();
    document
      .getElementById("hero")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <button className="returnButton" onClick={handleClick}>
      <div className="button-text">&#8593;</div>
    </button>
  );
}

export default ReturnButton;
