import { Metadata } from 'next'
import BackButton from '@/components/BackButton'
import WhyWebsitesHero from '@/components/why-websites/WhyWebsitesHero'
import WhyServiceCards from '@/components/why-websites/WhyServiceCards'
import StandOut from '@/components/why-websites/StandOut'
import DigitalProof from '@/components/why-websites/DigitalProof'
import TrustCredibility from '@/components/why-websites/TrustCredibility'

export const metadata: Metadata = {
  title: 'Why Websites Matter | WebDevPro',
  description: 'Understanding the importance of professional websites for career growth, business success, and digital credibility.',
}

export default function WhyWebsitesPage() {
  return (
    <>
      <BackButton />
      <WhyWebsitesHero />
      <WhyServiceCards />
      <StandOut />
      <DigitalProof />
      <TrustCredibility />
    </>
  )
}
