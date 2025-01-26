"use client"

import { useState, useEffect } from "react"
import { useAudio } from "react-use"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"

const BackgroundMusic = () => {
  const [audio, state, controls] = useAudio({
    src: "/music/love-song.mp3",
    autoPlay: true,
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {audio}
      <motion.button
        className="fixed bottom-4 right-4 bg-white rounded-full p-3 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={state.playing ? controls.pause : controls.play}
      >
        {state.playing ? <Pause size={24} /> : <Play size={24} />}
      </motion.button>
    </>
  )
}

export default BackgroundMusic

