"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0,
      height: "3px", zIndex: 999, background: "rgba(113,111,168,0.15)",
    }}>
      <div style={{
        height: "100%", width: `${progress}%`,
        background: "linear-gradient(to right, #3B0840, #716FA8, #57C785)",
        boxShadow: "0 0 10px rgba(87,199,133,0.6)",
        transition: "width 0.1s ease",
      }} />
    </div>
  );
}