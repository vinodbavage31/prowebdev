'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How much does a website cost?",
      answer: "It depends on your needs. A simple portfolio might be $500-1000, while a complex business site with database could be $2000-5000. We'll give you an honest estimate after understanding your requirements. No hidden fees, no surprises."
    },
    {
      question: "How long does it take to build?",
      answer: "Most projects take 4-7 weeks from start to launch. Simple sites can be faster (2-3 weeks), complex ones might take longer (8-12 weeks). We'll give you a clear timeline during our first conversation."
    },
    {
      question: "Do I own the website?",
      answer: "Yes! 100%. You own all the code, design files, and content. No vendor lock-in whatsoever. You can host it anywhere, modify it yourself, or hire anyone else to work on it. It's completely yours."
    },
    {
      question: "Can I update the website myself?",
      answer: "Absolutely. We'll train you on how to update content, images, and pages. We'll provide documentation and video tutorials. And if you ever get stuck, we're just a message away."
    },
    {
      question: "What if I need changes after launch?",
      answer: "First 30 days: bug fixes are free. After that, small tweaks are usually free too. Bigger changes or new features are billed hourly or as separate projects. We're here for the long term."
    },
    {
      question: "Do you provide hosting?",
      answer: "We can help you set up hosting (usually $5-20/month through providers like Vercel or Netlify), or we can deploy to hosting you already have. You control where your site lives."
    },
    {
      question: "What if I don't like the design?",
      answer: "We show you wireframes and mockups BEFORE we code anything. You approve the design direction first. We incorporate your feedback at every step. No surprises at the end."
    },
    {
      question: "Can you help if I'm not tech-savvy?",
      answer: "That's our specialty! We explain everything in plain English. No jargon, no assumptions. We'll walk you through every step and make sure you feel confident managing your website."
    }
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
            Questions You <span className="text-gradient">Probably Have</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            We believe in transparency. Here are honest answers to the questions every client asks.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-md border border-primary-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary-100 transition-colors"
              >
                <span className="text-lg font-bold text-dark-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <HiChevronUp className="text-2xl text-primary-600 flex-shrink-0" />
                ) : (
                  <HiChevronDown className="text-2xl text-primary-600 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-dark-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-dark-700 mb-4">
            Still have questions? We're here to help.
          </p>
          <a href="/contact" className="text-primary-600 font-semibold hover:text-primary-700 text-lg">
            Ask us anything →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
