import { Metadata } from 'next'
import BackButton from '@/components/BackButton'
import AboutHero from '@/components/about/AboutHero'
import WhyWeExist from '@/components/about/WhyWeExist'
import ProblemsSolved from '@/components/about/ProblemsSolved'
import OurMission from '@/components/about/OurMission'
import OurMindset from '@/components/about/OurMindset'

export const metadata: Metadata = {
  title: 'About Us - Why We Build Websites | WebDevPro',
  description: 'We exist to help people and businesses build strong digital presence. Learn about our mission, values, and why we do what we do.',
}

export default function AboutPage() {
  return (
    <>
      <BackButton />
      <AboutHero />
      <WhyWeExist />
      <ProblemsSolved />
      <OurMission />
      <OurMindset />
    </>
  )
}
