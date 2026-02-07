'use client'

import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi'

export default function BusinessGrowth() {
  const growthBenefits = [
    {
      category: 'Career Growth',
      benefits: [
        'Land better job opportunities with portfolio proof',
        'Get discovered by recruiters searching online',
        'Stand out in competitive application processes',
        'Build personal brand and industry authority',
        'Network with peers who find you through search',
      ],
    },
    {
      category: 'Business Growth',
      benefits: [
        'Generate leads while you sleep (24/7 marketing)',
        'Reach customers beyond local word-of-mouth',
        'Reduce customer service with FAQ pages',
        'Build email lists for direct marketing',
        'Establish credibility that justifies premium pricing',
      ],
    },
    {
      category: 'Creator Growth',
      benefits: [
        'Attract brand partnerships with professional presence',
        'Own your audience (not platform-dependent)',
        'Showcase analytics and reach to sponsors',
        'Diversify income with products/courses',
        'Build sustainable creator business',
      ],
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
            Real <span className="text-gradient">Growth Impact</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            How websites drive tangible career and business results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {growthBenefits.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-6 text-center">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-dark-700">
                    <HiCheck className="text-green-500 mr-3 text-lg flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-primary-600 to-primary-800 text-white p-12 rounded-2xl shadow-2xl text-center"
        >
          <h3 className="text-3xl font-bold mb-6">The Bottom Line</h3>
          <p className="text-xl text-primary-100 leading-relaxed">
            Whether you're looking for your next job, growing a business, or building a creator brand—
            a professional website isn't optional anymore. It's the foundation of modern success.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
