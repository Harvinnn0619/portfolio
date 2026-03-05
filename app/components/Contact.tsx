"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Email", handle: "delosreyes.harvin@gmail.com", href: "mailto:delosreyes.harvin@gmail.com" },
  { label: "GitHub", handle: "@Harvinnn0619", href: "#" },
  { label: "LinkedIn", handle: "in/yourname", href: "#" },
  { label: "Resume", handle: "Download PDF →", href: "#" },
];

export default function Contact() {
  const ref = useRef<HTMLElement | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(113,111,168,0.2)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      />

      <section
        ref={ref as any}
        id="contact"
        style={{
          padding: "7rem 4rem",
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Label */}
        <p
          className="reveal"
          style={{
            fontFamily: "monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            color: "#57C785",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              width: "24px",
              height: "1px",
              background: "linear-gradient(to right, #57C785, transparent)",
              display: "block",
            }}
          />
          Let&apos;s Talk
        </p>

        {/* Title */}
        <h2
          className="reveal reveal-delay-1"
          style={{
            fontSize: "clamp(2rem,5vw,3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "3rem",
            lineHeight: 1,
          }}
        >
          Contact
        </h2>

        <div
          className="reveal reveal-delay-2 mobile-col"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Links */}
          <div>
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "0.88rem",
                color: "#a8a6c8",
                lineHeight: 1.9,
                marginBottom: "2.5rem",
              }}
            >
              Open to entry-level roles. Whether you have a position, a project, or just want to connect — my inbox is open.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1rem 1.25rem",
                    textDecoration: "none",
                    background: "rgba(59,8,64,0.2)",
                    border: "1px solid rgba(113,111,168,0.2)",
                    borderRadius: "8px",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(59,8,64,0.4)";
                    el.style.borderColor = "rgba(87,199,133,0.3)";
                    el.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(59,8,64,0.2)";
                    el.style.borderColor = "rgba(113,111,168,0.2)";
                    el.style.transform = "translateX(0)";
                  }}
                >
                  <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#ffffff" }}>{link.label}</span>
                  <span style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#a8a6c8" }}>{link.handle}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              background: "rgba(59,8,64,0.2)",
              border: "1px solid rgba(113,111,168,0.2)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {sent ? (
              <div
                style={{
                  padding: "4rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  minHeight: "300px",
                }}
              >
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #57C785, #3B0840)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Sent! ✓
                </p>
                <p style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#a8a6c8" }}>I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { label: "Name", key: "name", type: "text", placeholder: "Shiena Mae Escala" },
                  { label: "Email", key: "email", type: "email", placeholder: "shienamaeescala392@gmail.com" },
                ].map((field) => (
                  <div key={field.key} style={{ padding: "1rem 1.5rem", borderBottom: "1px solid rgba(113,111,168,0.15)" }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "monospace",
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        color: "#716FA8",
                        textTransform: "uppercase",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        fontFamily: "Syne, sans-serif",
                        fontSize: "0.92rem",
                        color: "#ffffff",
                      }}
                    />
                  </div>
                ))}

                <div style={{ padding: "1rem 1.5rem", borderBottom: "1px solid rgba(113,111,168,0.15)" }}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      color: "#716FA8",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about the opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      fontFamily: "Syne, sans-serif",
                      fontSize: "0.92rem",
                      color: "#ffffff",
                      resize: "none",
                    }}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  style={{
                    padding: "1.1rem 1.5rem",
                    cursor: "pointer",
                    textAlign: "left",
                    background: "linear-gradient(135deg, #3B0840, #57C785)",
                    color: "#fff",
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    border: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Send Message →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}