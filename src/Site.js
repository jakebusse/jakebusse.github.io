import { useState, useEffect } from "react";
import "./assets/css/global.css";
import { useHotkeys } from "react-hotkeys-hook";

import Hero from "./components/sections/Hero";
import Toggle from "./components/elements/Toggle";
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

  useHotkeys("shift+alt+d", handleToggle);

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

  const r = document.querySelector(":root");

  const getRandomVal = () => {
    return Math.floor(Math.random() * 255);
  };

  const [randRed, setRandRed] = useState(25);
  const [randGreen, setRandGreen] = useState(121);
  const [randBlue, setRandBlue] = useState(97);
  const [changeCount, setChangeCount] = useState(0);

  const changeColors = () => {
    setChangeCount(changeCount + 1);
  };

  const swapColors = () => {
    r.style.setProperty(
      "--primary-color",
      `rgb(${randRed}, ${randGreen}, ${randBlue})`
    );
    r.style.setProperty(
      "--secondary-color",
      `rgb(${randRed - 36}, ${randGreen - 182}, ${randBlue - 22})`
    );
    console.log(
      "So I see you discovered my little easter egg. If you like these colors here they are:"
    );
    console.log(
      `Primary: rgb(${randRed}, ${randGreen}, ${randBlue}), Secondary: rgb(${
        randRed - 36
      }, ${randGreen - 182}, ${randBlue - 22})`
    );
  };

  useEffect(() => {
    if (changeCount > 0) {
      setRandRed(getRandomVal());
      setRandGreen(getRandomVal());
      setRandBlue(getRandomVal());
      swapColors();
    }
  }, [changeCount]);

  const resetColors = () => {
    r.style.setProperty("--primary-color", "var(--true-primary-color");
    r.style.setProperty("--secondary-color", "var(--true-secondary-color");
  };

  useHotkeys("ctrl+space", changeColors);
  useHotkeys("ctrl+alt+space", resetColors);

  return (
    <div className="content" data-theme={mode}>
      <Hero />
      <Toggle
        purpose="dark-mode"
        mode={darkMode}
        toggleDarkMode={handleToggle}
      />
      <Toggle purpose="anchor" dir={scrollValue === 0} />
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
