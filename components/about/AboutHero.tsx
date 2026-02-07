'use client'

import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white via-primary-50 to-purple-50">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="heading-xl mb-6">
            We Build More Than Websites — We Build{' '}
            <span className="text-gradient">Digital Futures</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-600 leading-relaxed">
            This isn't just a business. It's a mission to help people stand out, 
            businesses grow, and ideas come to life through powerful digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
