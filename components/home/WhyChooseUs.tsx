'use client'

import { motion } from 'framer-motion'
import { HiStar, HiBriefcase, HiKey, HiCurrencyDollar, HiSupport } from 'react-icons/hi'
import SimpleCard from '@/components/SimpleCard'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: HiStar,
      title: 'Professional Quality',
      description: 'Enterprise-grade design and development. Every website is built to impress clients and stakeholders.',
    },
    {
      icon: HiBriefcase,
      title: 'Real Experience',
      description: '10+ delivered projects across portfolios, businesses, schools, and agencies. We know what works.',
    },
    {
      icon: HiKey,
      title: 'Full Ownership',
      description: 'You own 100% of your code, design, and data. No vendor lock-in, complete control of your digital asset.',
    },
    {
      icon: HiCurrencyDollar,
      title: 'Budget Friendly',
      description: 'Premium quality without premium prices. Transparent pricing, no hidden costs, incredible value.',
    },
    {
      icon: HiSupport,
      title: 'Long-term Support',
      description: "We don't disappear after launch. Ongoing support, updates, and scaling as your business grows.",
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
            Why Choose <span className="text-gradient">Us</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
            We're not just developers. We're your digital growth partners, committed to your long-term success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <SimpleCard key={index} delay={index * 0.1} className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl border border-primary-100 hover:shadow-xl transition-all duration-300 h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md mb-6">
                <reason.icon className="text-4xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-3">{reason.title}</h3>
              <p className="text-dark-600 leading-relaxed">{reason.description}</p>
            </SimpleCard>
          ))}
        </div>
      </div>
    </section>
  )
}
