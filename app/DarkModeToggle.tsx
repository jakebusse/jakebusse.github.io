"use client"; // This component will run only on the client

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem("darkMode");
    if (storedPreference) {
      setIsDarkMode(storedPreference === "true");
    } else {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(mediaQuery.matches);

      const listener = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };
      mediaQuery.addEventListener("change", listener);

      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());

    // Apply dark mode class to <html> manually since we can't modify className directly in <html>
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <div
      onClick={toggleDarkMode}
      className="absolute bottom-8 right-8 text-2xl p-4 border border-2 border-black rounded-xl cursor-pointer transition-all ease-in hover:bg-gray-800 hover:text-white hover:border-white dark:bg-gray-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-800 dark:hover:border-gray-800"
    >
      {isDarkMode ? <FiSun /> : <FiMoon />}
    </div>
  );
}
