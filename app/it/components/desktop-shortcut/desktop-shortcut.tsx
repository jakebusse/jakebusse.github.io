"use client";
import "./desktop-shortcut.css";
import { useState, useEffect } from "react";

type ChildProps = {
  selectedShortcut: string;
  setSelectedShortcutAction: React.Dispatch<React.SetStateAction<string>>;
  icon: string;
  name: string;
  openWindowAction: () => void;
};

export default function DesktopShortcut({
  selectedShortcut,
  setSelectedShortcutAction,
  icon,
  name,
  openWindowAction,
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
    setSelectedShortcutAction(name);
  };

  return (
    <div
      onClick={handleClick}
      onDoubleClick={openWindowAction}
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
