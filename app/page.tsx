"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import React, { useState } from "react";
import Link from "next/link";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import { FiLinkedin, FiGithub } from "react-icons/fi";

export default function Home() {
  const items = [
    { text: "IT Professional", url: "/it" },
    { text: "Developer", url: "/dev" },
    { text: "Photographer", url: "/photos" },
    { text: "Chef", url: "/recipes" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [isAnimating, setIsAnimating] = useState(true);

  const [currentItem, setCurrentItem] = useState<{ text: String; url: string }>(
    items[0]
  );

  const [selectedItem, setSelectedItem] = useState<{
    text: String;
    url: string;
  }>({
    text: "null",
    url: "null",
  });

  const stopAnimationAndSelect = (index: number) => {
    setIsAnimating(false);
    setCurrentItem(items[index]);
    setSelectedItem(items[index]);
    setSelectedIndex(index);
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
  ];

  return (
    <div className="h-screen w-screen flex flex-col gap-8 items-center justify-center content-center text-center">
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
          <ul className="absolute right-0 w-auto bg-white dark:bg-gray-800 border border-t-4 rounded-sm z-10 float-right">
            {items.map((item, index) => (
              <li
                key={index}
                className={`px-6 py-3 cursor-pointer border-b border-t border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900 ${
                  selectedIndex === index ? "hidden" : "block"
                }`}
                onClick={() => stopAnimationAndSelect(index)}
              >
                {item.text}
              </li>
            ))}
          </ul>
        )}
      </span>
      <Link
        href={selectedItem.text != "null" ? selectedItem.url : currentItem.url}
        className="bg-gray-600 text-white rounded p-4 cursor-pointer hover:bg-gray-500 dark:hover:bg-gray-700 transition-all ease-linear"
      >
        Go <GoChevronRight className="inline" />
      </Link>
    </div>
  );
}
