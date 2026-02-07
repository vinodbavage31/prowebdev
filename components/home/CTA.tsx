'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="heading-lg text-white mb-6">
            Ready to Build Your Digital Presence?
          </h2>
          <p className="text-xl text-primary-100 mb-10 leading-relaxed">
            Join 10+ successful clients who transformed their business with a professional website. 
            Let's discuss your vision and create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-primary-700 px-10 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 inline-flex items-center space-x-2"
            >
              <span>Get Started Now</span>
              <HiArrowRight className="text-xl" />
            </Link>
            <Link
              href="/services"
              className="bg-primary-500 text-white border-2 border-white px-10 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center space-x-2">
              <HiCheckCircle className="text-2xl" />
              <span className="font-medium">No Hidden Costs</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiCheckCircle className="text-2xl" />
              <span className="font-medium">100% Ownership</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiCheckCircle className="text-2xl" />
              <span className="font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiCheckCircle className="text-2xl" />
              <span className="font-medium">Long-term Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
