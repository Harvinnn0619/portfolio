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
            background: "#0d0d14",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "2rem",
          }}
        >
          {/* Logo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.04em", color: "#e9d5ff" }}
          >
            dev<span style={{ color: "#a855f7" }}>.</span>
          </motion.p>

          {/* Loading bar */}
          <div style={{ width: "160px", height: "2px", background: "rgba(139,92,246,0.2)", borderRadius: "2px", overflow: "hidden" }}>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              style={{
                height: "100%",
                background: "linear-gradient(to right, #7c3aed, #a855f7, #c084fc)",
                boxShadow: "0 0 10px rgba(168,85,247,0.8)",
              }}
            />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ fontFamily: "monospace", fontSize: "0.7rem", letterSpacing: "0.15em", color: "#4a4568", textTransform: "uppercase" }}
          >
            Loading portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}