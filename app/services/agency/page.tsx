import { Metadata } from 'next'
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout'

export const metadata: Metadata = {
  title: 'Video Editing Agency Websites | WebDevPro',
  description: 'Professional agency websites to showcase video portfolios, attract clients, and manage projects.',
}

export default function AgencyServicePage() {
  const serviceData = {
    title: 'Video Editing Agency Websites',
    icon: '🎥',
    gradient: 'from-violet-500 to-purple-700',
    
    whyMatters: {
      title: 'Why Video Editing Agencies Need Professional Websites',
      problems: [
        'Clients can\'t easily browse your portfolio of work',
        'No professional platform to showcase before/after examples',
        'Competitors with websites win clients you should get',
        'Difficult to explain services and pricing clearly',
        'No system to manage client projects and communications',
      ],
      importance: 'Video editing is a visual service—your website is your showroom. Potential clients need to see your work quality, turnaround times, and specializations before hiring. A professional website positions you as an established agency, not just another freelancer on Fiverr.',
      withoutWebsite: 'Without a website, you lose high-value clients who research before hiring. Your amazing work stays hidden in social media feeds. You compete on price alone instead of showcasing premium quality and professional service.',
    },

    features: {
      title: 'Agency-Focused Features',
      items: [
        {
          category: 'Portfolio Showcase',
          list: [
            'Video portfolio with grid/gallery layout',
            'Before/after video comparisons',
            'Category filtering (corporate, social, ads, etc.)',
            'Client testimonials with videos',
            'Featured projects highlight',
            'Video player with custom branding',
            'Case studies with project details',
            'Awards and recognition section',
          ],
        },
        {
          category: 'Client Management',
          list: [
            'Project inquiry form with details',
            'Service packages and pricing display',
            'Client dashboard for project tracking',
            'File upload for raw footage',
            'Revision request system',
            'Project timeline display',
            'Invoice and payment integration',
            'Client testimonial collection',
          ],
        },
        {
          category: 'Marketing Tools',
          list: [
            'SEO for video editing searches',
            'Email lead capture',
            'Newsletter for marketing tips',
            'Social media video feed integration',
            'Blog for video marketing advice',
            'Downloadable rate card',
            'Free consultation booking',
            'Referral program page',
          ],
        },
      ],
    },

    benefits: {
      title: 'How It Grows Your Agency',
      items: [
        {
          title: 'Win Premium Clients',
          description: 'Businesses and brands hiring for video editing expect agencies to have professional websites. Stand out as the obvious choice.',
        },
        {
          title: 'Showcase Your Best Work',
          description: 'Curate your portfolio to highlight your strongest projects. Let your editing quality speak louder than any sales pitch.',
        },
        {
          title: 'Automate Client Onboarding',
          description: 'Clear service descriptions and pricing reduce back-and-forth. Clients come to you already understanding what you offer.',
        },
        {
          title: 'Build Agency Brand',
          description: 'Position yourself as an established agency, not a solo freelancer. Charge premium rates with a premium presentation.',
        },
        {
          title: 'Streamline Projects',
          description: 'Client portals for file sharing, feedback, and revisions save hours of email management and confusion.',
        },
        {
          title: 'Passive Lead Generation',
          description: 'Your website attracts clients 24/7 through search engines and social shares. Work finds you while you focus on editing.',
        },
      ],
    },

    examples: [
      {
        title: 'Professional Portfolio Example',
        url: 'https://vinod-portfolio.pages.dev/',
        description: 'Example of portfolio presentation that showcases work quality and professionalism—adaptable for video editing agencies.',
        highlights: ['Portfolio Display', 'Professional Branding', 'Clear Services', 'Contact System'],
      },
    ],

    whoIsFor: [
      'Video editing agencies',
      'Freelance video editors scaling up',
      'Post-production studios',
      'Motion graphics agencies',
      'YouTube editing services',
      'Corporate video production teams',
      'Social media content agencies',
      'Wedding videography businesses',
    ],

    process: [
      'Discuss your agency specialization and target clients',
      'Review your best work for portfolio inclusion',
      'Design showcase that highlights your editing style',
      'Build client portal and project management features',
      'Setup service packages and inquiry system',
      'Launch with video SEO and social integration',
    ],
  }

  return <ServiceDetailLayout data={serviceData} />
}
