'use client'

import { motion } from 'framer-motion'
import { HiDesktopComputer, HiDatabase, HiSearch, HiChip } from 'react-icons/hi'
import SimpleCard from '@/components/SimpleCard'

export default function WhatWeDo() {
  const services = [
    {
      icon: HiDesktopComputer,
      title: 'Web Design',
      description: 'Clean, modern, and professional UI that makes your brand stand out. Premium aesthetics with perfect user experience.',
    },
    {
      icon: HiDatabase,
      title: 'Backend & Databases',
      description: 'Powerful systems that scale. From simple contact forms to complex management systems with authentication.',
    },
    {
      icon: HiSearch,
      title: 'SEO & Hosting',
      description: 'Get found on Google. Fast loading speeds, optimized for search engines, and reliable hosting solutions.',
    },
    {
      icon: HiChip,
      title: 'Scalable Systems',
      description: 'Build once, scale forever. We create systems that grow with your business, not against it.',
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
            What We <span className="text-gradient">Do</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
            We don't just design websites — we build digital systems and online identities that drive real business results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <SimpleCard key={index} delay={index * 0.1} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100 h-full">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl mb-6">
                <service.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">{service.title}</h3>
              <p className="text-dark-600 leading-relaxed">{service.description}</p>
            </SimpleCard>
          ))}
        </div>
      </div>
    </section>
  )
}
