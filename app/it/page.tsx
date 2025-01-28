"use client";
import "./xp.css";
import { useState, useEffect, useRef } from "react";
import DesktopShortcut from "./components/desktop-shortcut/desktop-shortcut";
import Window from "./components/window/window";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";

const windowsData = [
  {
    id: "my-computer",
    name: "My Computer",
    icon: "about_jake.png",
    open: false,
    position: {
      x: 100,
      y: 100
    }
  },
  {
    id: "main-site",
    name: "Jake Busse",
    icon: "cursor.png",
    open: false,
    position: {
      x: 50,
      y: 50
    }
  },
  
]

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [selectedDesktopShortcut, setSelectedDesktopShortcut] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const retVal = time.toLocaleString("en-US", {
    timeStyle: "short",
    hour12: true,
  });

  const [windows, setWindows] = useState(windowsData);
  const [activeWindow, setActiveWindow] = useState('my-computer');

  const handleDragEnd = (event) => {
    const window = windows.find((x) => x.id === event.active.id);
    if(window) {
      window.position.x += event.delta.x;
      window.position.y += event.delta.y;
      const newWindows = windows.map((x) => {
        if(x.id === window.id) return window;
        return x;
      })
    }
  }

  return (
    <div className="monitor flex items-center">
      <DndContext collisionDetection={closestCenter} modifiers={[restrictToParentElement]} onDragEnd={handleDragEnd}>
        <div
          className="desktop"
          style={{ position: "relative", width: "100%", height: "100vh" }} // Constrain parent
          onClick={() => setSelectedDesktopShortcut("null")}
        >
          <DesktopShortcut
            selectedShortcut={selectedDesktopShortcut}
            setSelectedShortcut={setSelectedDesktopShortcut}
            icon="cursor-pointer.png"
            name="Cursor"
          />
        </div>
        {windows.map((window) => (
          <Window key={window.id} id={window.id} name={window.name} icon={window.icon} open={window.open} active={activeWindow === window.id} makeActive={() => setActiveWindow(window.id)} position={window.position} />
        ))}
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
