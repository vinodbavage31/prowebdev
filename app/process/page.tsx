import { Metadata } from 'next'
import BackButton from '@/components/BackButton'
import ProcessHero from '@/components/process/ProcessHero'
import ProcessContent from '@/components/process/ProcessContent'
import ProcessCTA from '@/components/process/ProcessCTA'

export const metadata: Metadata = {
  title: 'Our Process - How We Work | WebDevPro',
  description: 'Transparent, collaborative process from idea to launch. See how we build professional websites step by step.',
}

export default function ProcessPage() {
  return (
    <>
      <BackButton />
      <ProcessHero />
      <ProcessContent />
      <ProcessCTA />
    </>
  )
}
