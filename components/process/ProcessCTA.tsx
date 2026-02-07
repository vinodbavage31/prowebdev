'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

export default function ProcessCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-primary-600 to-primary-800 text-white p-12 md:p-16 rounded-2xl shadow-2xl"
        >
          <h2 className="heading-lg mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-primary-100 leading-relaxed">
            Let's have a conversation about your vision. No pressure, no commitments—
            just an honest discussion about how we can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-700 px-10 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <span>Get Started Now</span>
              <HiArrowRight className="text-xl" />
            </Link>
            <Link
              href="/services"
              className="bg-primary-500 border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300 inline-flex items-center justify-center"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
