'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiStar, HiUserGroup, HiLightBulb, HiTrendingUp } from 'react-icons/hi'

export default function OurMindset() {
  const mindsetPrinciples = [
    {
      number: '01',
      title: 'Understand Your Vision',
      description: 'We don\'t start with templates. We start with conversations. What are your goals? Who is your audience? What problem are we solving together?',
    },
    {
      number: '02',
      title: 'Build With Purpose',
      description: 'Every design choice, every feature, every line of code serves a purpose. We build what you need, not what looks fancy on a demo.',
    },
    {
      number: '03',
      title: 'Scale With You',
      description: 'Today you need a simple website. Tomorrow you might need user accounts, payments, or complex features. We build systems that can grow.',
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
            Our <span className="text-gradient">Mindset</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
            How we approach every project, every client, every challenge.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {mindsetPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-6"
            >
              <div className="flex-shrink-0">
                <span className="text-6xl font-bold text-gradient">{principle.number}</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dark-900 mb-3">{principle.title}</h3>
                <p className="text-lg text-dark-600 leading-relaxed">{principle.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 shadow-xl max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-dark-900 text-center mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { Icon: HiStar, value: 'Quality Over Quantity', desc: 'We focus on delivering exceptional work, not churning out projects.' },
              { Icon: HiUserGroup, value: 'Partnership Mindset', desc: 'Your success is our success. We\'re invested in your long-term growth.' },
              { Icon: HiLightBulb, value: 'Honest Communication', desc: 'No jargon, no BS. Clear, transparent communication at every step.' },
              { Icon: HiTrendingUp, value: 'Continuous Innovation', desc: 'We stay ahead of trends to keep your website modern and competitive.' },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.Icon className="text-2xl text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark-800 mb-2">{item.value}</h4>
                  <p className="text-dark-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-dark-700 mb-6">
            Ready to work with a team that truly cares about your success?
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Let's Build Together</span>
            <HiArrowRight className="text-xl" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
