import React from "react";
import { motion } from 'framer-motion';

export default function CodeSnippet() {
  return (
    <motion.div
      className="relative bg-gradient-to-tr from-[#0d173a] via-[#1b2860] to-[#232e5d] rounded-xl p-5 shadow-2xl ring-1 ring-white/10 backdrop-blur-md"
      whileHover={{ scale: 1.04, boxShadow: '0 0 36px #b6aaff44' }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="text-xs text-[#b6aaff] font-mono mb-1">src/skills.ts</div>
      <pre className="text-white text-sm font-mono leading-snug select-none">
        <span className="text-[#82e2ff]">const</span> <span className="text-[#b6aaff]">skills</span> = [<br />
        &nbsp;&nbsp;<span className="text-[#fff]">"React"</span>,<br />
        &nbsp;&nbsp;<span className="text-[#fff]">"TypeScript"</span>,<br />
        &nbsp;&nbsp;<span className="text-[#fff]">"Framer Motion"</span>,<br />
        &nbsp;&nbsp;<span className="text-[#fff]">"Tailwind CSS"</span><br />
        ];
      </pre>
      <div className="absolute -top-3 right-4 h-2 w-2 rounded-full bg-[#82e2ff] blur-sm animate-pulse" />
    </motion.div>
  );
}