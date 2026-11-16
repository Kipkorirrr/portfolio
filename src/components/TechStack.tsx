import React from "react";
import { motion } from "framer-motion";

const tools = [
  { name: "React", mark: "⚛", className: "tool-react" },
  { name: "TypeScript", mark: "TS", className: "tool-typescript" },
  { name: "JavaScript", mark: "JS", className: "tool-javascript" },
  { name: "Node.js", mark: "⬡", className: "tool-node" },
  { name: "React Native", mark: "RN", className: "tool-native" },
  { name: "Tailwind CSS", mark: "≋", className: "tool-tailwind" },
  { name: "Vite", mark: "ϟ", className: "tool-vite" },
  { name: "Framer Motion", mark: "M", className: "tool-motion" },
];

export default function TechStack({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`tech-stack ${compact ? "tech-stack-compact" : ""}`}>
      <div className="tech-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> Tools of the trade</p>
        <h2>Built with a <em>modern toolkit.</em></h2>
        {!compact && <p className="tech-description">A flexible set of tools for turning good ideas into dependable, delightful products.</p>}
      </div>
      <div className="tech-grid">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            className="tech-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, rotate: index % 2 === 0 ? -2 : 2, scale: 1.03 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.32, delay: (index % 4) * 0.06 }}
          >
            <span className={`tech-mark ${tool.className}`} aria-hidden="true">{tool.mark}</span>
            <span>{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
