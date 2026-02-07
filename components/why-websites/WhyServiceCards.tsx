'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiBriefcase, HiOfficeBuilding, HiVideoCamera, HiStar, HiArrowRight } from 'react-icons/hi'
import AnimatedCard from '@/components/AnimatedCard'

export default function WhyServiceCards() {
  const services = [
    {
      title: 'Job Seekers',
      slug: 'job-seekers',
      description: 'Stand out from 250+ applicants with a portfolio that proves your skills',
      icon: HiBriefcase,
      gradient: 'from-blue-500 to-blue-700',
      stats: '5x higher interview rate',
      features: ['Portfolio Proof', 'SEO Discovery', 'Professional Brand'],
    },
    {
      title: 'Businesses',
      slug: 'businesses',
      description: 'Reach 81% of customers who research online before buying',
      icon: HiOfficeBuilding,
      gradient: 'from-purple-500 to-indigo-700',
      stats: '24/7 lead generation',
      features: ['Build Trust', 'Compete Bigger', 'Expand Reach'],
    },
    {
      title: 'Content Creators',
      slug: 'creators',
      description: 'Attract premium brand deals with a professional creator hub',
      icon: HiVideoCamera,
      gradient: 'from-pink-500 to-rose-700',
      stats: 'Platform independence',
      features: ['Media Kit', 'Brand Pitches', 'Monetization'],
    },
    {
      title: 'Freelancers',
      slug: 'freelancers',
      description: 'Escape platform fees and charge 2-3x higher rates',
      icon: HiStar,
      gradient: 'from-amber-500 to-orange-700',
      stats: 'Keep 100% earnings',
      features: ['Premium Rates', 'Authority', 'Direct Clients'],
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
            Why Websites Matter For <span className="text-gradient">Your Goals</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Choose your category to see specific reasons and real success stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/why-websites/${service.slug}`}>
                <AnimatedCard className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-dark-100 overflow-hidden">
                  {/* Gradient header */}
                  <div className={`h-3 bg-gradient-to-r ${service.gradient}`}></div>
                  
                  <div className="p-8">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl mb-6`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="text-3xl text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-dark-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Stats badge */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg mb-4">
                      <p className="text-sm font-bold text-green-700">{service.stats}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-dark-700">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn more */}
                    <div className="flex items-center text-primary-600 font-semibold">
                      <span className="mr-2">Learn Why</span>
                      <HiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </AnimatedCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
