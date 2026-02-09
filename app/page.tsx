import Hero from '@/components/home/Hero'
import TrustIndicators from '@/components/home/TrustIndicators'
import ProblemSolution from '@/components/home/ProblemSolution'
import QuickNavCards from '@/components/home/QuickNavCards'
import WhatWeDo from '@/components/home/WhatWeDo'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import SocialProof from '@/components/home/SocialProof'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <WhatWeDo />
      <FeaturedProjects />
      <WhyChooseUs />
      <ProblemSolution />
      <SocialProof />
      <QuickNavCards />
      <FAQ />
      <CTA />
    </>
  )
}
