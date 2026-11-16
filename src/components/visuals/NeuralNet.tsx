import React from "react";
import { motion } from 'framer-motion';

export default function NeuralNet() {
  return (
    <motion.div
      className="relative rounded-xl p-5 shadow-lg bg-[#181e3d]/80 border border-[#b6aaff22] overflow-visible"
      whileHover={{ scale: 1.06, boxShadow: '0 0 46px #82e2ff33' }}
      transition={{ type: "spring", stiffness: 190 }}
    >
      <div className="text-xs text-[#b6aaff]/80 mb-2 tracking-wider font-bold uppercase">
        Neural Network
      </div>
      <svg viewBox="0 0 120 65" width="100%" fill="none">
        <g>
          {/* Layer 1 */}
          <circle cx="20" cy="32.5" r="7" fill="#b6aaff55" stroke="#b6aaff" strokeWidth="1" />
          <circle cx="100" cy="32.5" r="7" fill="#b6aaff55" stroke="#b6aaff" strokeWidth="1" />
          {/* Middle nodes */}
          <circle cx="60" cy="14" r="5" fill="#82e2ff66" stroke="#82e2ff" strokeWidth="1" />
          <circle cx="60" cy="32.5" r="5" fill="#82e2ff99" stroke="#b6aaff" strokeWidth="1" />
          <circle cx="60" cy="51" r="5" fill="#82e2ff66" stroke="#82e2ff" strokeWidth="1" />
          {/* Connections */}
          <line x1="27" y1="32.5" x2="55" y2="14" stroke="#b6aaff77" strokeWidth="1.2" />
          <line x1="27" y1="32.5" x2="55" y2="32.5" stroke="#b6aaff77" strokeWidth="1.2" />
          <line x1="27" y1="32.5" x2="55" y2="51" stroke="#b6aaff77" strokeWidth="1.2" />
          <line x1="65" y1="14" x2="93" y2="32.5" stroke="#82e2ff77" strokeWidth="1.2" />
          <line x1="65" y1="32.5" x2="93" y2="32.5" stroke="#82e2ff77" strokeWidth="1.2" />
          <line x1="65" y1="51" x2="93" y2="32.5" stroke="#82e2ff77" strokeWidth="1.2" />
        </g>
        {/* Glow */}
        <ellipse cx="60" cy="32.5" rx="28" ry="16" fill="#b6aaff11" />
      </svg>
      <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 h-2 w-10 rounded-full bg-[#b6aaff22] blur-md" />
    </motion.div>
  );
}