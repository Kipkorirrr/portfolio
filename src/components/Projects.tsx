import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Healthy Coffee",
    description: "An e-commerce experience for a coffee brand.",
    category: "E-commerce",
    number: "01",
    type: "healthy",
  },
  {
    title: "Blush & Bloom",
    description: "An online storefront for flowers and thoughtful gifts.",
    category: "E-commerce",
    number: "02",
    type: "blush",
  },
  {
    title: "RentTrack",
    description: "A digital product for making rent management simpler.",
    category: "Property tech",
    number: "03",
    type: "renttrack",
  },
];

function ProjectPreview({ type }: { type: string }) {
  if (type === "healthy") {
    return (
      <div className="healthy-preview" aria-hidden="true">
        <span className="preview-kicker">SLOW MORNINGS, MADE BETTER</span>
        <div className="coffee-cup"><span /></div>
        <span className="healthy-wordmark">healthy<br /><em>coffee.</em></span>
        <span className="preview-cta">FIND YOUR BLEND&nbsp; ↗</span>
      </div>
    );
  }

  if (type === "blush") {
    return (
      <div className="blush-preview" aria-hidden="true">
        <span className="preview-kicker">A LITTLE JOY, DELIVERED</span>
        <div className="flower flower-one"><i /><i /><i /><i /><i /><b /></div>
        <div className="flower flower-two"><i /><i /><i /><i /><i /><b /></div>
        <span className="blush-wordmark">blush <em>&amp; bloom</em></span>
        <span className="blush-caption">FLOWERS FOR EVERY KIND OF DAY</span>
      </div>
    );
  }

  return (
    <div className="renttrack-preview" aria-hidden="true">
      <div className="preview-header"><span className="preview-logo">r.</span><span>My home</span><span className="preview-menu">•••</span></div>
      <div className="preview-label">NEXT PAYMENT</div>
      <div className="preview-amount">KES 24,500<span>.00</span></div>
      <div className="preview-progress"><span /></div>
      <div className="preview-meta"><span>Due in 8 days</span><span>APR 05</span></div>
    </div>
  );
}

export default function Projects({ compact = false }: { compact?: boolean }) {
  return (
    <>
      {!compact && (
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> Selected work</p>
            <h2>Things I&apos;ve <em>made.</em></h2>
          </div>
          <span className="section-count">01 — 03</span>
        </div>
      )}
      <div className={`project-grid ${compact ? "project-grid-compact" : ""}`}>
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            className="project-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -7 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`project-art project-art-${project.type}`}>
              <span className="project-index">PROJECT / {project.number}</span>
              <ProjectPreview type={project.type} />
              <span className="project-art-spark" aria-hidden="true">✳</span>
            </div>
            <div className="project-info">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className="project-meta">{project.category}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}
