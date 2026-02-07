'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiX, HiCheck, HiArrowRight, HiExternalLink, HiLightBulb, HiExclamation } from 'react-icons/hi'
import BackButton from '@/components/BackButton'

interface ServiceDetailProps {
  data: {
    title: string
    icon: string
    gradient: string
    whyMatters: {
      title: string
      problems: string[]
      importance: string
      withoutWebsite: string
    }
    features: {
      title: string
      items: Array<{
        category: string
        list: string[]
      }>
    }
    benefits: {
      title: string
      items: Array<{
        title: string
        description: string
      }>
    }
    examples: Array<{
      title: string
      url: string
      description: string
      highlights: string[]
    }>
    whoIsFor: string[]
    process: string[]
  }
}

export default function ServiceDetailLayout({ data }: ServiceDetailProps) {
  return (
    <>
      <BackButton />
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 bg-gradient-to-br ${data.gradient} text-white`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-7xl mb-6">{data.icon}</div>
            <h1 className="heading-xl mb-6">{data.title}</h1>
            <Link href="/contact" className="btn-secondary bg-white hover:bg-gray-50 inline-flex items-center space-x-2">
              <span>Get Started</span>
              <HiArrowRight className="text-xl" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-12 text-center">
              {data.whyMatters.title}
            </h2>

            {/* Problems */}
            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                <HiX className="mr-2" /> The Problems You Face
              </h3>
              <ul className="space-y-3">
                {data.whyMatters.problems.map((problem, index) => (
                  <li key={index} className="flex items-start text-dark-700">
                    <HiX className="text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Importance */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl mb-8 border border-primary-200">
              <h3 className="text-xl font-bold text-dark-900 mb-4 flex items-center">
                <HiLightBulb className="mr-2 text-primary-600" /> Why This Matters
              </h3>
              <p className="text-lg text-dark-700 leading-relaxed">{data.whyMatters.importance}</p>
            </div>

            {/* Without Website */}
            <div className="bg-dark-50 p-8 rounded-xl border border-dark-200">
              <h3 className="text-xl font-bold text-dark-900 mb-4 flex items-center">
                <HiExclamation className="mr-2 text-orange-600" /> Without a Website
              </h3>
              <p className="text-lg text-dark-700 leading-relaxed">{data.whyMatters.withoutWebsite}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding gradient-bg">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">{data.features.title}</h2>
            <p className="text-xl text-dark-600">Comprehensive features designed for your success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.items.map((featureGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-primary-600 mb-4">{featureGroup.category}</h3>
                <ul className="space-y-2">
                  {featureGroup.list.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-dark-700">
                      <HiCheck className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg">{data.benefits.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.benefits.items.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100"
              >
                <h3 className="text-lg font-bold text-dark-900 mb-3">{benefit.title}</h3>
                <p className="text-dark-700 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="section-padding gradient-bg">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">Real Examples</h2>
            <p className="text-xl text-dark-600">See the quality we deliver</p>
          </motion.div>

          <div className="space-y-6">
            {data.examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-dark-900">{example.title}</h3>
                  <a
                    href={example.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    <HiExternalLink className="text-2xl" />
                  </a>
                </div>
                <p className="text-dark-700 mb-4 leading-relaxed">{example.description}</p>
                <div className="flex flex-wrap gap-2">
                  {example.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <a
                  href={example.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary-600 font-semibold mt-4 hover:translate-x-1 transition-transform"
                >
                  <span>View Live Project</span>
                  <HiArrowRight className="text-xl" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is For */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg">Who This Is For</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.whoIsFor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-gradient-to-r from-primary-50 to-white p-4 rounded-lg border border-primary-100"
              >
                <HiCheck className="text-green-500 text-xl flex-shrink-0" />
                <span className="text-dark-800 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding gradient-bg">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg">How We'll Work Together</h2>
          </motion.div>

          <div className="space-y-4">
            {data.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-dark-800 text-lg pt-1">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Let's build a website that transforms your {data.title.toLowerCase().includes('portfolio') ? 'career' : 'business'}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-700 px-10 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-xl inline-flex items-center justify-center space-x-2">
                <span>Start Your Project</span>
                <HiArrowRight className="text-xl" />
              </Link>
              <Link href="/services" className="bg-primary-500 border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300 inline-flex items-center justify-center">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
