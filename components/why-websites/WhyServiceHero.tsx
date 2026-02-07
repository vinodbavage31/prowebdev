'use client'

import { motion } from 'framer-motion'
import { HiBriefcase, HiOfficeBuilding, HiVideoCamera, HiStar } from 'react-icons/hi'

const iconMap: Record<string, any> = {
  briefcase: HiBriefcase,
  office: HiOfficeBuilding,
  video: HiVideoCamera,
  star: HiStar,
}

interface WhyServiceHeroProps {
  data: {
    title: string
    category: string
    icon: string
    gradient: string
  }
}

export default function WhyServiceHero({ data }: WhyServiceHeroProps) {
  const Icon = iconMap[data.icon] || HiBriefcase

  return (
    <section className={`relative pt-32 pb-20 bg-gradient-to-br ${data.gradient} text-white overflow-hidden`}>
      {/* Animated mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl mb-6"
          >
            <Icon className="text-6xl text-white" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6"
          >
            <span className="text-sm font-semibold uppercase tracking-wide">{data.category}</span>
          </motion.div>

          <h1 className="heading-xl mb-6">{data.title}</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Real reasons why your success depends on having a professional online presence
          </p>
        </motion.div>
      </div>
    </section>
  )
}
