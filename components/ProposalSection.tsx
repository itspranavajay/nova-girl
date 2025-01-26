"use client"

import { motion } from "framer-motion"
import confetti from "canvas-confetti"

const ProposalSection = () => {
  const handleYesClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }

  return (
    <section className="text-center py-20">
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-8 text-pink-600 font-dancing"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Nova, you are my everything
      </motion.h2>
      <motion.p
        className="text-xl md:text-2xl text-purple-700 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Will you make my life complete by saying yes?
      </motion.p>
      <motion.button
        className="bg-pink-500 text-white px-8 py-4 rounded-full text-2xl font-bold shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleYesClick}
      >
        Yes!
      </motion.button>
    </section>
  )
}

export default ProposalSection

