'use client'

import { motion } from 'framer-motion'
import { HiX, HiCheck } from 'react-icons/hi'

export default function StandOut() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">
            Standing Out From <span className="text-gradient">The Competition</span>
          </h2>
          <p className="text-xl text-dark-600">
            In crowded markets, a professional website is your competitive edge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Without Website */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-red-50 border-2 border-red-200 rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <HiX className="text-4xl text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-red-800">Without a Website</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Lost in a sea of identical LinkedIn profiles',
                'Competing purely on price, not value',
                'Can\'t showcase work in a memorable way',
                'Appear less professional than competitors',
                'Miss opportunities from Google searches',
                'Rely entirely on word-of-mouth',
              ].map((item, index) => (
                <li key={index} className="flex items-start text-dark-700">
                  <HiX className="text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With Website */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-green-50 border-2 border-green-200 rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <HiCheck className="text-4xl text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-green-800">With a Website</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Stand out with unique personal branding',
                'Compete on expertise and quality',
                'Showcase work in beautiful detail',
                'Look as professional as Fortune 500s',
                'Get discovered by ideal clients/employers',
                'Benefit from referrals AND search traffic',
              ].map((item, index) => (
                <li key={index} className="flex items-start text-dark-700">
                  <HiCheck className="text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-200"
        >
          <p className="text-lg text-dark-800 text-center leading-relaxed">
            <strong className="text-primary-700">The Reality:</strong> When two candidates have similar skills, 
            the one with a professional portfolio website gets the job. When two businesses offer similar services, 
            the one with a credible website wins the client. It's that simple.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
