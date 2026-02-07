'use client'

import { motion } from 'framer-motion'
import { HiCheckCircle, HiUserGroup, HiCode, HiTrendingUp } from 'react-icons/hi'
import SimpleCard from '@/components/SimpleCard'

export default function TrustIndicators() {
  const indicators = [
    {
      icon: HiCheckCircle,
      number: '10+',
      label: 'Projects Delivered',
      description: 'Successfully launched and live',
    },
    {
      icon: HiUserGroup,
      number: '100%',
      label: 'Client Satisfaction',
      description: 'Real results, happy clients',
    },
    {
      icon: HiCode,
      number: '8+',
      label: 'Service Types',
      description: 'Specialized solutions',
    },
    {
      icon: HiTrendingUp,
      number: '24/7',
      label: 'Support Available',
      description: 'Long-term partnership',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item, index) => (
            <SimpleCard key={index} delay={index * 0.1} className="text-center p-8 rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full mb-4">
                <item.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-4xl font-bold text-dark-900 mb-2">{item.number}</h3>
              <p className="text-lg font-semibold text-dark-700 mb-1">{item.label}</p>
              <p className="text-sm text-dark-500">{item.description}</p>
            </SimpleCard>
          ))}
        </div>

        {/* Live Project Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-dark-800 mb-6">Real Projects, Real Results</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Portfolio Websites',
              'Content Creator Sites',
              'School Management Systems',
              'Gym & Fitness Sites',
              'Business Websites',
              'ML Project Frontends',
              'Agency Websites',
              'Personal Brands',
            ].map((category, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white border-2 border-primary-200 text-dark-700 rounded-full font-medium hover:bg-primary-50 hover:border-primary-400 transition-colors duration-300"
              >
                {category}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
