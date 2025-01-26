"use client"

import type React from "react"
import { motion } from "framer-motion"

const AnimatedCuteCat: React.FC = () => {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Body */}
      <motion.ellipse
        cx="100"
        cy="120"
        rx="70"
        ry="60"
        fill="#808080"
        animate={{
          ry: [60, 58, 60],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "easeInOut",
        }}
      />

      {/* Head */}
      <circle cx="100" cy="70" r="50" fill="#808080" />

      {/* Ears */}
      <polygon points="60,40 80,70 40,70" fill="#808080" />
      <polygon points="140,40 160,70 120,70" fill="#808080" />

      {/* Eyes */}
      <motion.g
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <ellipse cx="80" cy="70" rx="8" ry="12" fill="#FFFFFF" />
        <ellipse cx="120" cy="70" rx="8" ry="12" fill="#FFFFFF" />
        <circle cx="80" cy="70" r="4" fill="#000000" />
        <circle cx="120" cy="70" r="4" fill="#000000" />
      </motion.g>

      {/* Nose */}
      <polygon points="95,85 100,90 105,85" fill="#FFC0CB" />

      {/* Mouth */}
      <motion.path
        d="M 90 95 Q 100 105 110 95"
        stroke="#000000"
        strokeWidth="2"
        fill="none"
        animate={{
          d: ["M 90 95 Q 100 105 110 95", "M 90 98 Q 100 108 110 98", "M 90 95 Q 100 105 110 95"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "easeInOut",
        }}
      />

      {/* Whiskers */}
      <line x1="50" y1="90" x2="80" y2="85" stroke="#000000" strokeWidth="1" />
      <line x1="50" y1="100" x2="80" y2="95" stroke="#000000" strokeWidth="1" />
      <line x1="150" y1="90" x2="120" y2="85" stroke="#000000" strokeWidth="1" />
      <line x1="150" y1="100" x2="120" y2="95" stroke="#000000" strokeWidth="1" />
    </motion.svg>
  )
}

export default AnimatedCuteCat

