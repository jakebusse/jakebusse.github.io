"use client";
import "./xp.css";
import { useState, useEffect } from "react";

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
  return (
    <div className="monitor">
      <div className="desktop">
        <h1>Test</h1>
      </div>
      <div className="taskbar flex flex-row flex-no-wrap justify-between">
        <div className="start"></div>
        <div className="clock inline text-white text-bold flex flex-no-wrap items-center px-5 text-lg">
          {retVal}
        </div>
      </div>
    </div>
  );
}
