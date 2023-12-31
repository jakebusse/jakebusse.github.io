import "../assets/css/hero.css";

import Navbar from "./Navbar";

function Hero() {
  let date = new Date();
  let hour = date.getHours();
  let timeGreeting;
  if (hour > 18) {
    timeGreeting = "Evening";
  } else if (hour > 13) {
    timeGreeting = "Afternoon";
  } else if (hour === 12) {
    timeGreeting = "Day";
  } else {
    timeGreeting = "Morning";
  }

  return (
    <div className="hero-content" id="hero">
      <Navbar />
      <div className="vertical-center">
        <div className="hero-avatar"></div>
        <div className="hero-title">Good {timeGreeting}, I'm Jake</div>
        <div className="hero-subtitle">
          Welcome to my humble corner of the web.
        </div>
      </div>
    </div>
  );
}

export default Hero;
