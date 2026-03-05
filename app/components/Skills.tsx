"use client";

import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "HTML5 / CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Tools & More",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 65 },
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 120);
          });
          setAnimated(true);
        } else {
          setAnimated(false);
          entry.target.querySelectorAll(".reveal").forEach((el) => {
            el.classList.remove("visible");
          });
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <hr style={{ border: "none", borderTop: "1px solid rgba(113,111,168,0.2)", maxWidth: "1100px", margin: "0 auto" }} />
      <section ref={ref} id="skills" style={{ padding: "7rem 4rem", maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p className="reveal" style={{ fontFamily: "monospace", fontSize: "0.7rem", letterSpacing: "0.15em", color: "#57C785", textTransform: "uppercase", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ width: "24px", height: "1px", background: "linear-gradient(to right, #57C785, transparent)", display: "block" }} />
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
                background: "rgba(59,8,64,0.2)", border: "1px solid rgba(113,111,168,0.2)",
                borderRadius: "12px", padding: "2rem",
                transition: "background 0.3s, border-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(59,8,64,0.4)";
                el.style.borderColor = "rgba(87,199,133,0.3)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(59,8,64,0.2)";
                el.style.borderColor = "rgba(113,111,168,0.2)";
                el.style.transform = "translateY(0)";
              }}
            >
              <p style={{ fontFamily: "monospace", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#57C785", textTransform: "uppercase", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(113,111,168,0.15)" }}>
                {group.title}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {group.skills.map((skill, j) => (
                  <li key={skill.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#ffffff" }}>{skill.name}</span>
                      <span style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "#57C785" }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: "4px", background: "rgba(113,111,168,0.2)", borderRadius: "4px", overflow: "hidden" }}>
                      <div style={{
                        height: "100%", borderRadius: "4px",
                        background: "linear-gradient(to right, #3B0840, #716FA8, #57C785)",
                        boxShadow: "0 0 8px rgba(87,199,133,0.5)",
                        width: animated ? `${skill.level}%` : "0%",
                        transition: `width 1s cubic-bezier(0.22,1,0.36,1) ${j * 0.15 + i * 0.1}s`,
                      }} />
                    </div>
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