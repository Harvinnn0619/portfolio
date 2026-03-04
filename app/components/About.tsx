"use client";

import { useEffect, useRef } from "react";

const stats = [
  { num: "12+", label: "Projects Built" },
  { num: "3", label: "Years Learning" },
  { num: "6+", label: "Technologies" },
  { num: "∞", label: "Coffee Consumed" },
];

export default function About() {
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
      <section ref={ref} id="about" style={{ padding: "7rem 4rem", maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p className="reveal" style={{ fontFamily: "monospace", fontSize: "0.7rem", letterSpacing: "0.15em", color: "#a855f7", textTransform: "uppercase", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ width: "24px", height: "1px", background: "linear-gradient(to right, #a855f7, transparent)", display: "block" }} />
          Who I Am
        </p>
        <h2 className="reveal reveal-delay-1" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "3rem", lineHeight: 1 }}>
          About
        </h2>
        <div className="reveal reveal-delay-2 mobile-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            {[
              <>Hey — I&apos;m a <strong style={{ color: "#e9d5ff", fontWeight: 600 }}>frontend developer</strong> based in Talisay City, Cebu. I&apos;m passionate about creating interfaces that are fast, accessible, and feel great to use.</>,
              <>I studied <strong style={{ color: "#e9d5ff", fontWeight: 600 }}>Bachelor of Science in Industrial Technology</strong> and actively looking for <strong style={{ color: "#e9d5ff", fontWeight: 600 }}>entry-level opportunities</strong> where I can contribute to real products and grow with a great team.</>,
              <>When I&apos;m not coding, you&apos;ll find me playing video games and hanging out with my girlfriend.</>,
            ].map((text, i) => (
              <p key={i} style={{ fontFamily: "monospace", fontSize: "0.88rem", color: "#6d6a8a", lineHeight: 1.9, marginBottom: "1.25rem" }}>{text}</p>
            ))}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "2.5rem" }}>
              {stats.map(s => (
                <div key={s.label} style={{
                  background: "rgba(139,92,246,0.04)", border: "1px solid rgba(139,92,246,0.12)",
                  borderRadius: "10px", padding: "1.5rem", transition: "background 0.2s, border-color 0.2s",
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(139,92,246,0.1)"; el.style.borderColor = "rgba(139,92,246,0.3)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(139,92,246,0.04)"; el.style.borderColor = "rgba(139,92,246,0.12)"; }}
                >
                  <p style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.04em", background: "linear-gradient(135deg, #a855f7, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1, marginBottom: "0.25rem" }}>{s.num}</p>
                  <p style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "#6d6a8a", letterSpacing: "0.05em" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hide-mobile" style={{
            aspectRatio: "3/4", borderRadius: "16px", overflow: "hidden",
            background: "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(109,40,217,0.04) 100%)",
            border: "1px solid rgba(139,92,246,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(139,92,246,0.03) 40px, rgba(139,92,246,0.03) 41px)" }} />
            <p style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "rgba(139,92,246,0.3)", letterSpacing: "0.1em", textAlign: "center", textTransform: "uppercase", zIndex: 1 }}>YOUR<br />PHOTO</p>
          </div>
        </div>
      </section>
    </>
  );
}