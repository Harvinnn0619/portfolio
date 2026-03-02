"use client";

import { useEffect, useRef } from "react";

const projects = [
  { num: "01", title: "E-Commerce Dashboard", desc: "A full-featured admin dashboard for managing products, orders, and analytics. Built with performance in mind.", tags: ["React", "TypeScript", "Tailwind"], link: "#" },
  { num: "02", title: "Weather App", desc: "Real-time weather application with geolocation, 7-day forecast, and beautiful animated conditions UI.", tags: ["Next.js", "API", "CSS"], link: "#" },
  { num: "03", title: "Task Management Tool", desc: "Kanban-style task manager with drag-and-drop, deadlines, tagging, and local persistence.", tags: ["React", "DnD", "LocalStorage"], link: "#" },
  { num: "04", title: "Blog Platform", desc: "Minimal markdown-powered blog with dark mode, reading time, and tag-based filtering.", tags: ["Next.js", "MDX", "SEO"], link: "#" },
];

export default function Projects() {
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
      <section ref={ref} id="projects" style={{ padding: "7rem 4rem", maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p className="reveal" style={{ fontFamily: "monospace", fontSize: "0.7rem", letterSpacing: "0.15em", color: "#a855f7", textTransform: "uppercase", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ width: "24px", height: "1px", background: "linear-gradient(to right, #a855f7, transparent)", display: "block" }} />
          Selected Work
        </p>
        <h2 className="reveal reveal-delay-1" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "3rem", lineHeight: 1 }}>
          Projects
        </h2>
        <div className="mobile-col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
          {projects.map((p, i) => (
            <div
              key={p.num}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "rgba(139,92,246,0.04)",
                border: "1px solid rgba(139,92,246,0.12)",
                borderRadius: "12px", padding: "2.5rem",
                transition: "background 0.3s, border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                cursor: "none",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(139,92,246,0.08)";
                el.style.borderColor = "rgba(139,92,246,0.3)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 16px 40px rgba(139,92,246,0.12)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(139,92,246,0.04)";
                el.style.borderColor = "rgba(139,92,246,0.12)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <p style={{ fontFamily: "monospace", fontSize: "0.65rem", color: "#4a4568", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>{p.num}</p>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.75rem", color: "#ede9fe" }}>{p.title}</h3>
              <p style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#6d6a8a", lineHeight: 1.7, marginBottom: "1.5rem" }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: "monospace", fontSize: "0.65rem", letterSpacing: "0.08em",
                    padding: "0.3rem 0.75rem",
                    background: "rgba(139,92,246,0.1)",
                    border: "1px solid rgba(139,92,246,0.2)",
                    color: "#a78bfa", borderRadius: "4px",
                  }}>{tag}</span>
                ))}
              </div>
              <a href={p.link} style={{ fontFamily: "monospace", fontSize: "0.7rem", letterSpacing: "0.08em", color: "#a855f7", textDecoration: "none", textTransform: "uppercase" }}>
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}