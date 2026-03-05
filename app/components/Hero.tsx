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
        background: "radial-gradient(circle, rgba(59,8,64,0.4) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
        animation: "glowPulse 4s ease-in-out infinite",
      }} />

      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        padding: "10rem 4rem 4rem",
        position: "relative", zIndex: 1,
      }}>

        {/* Tag */}
        <p className="hero-tag" style={{
          fontFamily: "monospace", fontSize: "0.72rem", letterSpacing: "0.15em",
          color: "#57C785", textTransform: "uppercase",
          marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem",
        }}>
          <span style={{ width: "32px", height: "1px", background: "linear-gradient(to right, #57C785, #3B0840)", display: "block" }} />
          Available for opportunities
        </p>

        {/* Name */}
        <h1 className="hero-name" style={{
          fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 800,
          lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: "1.5rem",
        }}>
          I&apos;m a<br />
          <span style={{
            background: "linear-gradient(135deg, #57C785 0%, #9919a5 50%, #716FA8 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Frontend Dev.
          </span><br />
          <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)", color: "transparent" }}>
            Here.
          </span>
        </h1>

        {/* Description */}
        <p className="hero-desc" style={{
          maxWidth: "500px", fontFamily: "monospace", fontSize: "0.9rem",
          color: "#a8a6c8", lineHeight: 1.8, marginBottom: "3rem",
        }}>
          Frontend developer focused on building clean, performant, and accessible
          web experiences. I turn ideas into interfaces.
        </p>

        {/* Buttons */}
        <div className="hero-cta" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a href="#projects" style={{
            padding: "0.85rem 2rem",
            background: "linear-gradient(135deg, #3B0840, #57C785)",
            color: "#fff", fontWeight: 700, fontSize: "0.85rem",
            borderRadius: "6px", textDecoration: "none", display: "inline-block",
            boxShadow: "0 0 24px rgba(87,199,133,0.3)",
            transition: "box-shadow 0.3s, transform 0.2s",
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(87,199,133,0.6)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(87,199,133,0.3)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            View Work
          </a>
          <a href="#contact" style={{
            padding: "0.85rem 2rem", background: "transparent", color: "#57C785",
            fontFamily: "monospace", fontSize: "0.78rem", letterSpacing: "0.06em",
            border: "1px solid rgba(87,199,133,0.3)", borderRadius: "6px",
            textDecoration: "none", transition: "border-color 0.3s, color 0.3s, transform 0.2s",
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "#57C785";
              (e.currentTarget as HTMLElement).style.color = "#ffffff";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(87,199,133,0.3)";
              (e.currentTarget as HTMLElement).style.color = "#57C785";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll hide-mobile" style={{
        position: "absolute", bottom: "3rem", left: "4rem",
        fontFamily: "monospace", fontSize: "0.65rem", letterSpacing: "0.15em",
        color: "#716FA8", textTransform: "uppercase",
        display: "flex", alignItems: "center", gap: "1rem", zIndex: 1,
      }}>
        Scroll
        <span style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, #57C785, transparent)", display: "block" }} />
      </div>
    </div>
  );
}