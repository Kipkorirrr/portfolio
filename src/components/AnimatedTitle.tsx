import React from "react";
import { motion } from "framer-motion";

export default function AnimatedTitle() {
  return (
    <div className="hero-intro">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow-line" /> Software engineer · Nairobi, Kenya
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Engineering<br />
        <span>across the</span> <em>stack.</em>
      </motion.h1>
      <motion.p
        className="hero-description"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        I&apos;m Enock Kipkorir, a software engineer, systems analyst, and designer.
        I turn complex needs into useful products across frontend, backend, AI, cloud, and data.
      </motion.p>
    </div>
  );
}
