'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
}

export default function GlassmorphicCard({ children, className = '' }: GlassmorphicCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {children}
    </motion.div>
  )
}
