'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { HiArrowLeft } from 'react-icons/hi'

export default function BackButton() {
  const router = useRouter()

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, x: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => router.back()}
      className="fixed top-24 left-4 z-40 bg-white hover:bg-primary-50 text-primary-700 px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-200 flex items-center space-x-2 group"
    >
      <HiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform duration-300" />
      <span className="font-semibold hidden sm:inline">Back</span>
    </motion.button>
  )
}
