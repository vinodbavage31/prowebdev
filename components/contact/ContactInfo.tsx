'use client'

import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiClock, HiLocationMarker, HiCheckCircle } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: HiMail,
      title: 'Email Us',
      info: 'contact@webdevpro.com',
      action: 'mailto:contact@webdevpro.com',
      description: 'Best for detailed inquiries',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      info: 'Quick Chat',
      action: 'https://wa.me/',
      description: 'Fast response for quick questions',
    },
    {
      icon: HiPhone,
      title: 'Schedule a Call',
      info: 'Book Consultation',
      action: '/contact',
      description: 'Free 30-minute project discussion',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-dark-900 mb-6">Get In Touch</h2>
        <p className="text-lg text-dark-700 leading-relaxed mb-8">
          Choose the method that works best for you. We're here to answer questions, 
          discuss your project, and provide honest guidance—no pressure, no sales pitch.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.action}
            className="block bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                <method.icon className="text-2xl text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-dark-900 mb-1">{method.title}</h3>
                <p className="text-primary-600 font-semibold mb-1">{method.info}</p>
                <p className="text-sm text-dark-600">{method.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Additional Info */}
      <div className="bg-dark-900 text-white p-8 rounded-2xl">
        <div className="flex items-start space-x-3 mb-4">
          <HiClock className="text-2xl text-primary-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold mb-2">Response Time</h3>
            <p className="text-dark-300">We respond to all inquiries within 24 hours on business days.</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3 pt-4 border-t border-dark-700">
          <HiLocationMarker className="text-2xl text-primary-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold mb-2">Working Hours</h3>
            <p className="text-dark-300">Monday - Saturday: 9:00 AM - 6:00 PM</p>
            <p className="text-dark-300">Sunday: By appointment</p>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
        <h3 className="font-bold text-dark-900 mb-4">What to Expect</h3>
        <ul className="space-y-2">
          {[
            'Free initial consultation',
            'No-pressure discussion',
            'Honest timeline and pricing',
            'Clear next steps',
            'Professional guidance',
          ].map((item, index) => (
            <li key={index} className="flex items-center text-dark-700">
              <HiCheckCircle className="text-green-500 mr-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
