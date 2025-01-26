"use client"

import { useCallback } from "react"

const Footer = () => {
  const handleRestart = useCallback(() => {
    window.location.reload()
  }, [])

  return (
    <footer className="text-center py-8">
      <p className="text-purple-700 mb-4">Nova, this website is made with love just for you ❤️</p>
      <button
        onClick={handleRestart}
        className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-pink-600 transition-colors"
      >
        Restart
      </button>
    </footer>
  )
}

export default Footer

