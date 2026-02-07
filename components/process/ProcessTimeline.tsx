'use client'

import { motion } from 'framer-motion'

export default function ProcessTimeline() {
  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">Typical Timeline</h2>
          <p className="text-xl text-dark-600">
            Every project is unique, but here's a general timeframe for our process
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="space-y-8">
            {[
              { phase: 'Onboarding & Planning', duration: '1-2 weeks', details: 'Discovery, requirements, and design phase' },
              { phase: 'Development', duration: '2-4 weeks', details: 'Building your website with regular updates' },
              { phase: 'Testing & Refinement', duration: '1 week', details: 'Quality assurance and final adjustments' },
              { phase: 'Launch', duration: '2-3 days', details: 'Deployment, training, and go-live' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 pb-8 border-b border-dark-200 last:border-0"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary-600">{item.duration}</span>
                </div>
                <div className="flex-shrink-0 w-3 h-3 bg-primary-600 rounded-full"></div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-dark-900 mb-2">{item.phase}</h4>
                  <p className="text-dark-600">{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary-50 rounded-xl">
            <p className="text-dark-800 text-center">
              <strong>Total Average:</strong> 4-7 weeks from start to launch. Complex projects may take longer, 
              simple sites can be faster. We'll give you a clear timeline during onboarding.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
