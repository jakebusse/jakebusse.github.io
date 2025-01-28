"use client";

import "./window.css";
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import MyComputer from "../../windows/my-computer";
import Home from "../../../page";

type WindowProps = {
  name: string;
  icon: string;
  id: string;
  open: boolean;
  active: boolean;
  makeActive: () => void;
  position: {
    x: number;
    y: number;
  };
};

export default function Window({
  name,
  icon,
  id,
  active,
  makeActive,
  position,
}: WindowProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: transform ? CSS.Translate.toString(transform) : undefined,
    position: "absolute",
    top: position.y,
    left: position.x,
    zIndex: active ? 50 : 40, // Simplify z-index logic
  };

  const renderContent = () => {
    if (id === "my-computer") return <MyComputer />;
    if (id === "main-site") return <Home />;
    return null;
  };

  return (
    <div
      className="window container"
      ref={setNodeRef}
      style={style}
      id={id}
      onClick={makeActive}
    >
      <div className="windowHeader" {...listeners} {...attributes} >
        <div className="flex flex-row gap-1 items-center">
          <img
            src={`./icons/${icon}`}
            alt={name}
            className="windowHeaderIcon"
          />
          <span className="windowHeaderTitle">{name}</span>
        </div>
      </div>
      <div className="windowBody overflow-hidden">{renderContent()}</div>
    </div>
  );
}
