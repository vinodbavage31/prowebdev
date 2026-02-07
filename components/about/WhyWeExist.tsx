'use client'

import { motion } from 'framer-motion'
import { HiLightBulb, HiHeart, HiSparkles } from 'react-icons/hi'
import GlassmorphicCard from '@/components/GlassmorphicCard'

export default function WhyWeExist() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-lg text-center mb-12">
            Why We <span className="text-gradient">Exist</span>
          </h2>

          <div className="space-y-12">
            {/* Story Section */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 md:p-12 rounded-2xl border border-primary-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                  <HiLightBulb className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-4">The Beginning</h3>
                  <p className="text-lg text-dark-700 leading-relaxed mb-4">
                    We started building websites because we saw a problem everywhere we looked: 
                    talented people with no way to showcase their work, businesses losing customers 
                    because they looked unprofessional online, and schools still running on paper 
                    when the world had gone digital.
                  </p>
                  <p className="text-lg text-dark-700 leading-relaxed">
                    It wasn't just about code. It was about giving people the tools to compete, 
                    to be taken seriously, and to grow beyond their current limitations.
                  </p>
                </div>
              </div>
            </div>

            {/* Purpose Section */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 md:p-12 rounded-2xl border border-primary-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                  <HiHeart className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-4">What Drives Us</h3>
                  <p className="text-lg text-dark-700 leading-relaxed mb-4">
                    Every project we take on represents someone's dream, someone's livelihood, 
                    or someone's vision for the future. That responsibility drives us to deliver 
                    not just functional websites, but digital experiences that truly make a difference.
                  </p>
                  <p className="text-lg text-dark-700 leading-relaxed">
                    We're not here to build template sites and disappear. We're here to be your 
                    long-term digital partner, helping you grow and succeed in an increasingly 
                    digital world.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 md:p-12 rounded-2xl border border-primary-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                  <HiSparkles className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-4">The Impact We Create</h3>
                  <p className="text-lg text-dark-700 leading-relaxed mb-4">
                    We've seen job seekers land interviews because of their portfolio websites. 
                    We've watched content creators sign brand deals after launching their 
                    professional online presence. We've helped schools streamline operations 
                    and communicate better with parents.
                  </p>
                  <p className="text-lg text-dark-700 leading-relaxed">
                    That's why we exist: to create real, measurable impact in people's lives 
                    and businesses through exceptional web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
