"use client";
import "./window.css";
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Window({ name, icon, ...rest }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div
      className="window container"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <div className="windowHeader">
        <div className="flex flex-row flex-no-wrap gap-1 items-center">
          <img
            src={"./icons/" + icon}
            alt={name}
            className="windowHeaderIcon"
          />
          <span className="windowHeaderTitle">{name}</span>
        </div>
      </div>
      <div className="windowBody" {...rest}>
        {rest.children}
      </div>
    </div>
  );
}
