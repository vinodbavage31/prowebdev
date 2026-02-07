import { Metadata } from 'next'
import Link from 'next/link'
import BackButton from '@/components/BackButton'
import ServicesHero from '@/components/services/ServicesHero'
import ServiceCard from '@/components/services/ServiceCard'

export const metadata: Metadata = {
  title: 'Our Services - Professional Web Development Solutions | WebDevPro',
  description: 'Portfolio websites, business sites, school management systems, and more. Specialized web development services tailored to your needs.',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Job Seeker Portfolio Websites',
      slug: 'portfolio',
      description: 'Stand out in job searches with a professional portfolio that showcases your skills, projects, and achievements.',
      iconName: 'briefcase',
      features: ['Modern Design', 'Project Showcase', 'Resume Integration', 'Contact Form'],
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Content Creator Websites',
      slug: 'creator',
      description: 'Attract sponsors and grow your audience with a professional platform that showcases your content and analytics.',
      iconName: 'video',
      features: ['Portfolio Display', 'Analytics Dashboard', 'Brand Pitch', 'Social Integration'],
      gradient: 'from-pink-500 to-rose-700',
    },
    {
      title: 'School Websites & Management Systems',
      slug: 'school',
      description: 'Complete digital transformation with student databases, admin panels, and parent communication tools.',
      iconName: 'academic',
      features: ['Student Database', 'Admin Panel', 'Parent Portal', 'Event Management'],
      gradient: 'from-green-500 to-teal-700',
    },
    {
      title: 'Gym & Fitness Websites',
      slug: 'gym',
      description: 'Professional fitness business websites with class schedules, member management, and online booking.',
      iconName: 'lightning',
      features: ['Class Schedules', 'Trainer Profiles', 'Membership Plans', 'Booking System'],
      gradient: 'from-orange-500 to-red-700',
    },
    {
      title: 'Business Websites',
      slug: 'business',
      description: 'Establish credibility and generate leads with professional business websites that work 24/7.',
      iconName: 'office',
      features: ['Service Pages', 'Lead Generation', 'Testimonials', 'SEO Optimized'],
      gradient: 'from-purple-500 to-indigo-700',
    },
    {
      title: 'ML Project Frontends',
      slug: 'ml-frontend',
      description: 'Beautiful, interactive interfaces for your machine learning projects with real-time predictions.',
      iconName: 'chip',
      features: ['Interactive UI', 'Real-time Results', 'Data Visualization', 'API Integration'],
      gradient: 'from-cyan-500 to-blue-700',
    },
    {
      title: 'Video Editing Agency Websites',
      slug: 'agency',
      description: 'Showcase your video portfolio, attract clients, and manage projects with a professional agency website.',
      iconName: 'film',
      features: ['Video Portfolio', 'Client Dashboard', 'Project Management', 'Pricing Pages'],
      gradient: 'from-violet-500 to-purple-700',
    },
    {
      title: 'Freelancer Personal Websites',
      slug: 'freelancer',
      description: 'Build your personal brand and attract high-value clients with a professional freelancer website.',
      iconName: 'sparkles',
      features: ['Portfolio', 'Services List', 'Client Testimonials', 'Booking System'],
      gradient: 'from-amber-500 to-orange-700',
    },
  ]

  return (
    <>
      <BackButton />
      <ServicesHero />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              Don't See What You Need?
            </h3>
            <p className="text-lg text-dark-600 mb-6">
              We create custom solutions for unique requirements. Tell us what you need, 
              and we'll build it.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
