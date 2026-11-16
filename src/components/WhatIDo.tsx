import React from "react";
import { motion } from "framer-motion";

const services = [
  { number: "01", title: "Build for the web", text: "Fast, accessible products made with modern frontend tools." },
  { number: "02", title: "Design with feeling", text: "Clear interfaces with character, rhythm, and thoughtful detail." },
  { number: "03", title: "Ship the whole thing", text: "From first sketch to the final, polished release." },
];

export default function WhatIDo() {
  return (
    <>
      <div className="section-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> What I bring</p>
        <h2>Ideas, meet <em>execution.</em></h2>
      </div>
      <div className="service-grid">
        {services.map((item, index) => (
          <motion.article
            key={item.number}
            className="service-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.55 }}
          >
            <span className="service-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </motion.article>
        ))}
      </div>
    </>
  );
}
