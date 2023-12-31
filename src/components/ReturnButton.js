import "../assets/css/fixedButtons.css";

function ReturnButton() {
  const handleClick = (event) => {
    event.preventDefault();
    document
      .getElementById("hero")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="returnButton" onClick={handleClick}>
      &#8593;
    </div>
  );
}

export default ReturnButton;
