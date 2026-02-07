'use client'

import { motion } from 'framer-motion'

export default function DigitalProof() {
  const proofPoints = [
    {
      stat: '75%',
      label: 'of users judge credibility based on website design',
      insight: 'Your website is your proof of professionalism',
    },
    {
      stat: '81%',
      label: 'of consumers research online before purchasing',
      insight: 'No website = invisible to most customers',
    },
    {
      stat: '6 seconds',
      label: 'average time recruiters spend on resumes',
      insight: 'A portfolio website gives you minutes, not seconds',
    },
    {
      stat: '24/7',
      label: 'your website works when you sleep',
      insight: 'Passive lead generation and career opportunities',
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
            Digital Proof <span className="text-gradient">That Works</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            The numbers don't lie—websites are essential for modern success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {proofPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl font-bold text-gradient mb-4">{point.stat}</div>
              <p className="text-dark-700 font-semibold mb-3">{point.label}</p>
              <p className="text-sm text-dark-600">{point.insight}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-2xl p-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-dark-900 mb-6 text-center">
            Your Website Is Your Digital Proof
          </h3>
          <div className="space-y-6 text-lg text-dark-700 leading-relaxed">
            <p>
              <strong>For Job Seekers:</strong> A resume says "I can do this." A portfolio website proves it. 
              Show actual projects, live demos, and tangible results. Recruiters spend minutes exploring portfolios 
              versus seconds scanning resumes.
            </p>
            <p>
              <strong>For Businesses:</strong> Your website is open 24/7, answering questions, showcasing work, 
              and generating leads while you focus on operations. It's your best salesperson who never sleeps.
            </p>
            <p>
              <strong>For Creators:</strong> Platforms come and go. Algorithms change. But your website? 
              That's yours forever. It's the central hub where brands find you, fans discover you, and you control the narrative.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
