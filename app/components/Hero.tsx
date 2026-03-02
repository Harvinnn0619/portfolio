"use client";

export default function Hero() {
  return (
    <div
      id="home"
      style={{
        position: "relative", minHeight: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "center",
        zIndex: 1,
      }}
    >
      {/* Hero glow orb */}
      <div style={{
        position: "absolute", top: "20%", left: "60%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
        animation: "glowPulse 4s ease-in-out infinite",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "10rem 4rem 4rem", position: "relative", zIndex: 1 }}>

        <p className="hero-tag" style={{
          fontFamily: "monospace", fontSize: "0.72rem", letterSpacing: "0.15em",
          color: "#a855f7", textTransform: "uppercase",
          marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem",
        }}>
          <span style={{ width: "32px", height: "1px", background: "linear-gradient(to right, #a855f7, #7c3aed)", display: "block" }} />
          Available for opportunities
        </p>

        <h1 className="hero-name" style={{
          fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 800,
          lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: "1.5rem",
        }}>
          Your<br />
          <span style={{
            background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #c084fc 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Name
          </span><br />
          <span style={{ WebkitTextStroke: "1px rgba(237,233,254,0.2)", color: "transparent" }}>
            Here.
          </span>
        </h1>

        <p className="hero-desc" style={{
          maxWidth: "500px", fontFamily: "monospace", fontSize: "0.9rem",
          color: "#6d6a8a", lineHeight: 1.8, marginBottom: "3rem",
        }}>
          Frontend developer focused on building clean, performant, and accessible
          web experiences. I turn ideas into interfaces.
        </p>

        <div className="hero-cta" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a href="#projects" style={{
            padding: "0.85rem 2rem",
            background: "linear-gradient(135deg, #7c3aed, #a855f7)",
            color: "#fff", fontWeight: 700, fontSize: "0.85rem",
            borderRadius: "6px", textDecoration: "none", display: "inline-block",
            boxShadow: "0 0 24px rgba(139,92,246,0.4)",
            transition: "box-shadow 0.3s, transform 0.2s",
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(139,92,246,0.7)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(139,92,246,0.4)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            View Work
          </a>
          <a href="#contact" style={{
            padding: "0.85rem 2rem", background: "transparent", color: "#a78bfa",
            fontFamily: "monospace", fontSize: "0.78rem", letterSpacing: "0.06em",
            border: "1px solid rgba(139,92,246,0.3)", borderRadius: "6px",
            textDecoration: "none", transition: "border-color 0.3s, color 0.3s, transform 0.2s",
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "#a855f7";
              (e.currentTarget as HTMLElement).style.color = "#c084fc";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.3)";
              (e.currentTarget as HTMLElement).style.color = "#a78bfa";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="hero-scroll hide-mobile" style={{
        position: "absolute", bottom: "3rem", left: "4rem",
        fontFamily: "monospace", fontSize: "0.65rem", letterSpacing: "0.15em",
        color: "#4a4568", textTransform: "uppercase",
        display: "flex", alignItems: "center", gap: "1rem", zIndex: 1,
      }}>
        Scroll
        <span style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, #7c3aed, transparent)", display: "block" }} />
      </div>
    </div>
  );
}