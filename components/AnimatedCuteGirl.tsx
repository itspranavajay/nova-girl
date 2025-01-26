"use client"

import type React from "react"
import { motion } from "framer-motion"

const AnimatedCuteGirl: React.FC = () => {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Face */}
      <circle cx="100" cy="100" r="80" fill="#FFD1DC" />

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
        <circle cx="70" cy="80" r="10" fill="#000" />
        <circle cx="130" cy="80" r="10" fill="#000" />
        <circle cx="73" cy="77" r="3" fill="#FFF" />
        <circle cx="133" cy="77" r="3" fill="#FFF" />
      </motion.g>

      {/* Mouth */}
      <motion.path
        d="M 80 130 Q 100 150 120 130"
        stroke="#FF69B4"
        strokeWidth="4"
        fill="none"
        animate={{
          d: ["M 80 130 Q 100 150 120 130", "M 80 140 Q 100 160 120 140", "M 80 130 Q 100 150 120 130"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "easeInOut",
        }}
      />

      {/* Blush */}
      <circle cx="60" cy="110" r="10" fill="#FFB6C1" opacity="0.5" />
      <circle cx="140" cy="110" r="10" fill="#FFB6C1" opacity="0.5" />

      {/* Hair */}
      <motion.path
        d="M 30 80 C 30 30 170 30 170 80"
        fill="#8B4513"
        animate={{
          d: ["M 30 80 C 30 30 170 30 170 80", "M 30 85 C 30 35 170 35 170 85", "M 30 80 C 30 30 170 30 170 80"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 3,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  )
}

export default AnimatedCuteGirl

