export default function Footer() {
  return (
    <>
      <hr style={{ border: "none", borderTop: "1px solid rgba(139,92,246,0.12)", maxWidth: "1100px", margin: "0 auto" }} />
      <footer style={{ padding: "2rem 4rem", maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "#4a4568" }}>
          © 2026 <span style={{ color: "#a855f7" }}>Harvin N. De Los Reyes</span>. Built from scratch.
        </p>
        <p style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "#4a4568" }}>
          Designed & Coded by <span style={{ color: "#a855f7" }}>vin</span>.
        </p>
      </footer>
    </>
  );
}