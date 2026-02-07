'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight, HiCheck, HiBriefcase, HiVideoCamera, HiAcademicCap, HiLightningBolt, HiOfficeBuilding, HiChip, HiFilm, HiSparkles } from 'react-icons/hi'
import SimpleCard from '@/components/SimpleCard'

const iconMap: Record<string, any> = {
  briefcase: HiBriefcase,
  video: HiVideoCamera,
  academic: HiAcademicCap,
  lightning: HiLightningBolt,
  office: HiOfficeBuilding,
  chip: HiChip,
  film: HiFilm,
  sparkles: HiSparkles,
}

interface ServiceCardProps {
  service: {
    title: string
    slug: string
    description: string
    iconName: string
    features: string[]
    gradient: string
  }
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.iconName] || HiBriefcase
  
  return (
    <SimpleCard delay={index * 0.05} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-dark-100 h-full">
      {/* Gradient Header */}
      <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
      
      <div className="p-8">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl mb-4`}>
          <Icon className="text-3xl text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-dark-600 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-dark-700">
              <HiCheck className="text-green-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Learn More Link */}
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center space-x-2 text-primary-600 font-semibold group-hover:translate-x-1 transition-transform"
        >
          <span>Learn More</span>
          <HiArrowRight className="text-xl" />
        </Link>
      </div>
    </SimpleCard>
  )
}
