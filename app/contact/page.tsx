import { Metadata } from 'next'
import BackButton from '@/components/BackButton'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import NextSteps from '@/components/contact/NextSteps'

export const metadata: Metadata = {
  title: 'Contact Us - Get Started Today | WebDevPro',
  description: 'Ready to build your professional website? Contact us to discuss your project and get a free consultation.',
}

export default function ContactPage() {
  return (
    <>
      <BackButton />
      <ContactHero />
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <NextSteps />
    </>
  )
}
