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
        “The best software doesn&apos;t just work. It makes a <em>difference.</em>”
      </blockquote>
      <p className="philosophy-caption">Reliable systems under the hood, thoughtful experiences on the surface.</p>
    </motion.div>
  );
}
