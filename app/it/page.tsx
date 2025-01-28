"use client";
import "./xp.css";
import { useState, useEffect } from "react";
import DesktopShortcut from "./components/desktop-shortcut/desktop-shortcut";
import Window from "./components/window/window";
import { DndContext } from "@dnd-kit/core";

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  let retVal = time.toLocaleString("en-US", {
    timeStyle: "short",
    hour12: true,
  });

  const [selectedDesktopShortcut, setSelectedDesktopShortcut] = useState("");
  return (
    <div className="monitor flex items-center">
      <DndContext>
        <div
          className="desktop"
          onClick={() => setSelectedDesktopShortcut("null")}
        >
          <DesktopShortcut
            selectedShortcut={selectedDesktopShortcut}
            setSelectedShortcut={setSelectedDesktopShortcut}
            icon="cursor-pointer.png"
            name="Cursor"
          />
        </div>
        <Window name="My Computer" icon="about_jake.png">
          <h1>Test</h1>
        </Window>
        <div className="taskbar flex flex-row flex-no-wrap justify-between">
          <div className="start"></div>
          <div className="clock inline text-white text-bold flex flex-no-wrap items-center px-5 text-xl">
            {retVal}
          </div>
        </div>
      </DndContext>
    </div>
  );
}
