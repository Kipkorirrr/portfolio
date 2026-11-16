import React from "react";
import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <motion.div
      className="philosophy-card"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="eyebrow"><span className="eyebrow-line" /> A guiding thought</p>
      <blockquote>
        “The best interfaces don&apos;t just work. They make you <em>feel something.</em>”
      </blockquote>
      <p className="philosophy-caption">A little cosmic symbolism, a lot of clarity — no templates, just thoughtful details.</p>
    </motion.div>
  );
}
