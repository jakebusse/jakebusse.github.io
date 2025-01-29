"use client";

import { TypeAnimation } from "react-type-animation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import {
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiSun,
  FiMoon,
} from "react-icons/fi";

export default function Home() {
  const items = [
    { text: "IT Professional", url: "/it" },
    { text: "Developer", url: "/dev" },
    { text: "Photographer", url: "/photos" },
    { text: "Chef", url: "/recipes" },
    { text: "Windows XP Nostalgist", url: "/busse-xp" },
    { text: "Entrepreneur", url: "https://www.quicktypeit.com" },
  ];

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

  const [isOpen, setIsOpen] = useState(false);

  const [isAnimating, setIsAnimating] = useState(true);

  const [currentItem, setCurrentItem] = useState<{ text: string; url: string }>(
    items[0]
  );

  const [selectedItem, setSelectedItem] = useState<{
    text: string;
    url: string;
  }>({
    text: "null",
    url: "null",
  });

  const stopAnimationAndSelect = (index: number) => {
    setIsAnimating(false);
    setCurrentItem(items[index]);
    setSelectedItem(items[index]);
    setIsOpen(false); // Close the dropdown
  };

  const socials = [
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      url: "https://linkedin.com/in/jakebusse",
    },
    {
      name: "GitHub",
      icon: <FiGithub />,
      url: "https://github.com/jakebusse",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      url: "https://instagram.com/jakerbusse",
    },
  ];

  return (
    <div
      className={`${
        isDarkMode ? "dark bg-gray-800 text-white" : "bg-white text-gray-700"
      } flex flex-col gap-8 items-center justify-center content-center text-center overflow-hidden transition-all ease-in h-screen w-screen mx-auto`}
    >
      <div className="absolute top-5 right-5 flex flex-row flex-nowrap gap-4">
        {socials.map((social) => (
          <Link
            href={social.url}
            key={social.name}
            className="transition-all ease-in bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 p-2 rounded-full"
            target="_blank"
          >
            {social.icon}
          </Link>
        ))}
      </div>
      <h1 className="text-6xl font-medium">A Jake of all trades.</h1>
      <span className="text-4xl relative">
        {"Jake the "}
        <span
          className="border-b-4 cursor-pointer block md:inline"
          onClick={() => {
            setIsAnimating(false); // Stop animation
            setIsOpen(!isOpen); // Open or close dropdown
            if (isAnimating) {
              setSelectedItem(currentItem);
            }
          }}
        >
          {isAnimating ? (
            <TypeAnimation
              sequence={[
                // Cycle through each word
                ...items.map((item) => [
                  () => {
                    if (isAnimating) setCurrentItem(item); // Only update if animation is active
                  },
                  item.text,
                  2000, // Display duration for each word
                ]),
              ].flat()}
              wrapper="span"
              speed={1}
              repeat={Infinity}
              cursor={true}
              deletionSpeed={75}
            />
          ) : selectedItem.text != "null" ? (
            selectedItem.text
          ) : (
            currentItem.text
          )}
          &nbsp;
          <GoChevronDown className="inline" />
        </span>
        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 w-auto bg-white dark:bg-gray-800 border border-t-4 rounded-sm z-10 float-right max-h-[calc(100vh/3)] overflow-y-auto shadow-lg">
            <ul>
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`px-6 py-3 cursor-pointer border-b border-t border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900`}
                  onClick={() => stopAnimationAndSelect(index)}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </span>
      <Link
        href={selectedItem.text != "null" ? selectedItem.url : currentItem.url}
        target={selectedItem.url.slice(0, 4) === "http" ? "_blank" : "_self"}
        className="bg-gray-600 text-white rounded p-4 cursor-pointer hover:bg-gray-500 dark:hover:bg-gray-700 transition-all ease-linear"
      >
        Go <GoChevronRight className="inline" />
      </Link>
      <div
        onClick={toggleDarkMode}
        className="absolute bottom-8 right-8 text-2xl p-4 border border-2 border-black rounded-xl cursor-pointer transition-all ease-in hover:bg-gray-800 hover:text-white hover:border-white dark:bg-gray-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-800 dark:hover:border-gray-800"
      >
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </div>
    </div>
  );
}
