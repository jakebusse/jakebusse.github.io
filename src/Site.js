import { useState, useEffect } from "react";
import "./assets/css/global.css";

import Hero from "./components/Hero";
import ModeToggle from "./components/ModeToggle";
import ReturnButton from "./components/ReturnButton";
import About from "./components/About";
import Work from "./components/Work";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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

  console.log(scrollValue);

  return (
    <div className="content" data-theme={mode}>
      <div className="backdrop"></div>
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
