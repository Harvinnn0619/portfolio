"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "#252742",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: "2rem",
          }}
        >
          {/* Glow orb behind logo */}
          <div style={{
            position: "absolute",
            width: "300px", height: "300px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,8,64,0.5) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Logo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "2rem", fontWeight: 800,
              letterSpacing: "-0.04em", color: "#ffffff",
              position: "relative", zIndex: 1,
            }}
          >
            dev<span style={{ color: "#57C785" }}>.</span>
          </motion.p>

          {/* Loading bar */}
          <div style={{
            width: "160px", height: "2px",
            background: "rgba(113,111,168,0.2)",
            borderRadius: "2px", overflow: "hidden",
            position: "relative", zIndex: 1,
          }}>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              style={{
                height: "100%",
                background: "linear-gradient(to right, #3B0840, #57C785)",
                boxShadow: "0 0 10px rgba(87,199,133,0.6)",
              }}
            />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              fontFamily: "monospace", fontSize: "0.7rem",
              letterSpacing: "0.15em", color: "#716FA8",
              textTransform: "uppercase", position: "relative", zIndex: 1,
            }}
          >
            Loading portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}