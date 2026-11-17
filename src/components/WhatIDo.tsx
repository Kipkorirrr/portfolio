import React from "react";
import { motion } from "framer-motion";

const services = [
  { number: "01", title: "Frontend & client engineering", text: "Build responsive client apps with React, TypeScript, and modern JavaScript." },
  { number: "02", title: "Backend, APIs & AI", text: "Design backend services and AI-powered features for practical, real-world problems." },
  { number: "03", title: "Data, cloud & MLOps", text: "Work across MySQL and MongoDB storage, cloud infrastructure, and software delivery." },
];

export default function WhatIDo() {
  return (
    <>
      <div className="section-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> What I bring</p>
        <h2>Engineering from idea to <em>impact.</em></h2>
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
