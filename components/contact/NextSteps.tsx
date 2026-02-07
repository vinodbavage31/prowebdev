'use client'

import { motion } from 'framer-motion'

export default function NextSteps() {
  const steps = [
    {
      number: '1',
      title: 'Tell Us Your Idea',
      description: 'Share your vision, goals, and any specific requirements through our contact form or preferred method.',
    },
    {
      number: '2',
      title: 'We Analyze & Discuss',
      description: 'We review your needs, research your industry, and schedule a consultation to discuss the best approach.',
    },
    {
      number: '3',
      title: 'We Build Your Website',
      description: 'Once we agree on scope and timeline, we get to work creating your professional website with regular updates.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">What Happens Next?</h2>
          <p className="text-xl text-primary-100">
            Simple, transparent process from first contact to launch
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-primary-700 rounded-full text-2xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-primary-100 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-primary-100">
            Ready to start? We're excited to hear about your project! 👋
          </p>
        </motion.div>
      </div>
    </section>
  )
}
