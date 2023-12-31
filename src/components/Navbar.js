import "../assets/css/hero.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-item nav-title">
        <strong>Jake Busse</strong>
      </div>
      <div className="nav-container" id="anchors">
        <div className="nav-item nav-link">About</div>
        <div className="nav-item nav-link">Work</div>
        <div className="nav-item nav-link">Education</div>
        <div className="nav-item nav-link">Portfolio</div>
        <div className="nav-item nav-link">Contact</div>
      </div>
      <div className="nav-container" id="socials">
        <div className="nav-item nav-button">LinkedIn</div>
      </div>
    </div>
  );
}

export default Navbar;
