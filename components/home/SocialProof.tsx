'use client'

import { motion } from 'framer-motion'
import { HiStar, HiTrendingUp, HiCheckCircle } from 'react-icons/hi'

export default function SocialProof() {
  const testimonials = [
    {
      quote: "I sent 200+ applications with my resume alone. After building my portfolio website, I got 10 interviews in 2 months. The website made all the difference.",
      author: "Software Developer",
      result: "Landed $85k job",
      type: "Portfolio Website",
    },
    {
      quote: "We were losing customers to competitors who looked more professional online. Our website doubled our leads in 3 months.",
      author: "Local Service Business",
      result: "Revenue up 40%",
      type: "Business Website",
    },
    {
      quote: "Brands used to ghost me. Now with my creator website, I get 3x more sponsorship inquiries and can charge higher rates.",
      author: "Content Creator",
      result: "Tripled brand deals",
      type: "Creator Website",
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
            Real Results from <span className="text-gradient">Real Clients</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            These aren't made-up stories. These are actual results from clients who took the leap.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100 hover:shadow-xl transition-shadow"
            >
              {/* Star Rating */}
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <HiStar key={star} className="text-yellow-400 text-xl" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-dark-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author & Result */}
              <div className="border-t border-dark-200 pt-4">
                <p className="font-semibold text-dark-900 mb-1">{testimonial.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-600">{testimonial.type}</span>
                  <div className="bg-green-100 px-3 py-1 rounded-full">
                    <span className="text-green-700 font-semibold text-xs">{testimonial.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-primary-100 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-dark-900 text-center mb-8">
            Average Client Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <HiTrendingUp className="text-4xl text-green-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-dark-900 mb-2">2-5x</p>
              <p className="text-dark-600">More opportunities</p>
            </div>
            <div className="text-center">
              <HiCheckCircle className="text-4xl text-blue-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-dark-900 mb-2">100%</p>
              <p className="text-dark-600">Client satisfaction</p>
            </div>
            <div className="text-center">
              <HiStar className="text-4xl text-yellow-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-dark-900 mb-2">30-90</p>
              <p className="text-dark-600">Days to see results</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
