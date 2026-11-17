import React from "react";
import { motion } from "framer-motion";

const specialties = [
  {
    name: "Frontend & Client Engineering",
    mark: "FE",
    skills: ["JavaScript (ES6+)", "TypeScript", "React", "HTML5", "CSS3"],
  },
  {
    name: "Backend & API Architecture",
    mark: "API",
    skills: ["Python", "FastAPI", "Node.js", "REST APIs", "Authentication"],
  },
  {
    name: "AI & Machine Learning",
    mark: "AI",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "LLM/API integration"],
  },
  {
    name: "Data Engineering & Storage",
    mark: "DB",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Vector databases", "Data pipelines"],
  },
  {
    name: "DevOps, Cloud & MLOps",
    mark: "OPS",
    skills: ["Git", "GitHub Actions", "Docker", "Linux", "AWS/GCP", "CDN"],
  },
];

const stackItems = Array.from(new Set(
  specialties.flatMap(({ name, skills }) => [name, ...skills]),
));

export default function TechStack({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`tech-stack ${compact ? "tech-stack-compact" : ""}`}>
      <div className="tech-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> The engineering stack</p>
        <h2>From interface to <em>infrastructure.</em></h2>
        {!compact && <p className="tech-description">Five connected areas of software engineering, backed by a practical toolkit for building and shipping complete products.</p>}
      </div>
      <div className="tech-marquee" role="region" aria-label="Languages, stacks, and technologies">
        <div className="tech-marquee-track">
          {[false, true].map((duplicate) => (
            <div
              key={duplicate ? "duplicate" : "primary"}
              className="tech-marquee-group"
              role="list"
              aria-label={duplicate ? undefined : "Languages, stacks, and technologies"}
              aria-hidden={duplicate || undefined}
            >
              {stackItems.map((item) => (
                <span key={item} className="tech-marquee-item" role="listitem">{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      {!compact && (
        <div className="tech-grid">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.name}
              className="tech-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, rotate: index % 2 === 0 ? -2 : 2, scale: 1.03 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.32, delay: (index % 3) * 0.06 }}
            >
              <span className="tech-mark" aria-hidden="true">{specialty.mark}</span>
              <h3>{specialty.name}</h3>
              <p>{specialty.skills.join(" · ")}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
