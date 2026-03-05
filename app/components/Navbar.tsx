"use client";

import { useEffect, useState } from "react";

const navItems = ["Home", "Projects", "About", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => ({
        id: item.toLowerCase(),
        el: document.getElementById(item.toLowerCase()),
      }));

      const current = sections.find(({ el }) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActive(current.id.charAt(0).toUpperCase() + current.id.slice(1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1.5rem 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: scrolled ? "1px solid rgba(113,111,168,0.2)" : "1px solid transparent",
        background: scrolled ? "rgba(37,39,66,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "all 0.3s",
      }}>
        <a href="#home" style={{ fontSize: "1.1rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", textDecoration: "none" }}>
          vin<span style={{ color: "#57C785" }}>.</span>
        </a>

        {/* Desktop links */}
        <ul className="hide-mobile" style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          {navItems.map((item) => {
            const isActive = active === item;
            return (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    fontFamily: "monospace", fontSize: "0.75rem",
                    letterSpacing: "0.08em", textDecoration: "none",
                    textTransform: "uppercase", transition: "color 0.2s",
                    color: isActive ? "#57C785" : "#716FA8",
                    position: "relative", paddingBottom: "4px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#57C785")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#57C785" : "#716FA8")}
                >
                  {item}
                  {isActive && (
                    <span style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      height: "1px",
                      background: "linear-gradient(to right, #3B0840, #57C785)",
                      boxShadow: "0 0 6px rgba(87,199,133,0.6)",
                    }} />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="show-mobile-flex"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            display: "none", flexDirection: "column", gap: "5px",
            background: "transparent", border: "none",
            cursor: "pointer", padding: "4px", zIndex: 200,
          }}
        >
          <span style={{ width: "24px", height: "2px", background: menuOpen ? "#57C785" : "#ffffff", borderRadius: "2px", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ width: "24px", height: "2px", background: menuOpen ? "#57C785" : "#ffffff", borderRadius: "2px", display: "block", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ width: "24px", height: "2px", background: menuOpen ? "#57C785" : "#ffffff", borderRadius: "2px", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile modal menu */}
      <div
        style={{
          position: "fixed", top: "4.5rem", right: "1rem",
          zIndex: 90, minWidth: "200px",
          background: "rgba(37,39,66,0.97)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(113,111,168,0.2)",
          borderRadius: "12px",
          padding: menuOpen ? "1rem" : "0",
          overflow: "hidden",
          maxHeight: menuOpen ? "400px" : "0px",
          opacity: menuOpen ? 1 : 0,
          boxShadow: menuOpen ? "0 16px 40px rgba(59,8,64,0.3)" : "none",
          transition: "max-height 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease",
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        {navItems.map((item, i) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={closeMenu}
            style={{
              display: "block", padding: "0.75rem 1rem",
              fontSize: "0.9rem", fontWeight: 700,
              color: active === item ? "#57C785" : "#ffffff",
              textDecoration: "none", borderRadius: "8px",
              transition: "background 0.2s, color 0.2s",
              transitionDelay: `${i * 0.04}s`,
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(87,199,133,0.1)";
              el.style.color = "#57C785";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = active === item ? "#57C785" : "#ffffff";
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
}