"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");

    const move = (e: MouseEvent) => {
      const pos = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      if (cursor) cursor.style.transform = pos;
      if (ring) ring.style.transform = pos;
    };

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        id="cursor"
        style={{
          width: "10px", height: "10px",
          background: "#c8f542",
          borderRadius: "50%",
          position: "fixed", top: 0, left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.1s ease",
        }}
      />
      <div
        id="cursor-ring"
        style={{
          width: "36px", height: "36px",
          border: "1px solid rgba(200,245,66,0.4)",
          borderRadius: "50%",
          position: "fixed", top: 0, left: 0,
          pointerEvents: "none",
          zIndex: 9998,
          transition: "transform 0.30s ease",
        }}
      />
    </>
  );
}