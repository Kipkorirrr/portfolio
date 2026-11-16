import React from "react";
import { motion } from "framer-motion";

const links = [
  { name: "GitHub", href: "https://github.com/Kipkorirrr", mark: "GH", type: "github" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/enock-kipkorir-293436340", mark: "in", type: "linkedin" },
  { name: "Email", href: "mailto:keepkorirr@gmail.com", mark: "@", type: "email" },
  { name: "WhatsApp", href: "https://wa.me/254719149781", mark: "WA", type: "whatsapp" },
];

function SocialMark({ type }: { type: string }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.48.09.65-.2.65-.46v-1.68c-2.65.58-3.21-1.12-3.21-1.12-.44-1.1-1.06-1.4-1.06-1.4-.87-.59.07-.58.07-.58.96.07 1.47.98 1.47.98.85 1.46 2.23 1.04 2.78.8.09-.62.33-1.04.6-1.28-2.12-.24-4.35-1.06-4.35-4.72 0-1.05.38-1.91.98-2.58-.1-.24-.43-1.22.1-2.55 0 0 .8-.26 2.62.98a9.1 9.1 0 0 1 4.77 0c1.82-1.24 2.62-.98 2.62-.98.53 1.33.2 2.31.1 2.55.61.67.98 1.53.98 2.58 0 3.67-2.23 4.48-4.36 4.71.34.3.64.88.64 1.78v2.51c0 .26.17.56.65.46A9.5 9.5 0 0 0 12 2.5Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.2 8.3a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.7 9.7h3v10.1h-3zM9 9.7h2.9v1.4h.04c.4-.77 1.38-1.58 2.84-1.58 3.04 0 3.61 2 3.61 4.6v5.68h-3v-5.04c0-1.2-.02-2.74-1.67-2.74-1.68 0-1.94 1.3-1.94 2.65v5.13H9z" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.2 11.8a8.2 8.2 0 0 1-12.14 7.19L3 20l1.07-4.9A8.2 8.2 0 1 1 20.2 11.8Z" />
        <path d="M8.2 7.5c-.2-.45-.4-.46-.6-.47h-.5c-.17 0-.45.06-.68.32-.24.26-.9.88-.9 2.14 0 1.27.92 2.5 1.04 2.68.13.17 1.78 2.85 4.4 3.88 2.17.85 2.62.68 3.1.63.47-.04 1.52-.62 1.74-1.22.21-.6.21-1.12.15-1.23-.07-.1-.24-.17-.5-.3-.26-.13-1.52-.75-1.75-.83-.24-.09-.41-.13-.58.13-.17.25-.66.82-.8.99-.14.17-.3.2-.56.07-.26-.13-1.1-.41-2.1-1.3-.78-.69-1.3-1.54-1.45-1.8-.15-.25-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.25.26-.42.08-.17.04-.32-.02-.45-.07-.13-.58-1.4-.8-1.91Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.5 5.5h17v13h-17z" />
      <path d="m4 6 8 6.5L20 6" />
    </svg>
  );
}

export default function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`social-links ${compact ? "social-links-compact" : ""}`}>
      {links.map((link, index) => (
        <motion.a
          key={link.name}
          className={`social-link social-link-${link.type}`}
          href={link.href}
          aria-label={link.name}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          initial={compact ? false : { opacity: 0, y: 16 }}
          whileInView={compact ? undefined : { opacity: 1, y: 0 }}
          whileHover={{ y: -5, scale: 1.025 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, delay: index * 0.06 }}
        >
          <span className="social-icon"><SocialMark type={link.type} /></span>
          <span className="social-name">{link.name}</span>
          <span className="social-arrow" aria-hidden="true">↗</span>
        </motion.a>
      ))}
    </div>
  );
}
