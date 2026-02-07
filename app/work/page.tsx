import { Metadata } from 'next'
import BackButton from '@/components/BackButton'
import WorkHero from '@/components/work/WorkHero'
import ProjectGallery from '@/components/work/ProjectGallery'

export const metadata: Metadata = {
  title: 'Our Work - Portfolio & Case Studies | WebDevPro',
  description: 'View our portfolio of professional websites. Real projects, live online, delivering results for clients.',
}

export default function WorkPage() {
  return (
    <>
      <BackButton />
      <WorkHero />
      <ProjectGallery />
    </>
  )
}
