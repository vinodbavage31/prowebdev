'use client'

import { motion } from 'framer-motion'
import { HiX, HiCheckCircle } from 'react-icons/hi'
import SimpleCard from '@/components/SimpleCard'

export default function ProblemSolution() {
  const scenarios = [
    {
      persona: 'Job Seeker',
      problem: 'Your resume gets lost in hundreds of applications. Recruiters can\'t see your actual work.',
      solution: 'A portfolio website showcases your projects with live demos. You stand out immediately.',
      stat: '5x higher interview rate with portfolios',
    },
    {
      persona: 'Business Owner',
      problem: 'Customers Google you and find nothing. They choose competitors with websites instead.',
      solution: 'A professional website builds trust and generates leads 24/7 while you focus on operations.',
      stat: '81% of customers research online first',
    },
    {
      persona: 'Content Creator',
      problem: 'Brands ask for your media kit. You scramble to create a PDF and email it.',
      solution: 'Your creator website showcases stats, work, and brand deals in one professional hub.',
      stat: 'Triple your sponsorship inquiries',
    },
  ]

  return (
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
            The Problem You're <span className="text-gradient">Facing Right Now</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            We know exactly what's frustrating you—because we've helped hundreds solve these exact problems
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {scenarios.map((scenario, index) => (
            <SimpleCard key={index} delay={index * 0.1} className="bg-gradient-to-br from-red-50 to-green-50 rounded-2xl p-8 md:p-10 shadow-lg border-2 border-dark-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Problem */}
                <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                  <div className="flex items-center mb-4">
                    <HiX className="text-3xl text-red-600 mr-3" />
                    <div>
                      <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">The Problem</span>
                      <h3 className="text-xl font-bold text-dark-900">{scenario.persona}</h3>
                    </div>
                  </div>
                  <p className="text-dark-700 leading-relaxed">{scenario.problem}</p>
                </div>

                {/* Solution */}
                <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <HiCheckCircle className="text-3xl text-green-600 mr-3" />
                    <div>
                      <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">Our Solution</span>
                      <h3 className="text-xl font-bold text-dark-900">How We Fix It</h3>
                    </div>
                  </div>
                  <p className="text-dark-700 leading-relaxed mb-4">{scenario.solution}</p>
                  <div className="bg-green-100 px-4 py-2 rounded-lg inline-block">
                    <span className="text-green-800 font-semibold text-sm">{scenario.stat}</span>
                  </div>
                </div>
              </div>
            </SimpleCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-3xl mx-auto bg-primary-600 text-white p-8 rounded-2xl shadow-xl"
        >
          <p className="text-xl leading-relaxed">
            <strong>Sound familiar?</strong> You're not alone. These are the exact problems our clients faced before getting a professional website.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
