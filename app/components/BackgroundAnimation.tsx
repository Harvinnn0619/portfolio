"use client";

import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>

      {/* Large slow orb — top left */}
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "-10%", left: "-5%",
          width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,8,64,0.35) 0%, transparent 70%)",
        }}
      />

      {/* Medium orb — top right */}
      <motion.div
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: "absolute", top: "5%", right: "-5%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(87,199,133,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Small orb — middle */}
      <motion.div
        animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute", top: "40%", left: "40%",
          width: "350px", height: "350px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(113,111,168,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Bottom left orb */}
      <motion.div
        animate={{ x: [0, 30, -60, 0], y: [0, -40, 20, 0], scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{
          position: "absolute", bottom: "0%", left: "10%",
          width: "450px", height: "450px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,8,64,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Bottom right orb */}
      <motion.div
        animate={{ x: [0, -30, 50, 0], y: [0, 30, -40, 0], scale: [1, 0.95, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        style={{
          position: "absolute", bottom: "10%", right: "5%",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(87,199,133,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -120, 0],
            x: [0, (i % 2 === 0 ? 30 : -30), 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6 + i * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
          style={{
            position: "absolute",
            left: `${10 + i * 12}%`,
            bottom: `${10 + (i % 3) * 15}%`,
            width: i % 3 === 0 ? "6px" : "4px",
            height: i % 3 === 0 ? "6px" : "4px",
            borderRadius: "50%",
            background: i % 2 === 0 ? "#57C785" : "#3B0840",
            boxShadow: `0 0 ${i % 2 === 0 ? "8px" : "6px"} ${i % 2 === 0 ? "rgba(87,199,133,0.8)" : "rgba(59,8,64,0.8)"}`,
          }}
        />
      ))}

      {/* Grid lines — subtle */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(113,111,168,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(113,111,168,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }} />

    </div>
  );
}