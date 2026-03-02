"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "1.5rem 4rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      borderBottom: scrolled ? "1px solid rgba(139,92,246,0.15)" : "1px solid transparent",
      background: scrolled ? "rgba(13,13,20,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      transition: "all 0.3s",
    }}>
      <a href="#home" style={{ fontSize: "1.1rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#ede9fe", textDecoration: "none" }}>
        dev<span style={{ color: "#a855f7" }}>.</span>
      </a>
      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
        {["Home", "Projects", "About", "Skills", "Contact"].map((item) => (
          <li key={item}>
            
              <a href={`#${item.toLowerCase()}`}
              style={{ fontFamily: "monospace", fontSize: "0.75rem", letterSpacing: "0.08em", color: "#4a4568", textDecoration: "none", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#a855f7")}
              onMouseLeave={e => (e.currentTarget.style.color = "#4a4568")}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}