'use client'

import { motion } from 'framer-motion'
import { HiUserGroup, HiAcademicCap, HiStar, HiBriefcase, HiX, HiLightningBolt } from 'react-icons/hi'

export default function ProblemsSolved() {
  const problems = [
    {
      icon: HiUserGroup,
      problem: 'People don\'t know how to present their work',
      solution: 'We create stunning portfolio websites that make professionals stand out in job searches and client pitches.',
      impact: 'Better opportunities, higher credibility, more confidence',
    },
    {
      icon: HiAcademicCap,
      problem: 'Schools lack modern digital systems',
      solution: 'We build complete school management platforms with databases, admin panels, and parent communication.',
      impact: 'Efficient operations, better communication, digital transformation',
    },
    {
      icon: HiStar,
      problem: 'Creators struggle to attract brands',
      solution: 'We develop professional creator websites that showcase work, stats, and brand partnership opportunities.',
      impact: 'More sponsorships, professional image, business growth',
    },
    {
      icon: HiBriefcase,
      problem: 'Businesses lose trust without websites',
      solution: 'We craft business websites that establish credibility, showcase services, and generate leads 24/7.',
      impact: 'Increased trust, more customers, competitive advantage',
    },
  ]

  return (
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
            Problems We <span className="text-gradient">Solve</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
            We saw these challenges everywhere. So we built solutions that actually work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl mb-6">
                <item.icon className="text-3xl text-white" />
              </div>

              {/* Problem */}
              <div className="mb-6">
                <div className="flex items-start space-x-3 mb-3">
                  <HiX className="text-red-500 text-xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">
                      The Problem
                    </h4>
                    <p className="text-lg font-semibold text-dark-800">{item.problem}</p>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="mb-6 pl-8 border-l-4 border-primary-200">
                <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
                  Our Solution
                </h4>
                <p className="text-dark-700 leading-relaxed">{item.solution}</p>
              </div>

              {/* Impact */}
              <div className="bg-gradient-to-br from-primary-50 to-white p-4 rounded-xl">
                <h4 className="text-sm font-semibold text-dark-800 mb-2 flex items-center">
                  <HiLightningBolt className="mr-2 text-primary-600" /> Real Impact
                </h4>
                <p className="text-dark-600">{item.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
