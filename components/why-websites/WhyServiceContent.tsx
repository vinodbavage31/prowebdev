'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import AnimatedCard from '@/components/AnimatedCard'

interface WhyServiceContentProps {
  data: {
    reasons: Array<{
      title: string
      description: string
      impact: string
    }>
    examples: Array<{
      scenario: string
      problem: string
      solution: string
      result: string
    }>
    cta: string
  }
}

export default function WhyServiceContent({ data }: WhyServiceContentProps) {
  return (
    <>
      {/* Main Reasons */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-6">
              Why It <span className="text-gradient">Matters</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {data.reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AnimatedCard className="h-full bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl border border-primary-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-4">
                    <HiCheckCircle className="text-3xl text-green-500 flex-shrink-0 mr-3 mt-1" />
                    <h3 className="text-xl font-bold text-dark-900">{reason.title}</h3>
                  </div>
                  <p className="text-dark-700 mb-4 leading-relaxed">{reason.description}</p>
                  <div className="bg-primary-100 p-4 rounded-xl">
                    <p className="text-sm font-semibold text-primary-800">
                      <HiArrowRight className="inline mr-2" />
                      {reason.impact}
                    </p>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-6">
              Real <span className="text-gradient">Success Stories</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {data.examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <AnimatedCard className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-dark-900 mb-6">{example.scenario}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-red-700 mb-1">Before:</p>
                        <p className="text-dark-700">{example.problem}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-blue-700 mb-1">Solution:</p>
                        <p className="text-dark-700">{example.solution}</p>
                      </div>
                    </div>

                    <div className="flex items-start bg-green-50 p-4 rounded-xl">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-green-700 mb-1">Result:</p>
                        <p className="text-dark-800 font-medium">{example.result}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary-600 to-primary-800 text-white p-12 md:p-16 rounded-2xl shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{data.cta}</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="bg-white text-primary-700 px-10 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-xl inline-flex items-center space-x-2"
                >
                  <span>Get Started Now</span>
                  <HiArrowRight className="text-xl" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="bg-primary-500 border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300 inline-flex items-center"
                >
                  View Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
