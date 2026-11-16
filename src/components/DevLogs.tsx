import React from "react";
import { motion } from "framer-motion";

export default function DevLogs() {
  return (
    <div className="notes-card-wrap">
      <div className="notes-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> Process notes</p>
        <h2>Behind the <em>build.</em></h2>
      </div>
      <motion.div
        className="notes-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="notes-symbol" aria-hidden="true">✳</span>
        <div>
          <span className="notes-label">A WORK IN PROGRESS</span>
          <p>Every good project starts with a question. I&apos;m collecting the notes, sketches, and small discoveries along the way.</p>
        </div>
        <span className="notes-soon">More soon <span aria-hidden="true">↗</span></span>
      </motion.div>
    </div>
  );
}
