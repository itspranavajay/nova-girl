"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const poem = [
  "Every beat of my heart whispers your name,",
  "In your smile, I find the world's brightest flame.",
  "With you, every moment feels like a dream,",
  "Our love, an ever-flowing stream.",
  "Nova, you're the star that guides my way,",
  "The reason I look forward to each new day.",
]

const PoetrySection = () => {
  return (
    <section className="py-20 max-w-2xl mx-auto">
      {poem.map((line, index) => (
        <PoemLine key={index} line={line} index={index} />
      ))}
    </section>
  )
}

const PoemLine = ({ line, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.p
      ref={ref}
      className="text-lg md:text-xl text-purple-800 mb-4 font-dancing"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {line}
    </motion.p>
  )
}

export default PoetrySection

