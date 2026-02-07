'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPaperAirplane } from 'react-icons/hi'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you! We\'ll get back to you within 24 hours.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-dark-900 mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-dark-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-dark-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-dark-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-dark-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-dark-700 mb-2">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-dark-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-dark-700 mb-2">
            Service Interested In *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-dark-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
          >
            <option value="">Select a service</option>
            <option value="portfolio">Portfolio Website</option>
            <option value="creator">Content Creator Website</option>
            <option value="school">School Management System</option>
            <option value="gym">Gym & Fitness Website</option>
            <option value="business">Business Website</option>
            <option value="ml-frontend">ML Project Frontend</option>
            <option value="agency">Agency Website</option>
            <option value="freelancer">Freelancer Website</option>
            <option value="custom">Custom Project</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-dark-700 mb-2">
            Tell Us About Your Project *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border-2 border-dark-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
            placeholder="Tell us about your goals, timeline, and any specific requirements..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full btn-primary flex items-center justify-center space-x-2"
        >
          <span>Send Message</span>
          <HiPaperAirplane className="text-xl" />
        </button>

        <p className="text-sm text-dark-600 text-center">
          We typically respond within 24 hours on business days
        </p>
      </form>
    </motion.div>
  )
}
