import { useState, useEffect } from "react";
import "./assets/css/global.css";

import Hero from "./components/sections/Hero";
import ModeToggle from "./components/ModeToggle";
import ReturnButton from "./components/ReturnButton";
import About from "./components/sections/About";
import Work from "./components/sections/Work";
import Education from "./components/sections/Education";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

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

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  return (
    <div className="content" data-theme={mode}>
      <Hero />
      <ModeToggle mode={darkMode} toggleDarkMode={handleToggle} />
      <ReturnButton scrollPos={scrollValue} />
      <About />
      <Work />
      <Education />
      <Portfolio mode={darkMode} />
      <Contact />
      <Footer />
    </div>
  );
}

export default Site;
