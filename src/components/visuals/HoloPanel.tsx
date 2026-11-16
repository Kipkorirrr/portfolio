import React from "react";
import { motion } from "framer-motion";

export default function HoloPanel() {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-[#1e2251]/80 to-[#6a8fdc22] border border-[#b6aaff44] rounded-xl p-5 shadow-lg backdrop-blur-2xl"
      whileHover={{ scale: 1.05, boxShadow: "0 0 60px #82e2ff44" }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="text-xs text-[#82e2ff]/90 mb-2 font-bold tracking-widest uppercase">
        HOLOGRAPHIC UI
      </div>
      <svg viewBox="0 0 120 65" width="100%" fill="none">
        <defs>
          <radialGradient id="holoGrad" cx="50%" cy="50%" r="85%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#b6aaffcc" />
            <stop offset="100%" stopColor="#232e5d00" />
          </radialGradient>
        </defs>
        <rect x="5" y="10" width="110" height="40" rx="10" fill="url(#holoGrad)" stroke="#82e2ff77" strokeWidth="1.8" />
        <g>
          <rect x="15" y="18" width="20" height="8" rx="2" fill="#82e2ff44" />
          <rect x="42" y="18" width="36" height="8" rx="2" fill="#82e2ff22" />
          <rect x="82" y="18" width="18" height="8" rx="2" fill="#b6aaff44" />
          <rect x="15" y="32" width="85" height="5" rx="2.5" fill="#fff2" />
        </g>
      </svg>
      <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 h-2 w-16 rounded-full bg-[#b6aaff33] blur-xl" />
    </motion.div>
  );
}