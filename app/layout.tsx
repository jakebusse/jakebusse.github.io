"use client";

import { Work_Sans } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import Link from "next/link";

const geistSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    // Check if a user preference exists in localStorage
    const storedPreference = localStorage.getItem("darkMode");
    if (storedPreference) {
      setIsDarkMode(storedPreference === "true");
    } else {
      // Fallback to system preference if no manual preference exists
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
  };

  return (
    <html lang="en">
      <body className={isDarkMode ? "dark" : ""}>
        {/* Page Content */}
        <section className="transition-all ease-in mx-auto bg-white text-gray-700 dark:bg-gray-800 dark:text-white">
          {children}
          <div
            onClick={toggleDarkMode}
            className="absolute bottom-8 right-8 text-2xl p-4 border border-2 border-black rounded-xl cursor-pointer transition-all ease-in hover:bg-gray-800 hover:text-white hover:border-white dark:bg-gray-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-800 dark:hover:border-gray-800"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </div>
        </section>
      </body>
    </html>
  );
}
