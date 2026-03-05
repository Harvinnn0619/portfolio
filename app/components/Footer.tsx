export default function Footer() {
  return (
    <>
      <hr style={{ border: "none", borderTop: "1px solid rgba(113,111,168,0.2)", maxWidth: "1100px", margin: "0 auto" }} />
        <footer style={{ padding: "2rem 4rem", maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "#716FA8" }}>
            © 2026 <span style={{ color: "#57C785" }}>Your Name</span>. Built from scratch.
         </p>
         <p style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "#716FA8" }}>
            Designed & Coded by <span style={{ color: "#57C785" }}>you</span>.
          </p>
      </footer>
    </>
  );
}