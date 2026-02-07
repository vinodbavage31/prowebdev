'use client'

import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import SimpleCard from '@/components/SimpleCard'

export default function ProcessContent() {
  return (
    <>
      {/* How We Work */}
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
              Our <span className="text-gradient">6-Step Process</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Clear, transparent, and collaborative—every step of the way
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Step 1 */}
            <SimpleCard delay={0} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-10 shadow-lg border border-blue-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-900 mb-3">Discovery & Planning</h3>
                  <p className="text-dark-700 mb-4 leading-relaxed">
                    We start with a conversation to understand your vision, goals, and requirements. No technical jargon—just honest discussion about what you need.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Initial consultation call</span>
                    </li>
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Define your target audience and goals</span>
                    </li>
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Discuss budget and timeline</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SimpleCard>

            {/* Step 2 */}
            <SimpleCard delay={0.1} className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 md:p-10 shadow-lg border border-purple-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-900 mb-3">Design & Wireframes</h3>
                  <p className="text-dark-700 mb-4 leading-relaxed">
                    We create wireframes and design mockups so you can visualize your website before we write any code. You approve the design direction first.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Create site structure and layout</span>
                    </li>
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Design mockups for key pages</span>
                    </li>
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Get your feedback and refine</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SimpleCard>

            {/* Step 3 */}
            <SimpleCard delay={0.2} className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 md:p-10 shadow-lg border border-green-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-900 mb-3">Development</h3>
                  <p className="text-dark-700 mb-4 leading-relaxed">
                    We build your website with clean code, modern technology, and best practices. You get regular progress updates.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Frontend development with responsive design</span>
                    </li>
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Backend and database setup (if needed)</span>
                    </li>
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Regular demos and feedback sessions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SimpleCard>

            {/* Step 4 */}
            <SimpleCard delay={0.3} className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 md:p-10 shadow-lg border border-orange-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-900 mb-3">Testing & Refinement</h3>
                  <p className="text-dark-700 mb-4 leading-relaxed">
                    We test everything thoroughly across different devices and browsers. You review and request any final changes.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Cross-browser and device testing</span>
                    </li>
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Performance optimization</span>
                    </li>
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Final adjustments based on feedback</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SimpleCard>

            {/* Step 5 */}
            <SimpleCard delay={0.4} className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 md:p-10 shadow-lg border border-pink-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-900 mb-3">Launch</h3>
                  <p className="text-dark-700 mb-4 leading-relaxed">
                    We deploy your website to the live server, set up your custom domain, and ensure everything works perfectly.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Domain setup and SSL certificate</span>
                    </li>
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>SEO setup and verification</span>
                    </li>
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Training on how to manage your site</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SimpleCard>

            {/* Step 6 */}
            <SimpleCard delay={0.5} className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 md:p-10 shadow-lg border border-cyan-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    6
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-900 mb-3">Ongoing Support</h3>
                  <p className="text-dark-700 mb-4 leading-relaxed">
                    We don't disappear after launch. We're here for questions, updates, and helping you grow your online presence.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>30 days of free bug fixes</span>
                    </li>
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Answer your questions anytime</span>
                    </li>
                    <li className="flex items-start text-dark-700">
                      <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>Optional maintenance and updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SimpleCard>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding gradient-bg">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-6">Typical Timeline</h2>
            <p className="text-xl text-dark-600">
              Every project is unique, but here's a general timeframe
            </p>
          </motion.div>

          <SimpleCard delay={0} className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-6 pb-6 border-b border-dark-200">
                <div className="text-2xl font-bold text-primary-600 min-w-[100px]">Week 1</div>
                <div className="flex-1">
                  <h3 className="font-bold text-dark-900 mb-1">Discovery & Design</h3>
                  <p className="text-dark-600">Planning, requirements, and design mockups</p>
                </div>
              </div>

              <div className="flex items-center gap-6 pb-6 border-b border-dark-200">
                <div className="text-2xl font-bold text-primary-600 min-w-[100px]">Week 2-3</div>
                <div className="flex-1">
                  <h3 className="font-bold text-dark-900 mb-1">Development</h3>
                  <p className="text-dark-600">Building your website with regular updates</p>
                </div>
              </div>

              <div className="flex items-center gap-6 pb-6 border-b border-dark-200">
                <div className="text-2xl font-bold text-primary-600 min-w-[100px]">Week 4</div>
                <div className="flex-1">
                  <h3 className="font-bold text-dark-900 mb-1">Testing & Launch</h3>
                  <p className="text-dark-600">Quality assurance, refinement, and go-live</p>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-xl mt-6">
                <p className="text-dark-800 text-center">
                  <strong>Total: 4-7 weeks</strong> for most projects. Complex sites may take longer, simple ones can be faster.
                </p>
              </div>
            </div>
          </SimpleCard>
        </div>
      </section>

      {/* What You Get */}
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
              What You <span className="text-gradient">Actually Get</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              More than just a website—everything you need for success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SimpleCard delay={0} className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-primary-700 mb-3">Technical</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">Clean, professional code</span>
                </li>
                <li className="flex items-start">
                  <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">Mobile-responsive design</span>
                </li>
                <li className="flex items-start">
                  <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">Fast loading speeds</span>
                </li>
                <li className="flex items-start">
                  <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">SEO optimized</span>
                </li>
                <li className="flex items-start">
                  <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">SSL certificate (HTTPS)</span>
                </li>
              </ul>
            </SimpleCard>

            <SimpleCard delay={0.1} className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-primary-700 mb-3">Documentation</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">Complete website docs</span>
                </li>
                <li className="flex items-start">
                  <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">How to update content</span>
                </li>
                <li className="flex items-start">
                  <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">Video tutorials</span>
                </li>
                <li className="flex items-start">
                  <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">Troubleshooting guide</span>
                </li>
                <li className="flex items-start">
                  <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">Admin panel walkthrough</span>
                </li>
              </ul>
            </SimpleCard>

            <SimpleCard delay={0.2} className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-primary-700 mb-3">Ownership</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">100% code ownership</span>
                </li>
                <li className="flex items-start">
                  <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">All design files</span>
                </li>
                <li className="flex items-start">
                  <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">No vendor lock-in</span>
                </li>
                <li className="flex items-start">
                  <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">Full admin access</span>
                </li>
                <li className="flex items-start">
                  <HiCheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-700">Export data anytime</span>
                </li>
              </ul>
            </SimpleCard>
          </div>
        </div>
      </section>
    </>
  )
}
