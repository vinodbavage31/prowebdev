'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiUserGroup, HiCog, HiBriefcase, HiLightningBolt, HiQuestionMarkCircle, HiMail, HiArrowRight } from 'react-icons/hi'
import SimpleCard from '@/components/SimpleCard'

export default function QuickNavCards() {
  const navCards = [
    {
      title: 'About Us',
      description: 'Discover our mission, values, and why we build websites that matter',
      icon: HiUserGroup,
      href: '/about',
      gradient: 'from-blue-500 to-blue-700',
      features: ['Our Story', 'Mission & Values', 'Problems We Solve'],
    },
    {
      title: 'Our Services',
      description: '8+ specialized web solutions tailored to your unique needs',
      icon: HiCog,
      href: '/services',
      gradient: 'from-purple-500 to-indigo-700',
      features: ['Portfolio Sites', 'Business Websites', 'Custom Systems'],
    },
    {
      title: 'Our Work',
      description: 'Real projects, live websites, and proven results for clients',
      icon: HiBriefcase,
      href: '/work',
      gradient: 'from-green-500 to-teal-700',
      features: ['Live Projects', 'Case Studies', 'Client Success'],
    },
    {
      title: 'Our Process',
      description: 'Transparent 6-step workflow from idea to launch',
      icon: HiLightningBolt,
      href: '/process',
      gradient: 'from-orange-500 to-red-700',
      features: ['Clear Timeline', 'Regular Updates', 'Full Support'],
    },
    {
      title: 'Why Websites',
      description: 'Learn why professional websites are essential for growth',
      icon: HiQuestionMarkCircle,
      href: '/why-websites',
      gradient: 'from-pink-500 to-rose-700',
      features: ['Digital Proof', 'Trust Building', 'Business Growth'],
    },
    {
      title: 'Get Started',
      description: 'Ready to build? Let\'s discuss your vision and goals',
      icon: HiMail,
      href: '/contact',
      gradient: 'from-cyan-500 to-blue-700',
      features: ['Free Consultation', 'Quick Response', 'No Pressure'],
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
            Explore Our <span className="text-gradient">Website</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Everything you need to know about our services, process, and how we can help you succeed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {navCards.map((card, index) => (
            <SimpleCard key={index} delay={index * 0.1}>
              <Link href={card.href} className="block">
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-dark-100 h-full">
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-6`}>
                      <card.icon className="text-3xl text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-dark-600 mb-6 leading-relaxed flex-grow">
                      {card.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-dark-700">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Arrow with animation */}
                    <div className="flex items-center text-primary-600 font-semibold">
                      <span className="mr-2">Learn More</span>
                      <HiArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </SimpleCard>
          ))}
        </div>
      </div>
    </section>
  )
}
