'use client'

import { motion } from 'framer-motion'
import { HiExternalLink, HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import Link from 'next/link'

export default function ProjectGallery() {
  const projects = [
    {
      title: 'Professional Developer Portfolio',
      category: 'Portfolio Website',
      description: 'Clean, modern portfolio showcasing projects, skills, and professional journey. Features smooth animations, responsive design, and excellent user experience.',
      url: 'https://vinod-portfolio.pages.dev/',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      gradient: 'from-blue-500 to-purple-600',
      features: ['Project Showcase', 'Skills Visualization', 'Contact Form', 'SEO Optimized'],
    },
    {
      title: 'Content Creator Platform',
      category: 'Creator Website',
      description: 'Beautiful personal brand website for content creators to attract sponsors and build audience. Professional presentation with social proof and media kit.',
      url: 'https://shreyashs.vercel.app/',
      tech: ['Next.js', 'TypeScript', 'SEO', 'Analytics'],
      gradient: 'from-pink-500 to-rose-600',
      features: ['Portfolio Display', 'Brand Showcase', 'Social Integration', 'Professional Design'],
    },
    {
      title: 'Matrubharati School System',
      category: 'School Management',
      description: 'Complete digital transformation for educational institutions. Student database, admin panel, parent communication, and event management in one powerful system.',
      url: 'https://matrubharati.vercel.app/',
      tech: ['Full-Stack', 'Database', 'Authentication', 'Admin Panel'],
      gradient: 'from-green-500 to-teal-600',
      features: ['Student Database', 'Admin Dashboard', 'Parent Portal', 'Event Management'],
    },
    {
      title: 'Leaf Disease Detection ML App',
      category: 'ML Project Frontend',
      description: 'Interactive machine learning application with beautiful UI. Real-time predictions, image upload, and disease information display for agricultural use.',
      url: 'https://leaf-disease-detection-neon.vercel.app/',
      tech: ['React', 'ML Integration', 'Image Processing', 'UI/UX'],
      gradient: 'from-orange-500 to-red-600',
      features: ['Image Upload', 'Real-time Predictions', 'Clean Interface', 'Model Information'],
    },
    {
      title: 'Freelancer Personal Brand',
      category: 'Freelancer Website',
      description: 'Professional freelancer website showcasing services, portfolio, and client testimonials. Built to attract high-value clients and establish authority.',
      url: 'https://vinod-bavage-portfolio.vercel.app/',
      tech: ['Next.js', 'Responsive', 'SEO', 'Portfolio'],
      gradient: 'from-amber-500 to-orange-700',
      features: ['Service Display', 'Portfolio', 'Testimonials', 'Contact System'],
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Filter/Category Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto mb-8">
            Every project represents a unique vision brought to life with professional quality and attention to detail.
          </p>
          
          {/* Category Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {['All Projects', 'Portfolios', 'Business', 'Education', 'ML/Tech', 'Creators'].map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                    : 'bg-white border-2 border-primary-200 text-dark-700 hover:bg-primary-50 hover:border-primary-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                index % 2 === 0 ? '' : ''
              }`}
            >
              <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <span className="inline-block px-4 py-1 bg-primary-50 text-primary-700 font-semibold text-sm rounded-full mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-3xl font-bold text-dark-900 mb-4">{project.title}</h3>
                      <p className="text-lg text-dark-700 leading-relaxed">{project.description}</p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-dark-600 uppercase tracking-wide mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-dark-100 text-dark-800 text-sm font-medium rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <span>View Live Project</span>
                        <HiExternalLink className="text-xl" />
                      </a>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
                    <h4 className="font-bold text-dark-900 mb-4 text-lg">Key Features</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, featIndex) => (
                        <li key={featIndex} className="flex items-start text-dark-700">
                          <HiCheckCircle className="text-green-500 mr-2 text-lg flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '10+', label: 'Projects Delivered', sublabel: 'Successfully launched' },
            { number: '100%', label: 'Client Satisfaction', sublabel: 'Real results achieved' },
            { number: '8+', label: 'Service Categories', sublabel: 'Diverse expertise' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100"
            >
              <div className="text-5xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-dark-800 mb-1">{stat.label}</div>
              <div className="text-dark-600">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-br from-primary-600 to-primary-800 text-white p-12 md:p-16 rounded-2xl shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Portfolio?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Your project could be our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-700 px-10 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <HiArrowRight className="text-xl" />
            </Link>
            <Link
              href="/services"
              className="bg-primary-500 border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300 inline-flex items-center justify-center"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
