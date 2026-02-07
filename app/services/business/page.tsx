import { Metadata } from 'next'
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout'

export const metadata: Metadata = {
  title: 'Business Websites | WebDevPro',
  description: 'Professional business websites that establish credibility and generate leads 24/7.',
}

export default function BusinessServicePage() {
  const serviceData = {
    title: 'Business Websites',
    icon: '🏢',
    gradient: 'from-purple-500 to-indigo-700',
    
    whyMatters: {
      title: 'Why Your Business Needs a Website',
      problems: [
        'Potential customers can\'t find information about your business online',
        'You lose credibility compared to competitors with websites',
        'No way to generate leads or inquiries while you sleep',
        'Relying only on word-of-mouth limits your growth',
        'Unable to showcase services, testimonials, or past work effectively',
      ],
      importance: '81% of consumers research businesses online before making a purchase decision. Without a website, you\'re invisible to the majority of potential customers. A professional website establishes trust, showcases your expertise, and works as your 24/7 salesperson.',
      withoutWebsite: 'Without a website, you miss out on countless opportunities. Customers choose competitors they can research online. You can\'t scale beyond local word-of-mouth. Your business appears less professional and trustworthy, directly impacting revenue.',
    },

    features: {
      title: 'Professional Business Features',
      items: [
        {
          category: 'Essential Pages',
          list: [
            'Professional homepage with clear value proposition',
            'About Us page with company story',
            'Services/Products pages with detailed descriptions',
            'Portfolio or case studies page',
            'Contact page with form and map',
            'Testimonials and reviews section',
            'FAQ page',
            'Blog for content marketing (optional)',
          ],
        },
        {
          category: 'Lead Generation',
          list: [
            'Contact forms with email notifications',
            'Quote request system',
            'Newsletter signup',
            'Call-to-action buttons throughout',
            'Phone and email click-to-contact',
            'Live chat integration (optional)',
            'Booking/appointment system (optional)',
          ],
        },
        {
          category: 'Technical Excellence',
          list: [
            'Fast loading speeds for better SEO',
            'Mobile-responsive design',
            'Google My Business integration',
            'SEO optimization for local search',
            'SSL security certificate',
            'Analytics tracking',
            'Custom domain and email',
            'Social media integration',
          ],
        },
      ],
    },

    benefits: {
      title: 'How It Grows Your Business',
      items: [
        {
          title: 'Build Trust & Credibility',
          description: 'A professional website immediately establishes legitimacy. Customers feel confident doing business with companies that have a strong online presence.',
        },
        {
          title: 'Generate Leads 24/7',
          description: 'Your website works while you sleep. Potential customers can learn about your services and submit inquiries anytime, anywhere.',
        },
        {
          title: 'Showcase Your Expertise',
          description: 'Display past projects, client testimonials, and detailed service descriptions. Let your work speak for itself.',
        },
        {
          title: 'Compete with Larger Companies',
          description: 'A well-designed website levels the playing field. Small businesses can compete with larger competitors online.',
        },
        {
          title: 'Reduce Customer Service Load',
          description: 'Answer common questions with an FAQ page. Provide information upfront so customers come to you already informed.',
        },
        {
          title: 'Expand Your Reach',
          description: 'Reach customers beyond your local area. Online visibility opens new markets and growth opportunities.',
        },
      ],
    },

    examples: [
      {
        title: 'Business Portfolio Examples',
        url: 'https://vinod-portfolio.pages.dev/',
        description: 'Professional business presentation with services, portfolio, and clear calls-to-action. Demonstrates quality and professionalism.',
        highlights: ['Service Showcase', 'Portfolio', 'Professional Design', 'Lead Capture'],
      },
    ],

    whoIsFor: [
      'Small and medium businesses',
      'Professional services (consulting, legal, etc.)',
      'Local service providers (plumbers, electricians)',
      'Retail businesses wanting online presence',
      'B2B companies seeking leads',
      'Startups establishing credibility',
      'Established businesses modernizing their image',
      'Any business serious about growth',
    ],

    process: [
      'Understand your business, target audience, and goals',
      'Research competitors and identify differentiation',
      'Design custom layouts that reflect your brand',
      'Create compelling copy and gather testimonials',
      'Build and optimize for search engines',
      'Launch with analytics and lead tracking setup',
    ],
  }

  return <ServiceDetailLayout data={serviceData} />
}
