'use client'

import { motion } from 'framer-motion'
import { HiShieldCheck, HiTrendingUp, HiGlobe, HiStar } from 'react-icons/hi'

export default function TrustCredibility() {
  const trustFactors = [
    {
      icon: HiShieldCheck,
      title: 'Professional Credibility',
      description: 'A custom domain and professional website signal legitimacy. Businesses and individuals with websites are perceived as more trustworthy and established than those without.',
    },
    {
      icon: HiGlobe,
      title: '24/7 Online Presence',
      description: 'Your website never closes. Customers, clients, and recruiters can learn about you anytime, anywhere, without waiting for business hours or responses.',
    },
    {
      icon: HiStar,
      title: 'Control Your Narrative',
      description: 'Unlike social media platforms, your website is 100% yours. You control the message, the branding, and how people perceive you.',
    },
    {
      icon: HiTrendingUp,
      title: 'Competitive Advantage',
      description: 'In markets where many competitors lack websites, having one instantly puts you ahead. In markets where websites are standard, not having one leaves you behind.',
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
            Trust & <span className="text-gradient">Credibility</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Why professional websites build trust faster than any other medium
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl border border-primary-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-6">
                <factor.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">{factor.title}</h3>
              <p className="text-dark-700 leading-relaxed">{factor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
