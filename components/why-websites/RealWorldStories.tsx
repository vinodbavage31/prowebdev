'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight, HiX, HiCheck } from 'react-icons/hi'

export default function RealWorldStories() {
  const stories = [
    {
      scenario: 'The Job Seeker',
      before: 'Sent 100+ resumes with minimal responses. Skills buried in bullet points.',
      after: 'Portfolio website with live projects. Interview rate increased 5x. Landed dream job.',
      lesson: 'Visual proof beats text descriptions every time.',
    },
    {
      scenario: 'The Small Business',
      before: 'Relied on word-of-mouth. Customers couldn\'t find hours or services online.',
      after: 'Website with SEO. Found in local searches. Lead generation doubled.',
      lesson: 'Online visibility = business growth.',
    },
    {
      scenario: 'The Content Creator',
      before: 'DMs from small brands. No way to showcase reach professionally.',
      after: 'Professional site with media kit. Premium brand partnerships increased.',
      lesson: 'Professional presence attracts professional opportunities.',
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
            Real-World <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            The difference a professional website makes in real scenarios
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl border border-primary-100 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary-700 mb-6">{story.scenario}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2 flex items-center">
                    <HiX className="mr-2" /> Before Website
                  </h4>
                  <p className="text-dark-700 bg-red-50 p-4 rounded-lg">{story.before}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2 flex items-center">
                    <HiCheck className="mr-2" /> After Website
                  </h4>
                  <p className="text-dark-700 bg-green-50 p-4 rounded-lg">{story.after}</p>
                </div>
              </div>

              <div className="bg-primary-100 p-4 rounded-lg">
                <p className="text-dark-800">
                  <strong className="text-primary-700">Lesson:</strong> {story.lesson}
                </p>
              </div>
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
          <h3 className="text-3xl font-bold text-dark-900 mb-6">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl text-dark-600 mb-8 max-w-3xl mx-auto">
            Stop losing opportunities to competitors with websites. Let's build yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Start Your Project</span>
              <HiArrowRight className="text-xl" />
            </Link>
            <Link href="/services" className="btn-secondary inline-flex items-center">
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
