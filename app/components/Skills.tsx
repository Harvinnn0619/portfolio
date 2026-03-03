"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  { title: "Languages", skills: ["HTML5 / CSS3", "JavaScript (ES6+)", "TypeScript"] },
  { title: "Frameworks", skills: ["React", "Next.js", "Tailwind CSS"] },
  { title: "Tools & More", skills: ["Git & GitHub", "VS Code", "Figma"] },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 120);
          });
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <hr style={{ border: "none", borderTop: "1px solid rgba(139,92,246,0.12)", maxWidth: "1100px", margin: "0 auto" }} />
      <section ref={ref} id="skills" style={{ padding: "7rem 4rem", maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p className="reveal" style={{ fontFamily: "monospace", fontSize: "0.7rem", letterSpacing: "0.15em", color: "#a855f7", textTransform: "uppercase", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ width: "24px", height: "1px", background: "linear-gradient(to right, #a855f7, transparent)", display: "block" }} />
          What I Work With
        </p>
        <h2 className="reveal reveal-delay-1" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "3rem", lineHeight: 1 }}>
          Skills
        </h2>
        <div className="mobile-col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "rgba(139,92,246,0.04)", border: "1px solid rgba(139,92,246,0.12)",
                borderRadius: "12px", padding: "2rem",
                transition: "background 0.3s, border-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(139,92,246,0.08)"; el.style.borderColor = "rgba(139,92,246,0.3)"; el.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(139,92,246,0.04)"; el.style.borderColor = "rgba(139,92,246,0.12)"; el.style.transform = "translateY(0)"; }}
            >
              <p style={{ fontFamily: "monospace", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#a855f7", textTransform: "uppercase", marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(139,92,246,0.12)" }}>
                {group.title}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {group.skills.map(skill => (
                  <li key={skill} style={{ fontSize: "0.92rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.6rem", color: "#e9d5ff" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "linear-gradient(135deg, #a855f7, #7c3aed)", flexShrink: 0, display: "block" }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}