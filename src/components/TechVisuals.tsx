import React from "react";
import { motion } from 'framer-motion';
import CodeSnippet from './visuals/CodeSnippet';
import HoloPanel from './visuals/HoloPanel';
import NeuralNet from './visuals/NeuralNet';

export default function TechVisuals() {
  return (
    <section className="grid md:grid-cols-3 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -8 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8, type: "spring" }}
      >
        <CodeSnippet />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 8 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
      >
        <HoloPanel />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.85 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
      >
        <NeuralNet />
      </motion.div>
    </section>
  );
}