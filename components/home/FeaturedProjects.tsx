'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiExternalLink, HiArrowRight } from 'react-icons/hi'
import SimpleCard from '@/components/SimpleCard'

export default function FeaturedProjects() {
  const projects = [
    {
      title: 'Professional Portfolio',
      category: 'Portfolio Website',
      description: 'Clean, modern portfolio showcasing work and achievements for job seekers and professionals.',
      url: 'https://vinod-portfolio.pages.dev/',
      tech: ['React', 'Tailwind', 'Animation'],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Content Creator Platform',
      category: 'Creator Website',
      description: 'Beautiful personal brand website for content creators to attract sponsors and build audience.',
      url: 'https://shreyashs.vercel.app/',
      tech: ['Next.js', 'SEO', 'Analytics'],
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      title: 'School Management System',
      category: 'Education Portal',
      description: 'Complete digital system with student database, admin panel, and parent communication tools.',
      url: 'https://matrubharati.vercel.app/',
      tech: ['Full-Stack', 'Database', 'Auth'],
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: 'ML Project Frontend',
      category: 'Tech Platform',
      description: 'Interactive machine learning application with clean UI and real-time predictions.',
      url: 'https://leaf-disease-detection-neon.vercel.app/',
      tech: ['React', 'ML Integration', 'UI/UX'],
      gradient: 'from-orange-500 to-red-600',
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
            Real websites, live on the internet. See the quality and craftsmanship we deliver to every client.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <SimpleCard key={index} delay={index * 0.1} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-dark-900 mt-2">{project.title}</h3>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <HiExternalLink className="text-2xl" />
                  </a>
                </div>

                <p className="text-dark-600 leading-relaxed mb-6">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary-600 font-semibold mt-6 group-hover:translate-x-1 transition-transform"
                >
                  <span>View Live Project</span>
                  <HiArrowRight className="text-xl" />
                </a>
              </div>
            </SimpleCard>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/work" className="btn-primary inline-flex items-center space-x-2">
            <span>View All Projects</span>
            <HiArrowRight className="text-xl" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
