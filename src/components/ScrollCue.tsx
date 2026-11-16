import React from "react";
import { motion } from 'framer-motion'

export default function ScrollCue() {
  return (
    <motion.div
      className="absolute left-1/2 bottom-12 -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
    >
      <span className="text-white/60 mb-1 text-sm">Scroll</span>
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="w-7 h-7 flex items-center justify-center"
      >
        <svg width="24" height="24" fill="none">
          <path d="M12 6v12m0 0l-6-6m6 6l6-6" stroke="#b6aaff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </motion.div>
  )
}