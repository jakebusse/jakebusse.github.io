"use client";

import "./window.css";
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import MyComputer from "../../windows/my-computer";
import Home from "../../../page";
import { useState } from "react";

type WindowProps = {
  name: string;
  icon: string;
  id: string;
  open: boolean;
  active: boolean;
  makeActiveAction: () => void;
  closeWindowAction: () => void;
  minimizeWindowAction: () => void;
  position: {
    x: number;
    y: number;
  };
};

export default function Window({
  name,
  icon,
  id,
  open,
  active,
  makeActiveAction,
  closeWindowAction,
  minimizeWindowAction,
  position,
}: WindowProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const [fullscreen, setFullscreen] = useState(false);

  const style = {
    transform: transform ? CSS.Translate.toString(transform) : undefined,
    position: "absolute",
    top: position.y,
    left: position.x,
    zIndex: active ? 40 : 30,
  };

  const renderContent = () => {
    if (id === "my-computer") return <MyComputer />;
    if (id === "main-site") return <Home />;
    return null;
  };

  return (
    <div
      className={`window container ${fullscreen ? "fullscreen" : ""} ${
        open ? "" : "hidden"
      }`}
      ref={setNodeRef}
      // @ts-expect-error style is functional
      style={style}
      id={id}
      onClick={makeActiveAction}
    >
      <div className="windowHeader">
        <div
          className="flex flex-row flex-grow gap-1 items-center"
          {...listeners}
          {...attributes}
        >
          <img
            src={`./icons/${icon}`}
            alt={name}
            className="windowHeaderIcon"
          />
          <span className="windowHeaderTitle">{name}</span>
        </div>
        <div className="flex flex-row gap-1 items-end">
          <div
            className="windowActionButtonContainer"
            onClick={minimizeWindowAction}
          >
            <img
              src="/icons/minimize.png"
              className="windowActionButton"
              alt="close"
            />
          </div>
          <div
            className="windowActionButtonContainer"
            onClick={() => setFullscreen(!fullscreen)}
          >
            <img
              src="/icons/maximize.png"
              className="windowActionButton"
              alt="close"
            />
          </div>
          <div className="windowActionButtonContainer">
            <img
              src="/icons/close.png"
              className="windowActionButton"
              alt="close"
              onClick={closeWindowAction}
            />
          </div>
        </div>
      </div>
      <div className="windowBody overflow-scroll">{renderContent()}</div>
    </div>
  );
}
