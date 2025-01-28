"use client";
import "./desktop-shortcut.css";
import Image from "next/image";
import { useState, useEffect } from "react";

type ChildProps = {
  selectedShortcut: string;
  setSelectedShortcut: React.Dispatch<React.SetStateAction<string>>;
  icon: string;
  name: string;
  window: string;
  openWindow: () => void;
};

export default function DesktopShortcut({
  selectedShortcut,
  setSelectedShortcut,
  icon,
  name,
  openWindow,
}: ChildProps) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selectedShortcut == name) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selectedShortcut]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setSelectedShortcut(name);
  };

  return (
    <div
      onClick={handleClick}
      onDoubleClick={openWindow}
      className={`shortcut w-20 py-1 m-4 flex flex-col flex-no-wrap gap-2 items-center ${
        selected ? "selected" : ""
      }`}
    >
      <img
        src={"./icons/" + icon}
        alt={name}
        width={50}
        height={50}
        className="icon"
      />
      <div className="name text-xl">{name}</div>
    </div>
  );
}
