import React from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  category: string;
  number: string;
  type: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "Healthy Coffee",
    description: "An AI-powered tool that helps coffee farmers scan leaves and detect potential plant diseases.",
    category: "AI · Agriculture",
    number: "01",
    type: "healthy",
    liveUrl: "https://healthycoffee.vercel.app",
  },
  {
    title: "Blush & Bloom",
    description: "An online beauty store for makeup, skincare, and everyday essentials.",
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
        <span className="preview-kicker">AI-POWERED COFFEE LEAF SCAN</span>
        <div className="coffee-leaf"><span /></div>
        <span className="healthy-wordmark">healthy<br /><em>coffee.</em></span>
        <span className="preview-cta">SCAN A LEAF · GET AI INSIGHTS</span>
      </div>
    );
  }

  if (type === "blush") {
    return (
      <div className="blush-preview" aria-hidden="true">
        <span className="preview-kicker">BEAUTY FOR YOUR EVERYDAY GLOW</span>
        <div className="flower flower-one"><i /><i /><i /><i /><i /><b /></div>
        <div className="flower flower-two"><i /><i /><i /><i /><i /><b /></div>
        <span className="blush-wordmark">blush <em>&amp; bloom</em></span>
        <span className="blush-caption">MAKEUP · SKINCARE · BEAUTY</span>
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
            <p className="eyebrow"><span className="eyebrow-line" /> Project portfolio</p>
            <h2>Selected <em>projects.</em></h2>
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
                {project.liveUrl && (
                  <a
                    className="project-live-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live app (opens in a new tab)`}
                  >
                    View live app <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
              <span className="project-meta">{project.category}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}
