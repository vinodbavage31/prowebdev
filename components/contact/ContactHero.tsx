'use client'

import { motion } from 'framer-motion'

export default function ContactHero() {
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
            Let's Build Something <span className="text-gradient">Amazing Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-600 leading-relaxed">
            Tell us about your vision. We'll show you how we can bring it to life with a professional website that drives real results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
