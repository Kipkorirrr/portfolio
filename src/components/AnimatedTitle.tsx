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
        <span className="eyebrow-line" /> Independent developer · Nairobi, Kenya
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Building digital<br />
        <span>things that</span> <em>matter.</em>
      </motion.h1>
      <motion.p
        className="hero-description"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        I&apos;m Enock Kipkorir — a developer crafting thoughtful web experiences
        where useful ideas meet expressive design.
      </motion.p>
    </div>
  );
}
