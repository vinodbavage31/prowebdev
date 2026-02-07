'use client'

import { motion } from 'framer-motion'
import { HiTrendingUp, HiGlobe, HiShieldCheck } from 'react-icons/hi'

export default function OurMission() {
  const missions = [
    {
      icon: HiGlobe,
      title: 'Build Strong Digital Presence',
      description: 'Help people and businesses establish credible, professional online identities that open doors and create opportunities.',
    },
    {
      icon: HiTrendingUp,
      title: 'Drive Real Growth',
      description: 'Create websites that don\'t just look good, but actually drive business results, career advancement, and measurable success.',
    },
    {
      icon: HiShieldCheck,
      title: 'Deliver Long-term Value',
      description: 'Build scalable, maintainable systems that grow with our clients, providing value for years, not just months.',
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
            Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
            We exist to help people and businesses build strong digital presence that drives real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl mb-6">
                <mission.icon className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">{mission.title}</h3>
              <p className="text-dark-600 leading-relaxed">{mission.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-12 rounded-2xl shadow-2xl text-center">
            <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
              "We don't just build websites. We build digital systems and online identities that transform how people present themselves and how businesses grow."
            </p>
            <p className="text-primary-100 text-lg">
              — Our Commitment to Every Client
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
