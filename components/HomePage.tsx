"use client"

import { motion } from "framer-motion"
import AnimatedCuteCat from "./AnimatedCuteCat"
import React from "react"

const HomePage = () => {
  return (
    <section className="text-center py-20 relative overflow-hidden">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-8 text-pink-500 font-dancing"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Nova, my world feels brighter because of you
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-purple-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        You're the spark that lights up my heart
      </motion.p>
      <FloatingHearts />
      <div className="flex justify-center mt-12">
        <AnimatedCuteCat />
      </div>
    </section>
  )
}

const FloatingHearts = () => {
  const [hearts, setHearts] = React.useState<Array<{ x: number; y: number }>>([])

  React.useEffect(() => {
    setHearts(
      Array.from({ length: 20 }, () => ({
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
        y: (typeof window !== "undefined" ? window.innerHeight : 1000) + 100,
      })),
    )
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          initial={{ x: heart.x, y: heart.y }}
          animate={{
            y: -100,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 10,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}

export default HomePage

