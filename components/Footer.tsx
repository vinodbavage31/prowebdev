import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/work' },
  ]

  const services = [
    { name: 'Portfolio Websites', href: '/services/portfolio' },
    { name: 'Business Websites', href: '/services/business' },
    { name: 'Content Creator Sites', href: '/services/creator' },
    { name: 'School Systems', href: '/services/school' },
  ]

  const resources = [
    { name: 'Our Process', href: '/process' },
    { name: 'Why Websites Matter', href: '/why-websites' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-primary-400">Pro</span>WebDev
              </span>
            </div>
            <p className="text-dark-300 leading-relaxed">
              Building professional websites that drive real business results. Modern design, powerful systems, trusted by clients.
            </p>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <a
                href="mailto:contact@webdevpro.com"
                className="flex items-center space-x-2 text-dark-300 hover:text-primary-400 transition-colors"
              >
                <FaEnvelope />
                <span>Email Us</span>
              </a>
              <a
                href="https://wa.me/"
                className="flex items-center space-x-2 text-dark-300 hover:text-primary-400 transition-colors"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700 mt-12 pt-8 text-center text-dark-400">
          <p>&copy; {currentYear} Vinod Bavage. All rights reserved. Building digital futures.</p>
        </div>
      </div>
    </footer>
  )
}
