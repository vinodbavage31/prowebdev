'use client'

import { ReactNode } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
}

// Simplified version - removed parallax for performance
// Can be re-enabled if needed on faster devices
export default function ParallaxSection({ children, speed = 0.5 }: ParallaxSectionProps) {
  return <div>{children}</div>
}
