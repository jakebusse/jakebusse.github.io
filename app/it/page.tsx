"use client";

import "./xp.css";
import { useState, useEffect } from "react";
import DesktopShortcut from "./components/desktop-shortcut/desktop-shortcut";
import Window from "./components/window/window";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  restrictToParentElement,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";

const initialWindows = [
  {
    id: "my-computer",
    name: "My Computer",
    icon: "about_jake.png",
    open: false,
    position: { x: 100, y: 100 },
  },
  {
    id: "main-site",
    name: "Jake Busse",
    icon: "cursor.png",
    open: false,
    position: { x: 50, y: 50 },
  },
];

const desktopShortcuts = [
  {
    icon: "cursor-pointer.png",
    name: "My Computer",
    window: "my-computer",
  },
];

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [selectedDesktopShortcut, setSelectedDesktopShortcut] = useState("");
  const [windows, setWindows] = useState(initialWindows);
  const [activeWindow, setActiveWindow] = useState("my-computer");
  const [openWindows, setOpenWindows] = useState(["my-computer"]);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleString("en-US", {
    timeStyle: "short",
    hour12: true,
  });

  const handleDragStart = (event: any) => {
    setActiveWindow(event.active.id);
  };

  const handleDragEnd = (event: any) => {
    const updatedWindows = windows.map((win) =>
      win.id === event.active.id
        ? {
            ...win,
            position: {
              x: win.position.x + event.delta.x,
              y: win.position.y + event.delta.y,
            },
          }
        : win
    );
    setWindows(updatedWindows);
  };

  return (
    <div className="monitor flex items-center p-0 m-0 overflow-hidden relative">
      <DndContext
        collisionDetection={closestCenter}
        modifiers={[restrictToParentElement]}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div
          className="desktop absolute top-0 left-0 right-0 bottom-[35px] bg-cover"
          style={{ position: "relative", width: "100%", height: "100vh" }}
          onClick={() => setSelectedDesktopShortcut("")}
        >
          {desktopShortcuts.map((shortcut) => (
            <DesktopShortcut
              key={shortcut.name}
              selectedShortcut={selectedDesktopShortcut}
              setSelectedShortcut={setSelectedDesktopShortcut}
              openWindow={() => {
                setOpenWindows([...openWindows, shortcut.window]);
                setSelectedDesktopShortcut("");
              }}
              {...shortcut}
            />
          ))}
        </div>
        {windows.map((window) => (
          <Window
            key={window.id}
            {...window}
            open={openWindows.indexOf(window.id) > -1}
            closeWindow={() =>
              setOpenWindows(openWindows.filter((win) => win !== window.id))
            }
            active={activeWindow === window.id}
            makeActive={() => setActiveWindow(window.id)}
          />
        ))}
        <div className="taskbar flex flex-row justify-between z-50 absolute bottom-0 left-0 right-0 h-[35px]">
          <div className="start"></div>
          <div className="clock text-white text-bold flex items-center px-5 text-xl">
            {formattedTime}
          </div>
        </div>
      </DndContext>
    </div>
  );
}
