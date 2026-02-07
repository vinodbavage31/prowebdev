'use client'

import { motion } from 'framer-motion'

export default function WhyWebsitesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="heading-xl mb-6">
            Why Websites <span className="text-primary-200">Actually Matter</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 leading-relaxed">
            In a world where everyone Googles before buying, hiring, or partnering—
            your website is often the first impression. And first impressions are everything.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
