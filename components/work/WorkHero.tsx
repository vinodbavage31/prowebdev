'use client'

import { motion } from 'framer-motion'

export default function WorkHero() {
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
            Our <span className="text-gradient">Work</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-600 leading-relaxed">
            Real websites, live on the internet. See the quality and craftsmanship we deliver to every client.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
