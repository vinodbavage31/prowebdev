import { Metadata } from 'next'
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout'

export const metadata: Metadata = {
  title: 'Freelancer Personal Websites | WebDevPro',
  description: 'Build your personal brand and attract high-value clients with a professional freelancer website.',
}

export default function FreelancerServicePage() {
  const serviceData = {
    title: 'Freelancer Personal Websites',
    icon: '✨',
    gradient: 'from-amber-500 to-orange-700',
    
    whyMatters: {
      title: 'Why Freelancers Need Personal Brand Websites',
      problems: [
        'Competing on price on Upwork and Fiverr instead of value',
        'No professional platform to showcase expertise and past work',
        'Clients can\'t find you outside of freelance marketplaces',
        'Unable to build a recognizable personal brand',
        'Platform fees eat into your earnings on every project',
      ],
      importance: 'Top freelancers command premium rates by building strong personal brands. Your website is your digital storefront, showing expertise, past work, and professionalism. It positions you as an expert, not just another freelancer fighting for $5/hour jobs.',
      withoutWebsite: 'Without a personal website, you\'re stuck competing with thousands on freelance platforms. You can\'t charge premium rates because clients can\'t verify your expertise beyond reviews. You lose direct clients who would pay more and skip the platform fees.',
    },

    features: {
      title: 'Personal Brand Features',
      items: [
        {
          category: 'Professional Presence',
          list: [
            'Personal brand homepage with unique value',
            'Professional bio and story',
            'Skills and expertise showcase',
            'Portfolio with detailed case studies',
            'Client testimonials and results',
            'Professional photography',
            'Services and packages clearly defined',
            'Blog to demonstrate expertise',
          ],
        },
        {
          category: 'Client Acquisition',
          list: [
            'Service inquiry form',
            'Booking/consultation scheduler',
            'Custom service packages',
            'Transparent pricing (optional)',
            'Free resource downloads (lead magnets)',
            'Email newsletter signup',
            'Social proof and credentials',
            'Clear call-to-action throughout',
          ],
        },
        {
          category: 'Business Tools',
          list: [
            'Custom domain (yourname.com)',
            'Professional email address',
            'Analytics to track visitors',
            'SEO optimization for your niche',
            'Social media integration',
            'Client onboarding documents',
            'Payment integration (optional)',
            'Mobile-responsive design',
          ],
        },
      ],
    },

    benefits: {
      title: 'How It Transforms Your Freelance Career',
      items: [
        {
          title: 'Charge Premium Rates',
          description: 'Position yourself as an expert consultant, not a commodity freelancer. Professional branding justifies higher prices.',
        },
        {
          title: 'Attract Direct Clients',
          description: 'Get found through Google and referrals. Work directly with clients and avoid platform fees that cut into your income.',
        },
        {
          title: 'Build Authority',
          description: 'Blog posts, case studies, and thought leadership establish you as an expert in your field, attracting better opportunities.',
        },
        {
          title: 'Control Your Brand',
          description: 'Unlike marketplace profiles, your website is 100% yours. Tell your story your way and stand out from the crowd.',
        },
        {
          title: 'Passive Income Opportunities',
          description: 'Sell digital products, courses, or templates through your website. Diversify beyond hourly freelance work.',
        },
        {
          title: 'Professional Credibility',
          description: 'Serious clients expect serious freelancers to have websites. Separate yourself from hobbyists and side-hustlers.',
        },
      ],
    },

    examples: [
      {
        title: 'Freelancer Personal Brand Website',
        url: 'https://vinod-bavage-portfolio.vercel.app/',
        description: 'Professional freelancer website with portfolio, services, and personal brand. Showcases work quality and attracts direct clients.',
        highlights: ['Personal Branding', 'Service Display', 'Portfolio', 'Contact System'],
      },
      {
        title: 'Professional Portfolio',
        url: 'https://vinod-portfolio.pages.dev/',
        description: 'Clean portfolio showcasing skills, projects, and professional journey—perfect for freelancers building authority.',
        highlights: ['Project Showcase', 'Skills Display', 'Professional Design', 'Clear CTAs'],
      },
    ],

    whoIsFor: [
      'Freelance developers and designers',
      'Content writers and copywriters',
      'Marketing consultants',
      'Graphic designers',
      'Social media managers',
      'Virtual assistants',
      'Business consultants',
      'Any freelancer wanting to scale beyond platforms',
    ],

    process: [
      'Understand your niche, ideal clients, and goals',
      'Define your unique value and personal brand',
      'Create compelling portfolio and case studies',
      'Design website that reflects your brand personality',
      'Build with focus on lead generation',
      'Launch with SEO for your specific services',
    ],
  }

  return <ServiceDetailLayout data={serviceData} />
}
