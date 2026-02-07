'use client'

import { motion } from 'framer-motion'

export default function ProcessHero() {
  return (
    <section className="relative pt-32 pb-20 gradient-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="heading-xl mb-6">
            How We <span className="text-gradient">Work Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-600 leading-relaxed">
            A transparent, collaborative process that turns your vision into a professional website. 
            No jargon, no surprises—just clear steps from start to success.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
