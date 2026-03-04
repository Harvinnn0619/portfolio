"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed", bottom: "2rem", right: "2rem", zIndex: 50,
        width: "44px", height: "44px", borderRadius: "50%",
        background: "linear-gradient(135deg, #7c3aed, #a855f7)",
        border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 20px rgba(139,92,246,0.5)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.3s, transform 0.3s, box-shadow 0.3s",
        pointerEvents: visible ? "all" : "none",
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 35px rgba(139,92,246,0.9)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 20px rgba(139,92,246,0.5)")}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}