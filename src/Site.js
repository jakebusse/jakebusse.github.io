import { useState } from "react";
import "./assets/css/global.css";

import Hero from "./components/Hero";
import ModeToggle from "./components/ModeToggle";
import About from "./components/About";
import Work from "./components/Work";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";

function Site() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  let mode = "";
  if (darkMode) {
    mode = "dark";
  }

  return (
    <div className="content" data-theme={mode}>
      <Hero />
      <ModeToggle mode={darkMode} toggleDarkMode={handleToggle} />
      <About />
      <Work />
      <Education />
      <Portfolio mode={darkMode} />
    </div>
  );
}

export default Site;
