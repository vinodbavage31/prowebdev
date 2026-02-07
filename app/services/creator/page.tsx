import { Metadata } from 'next'
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout'

export const metadata: Metadata = {
  title: 'Content Creator Websites | WebDevPro',
  description: 'Attract sponsors and grow your audience with a professional content creator website that showcases your work and analytics.',
}

export default function CreatorServicePage() {
  const serviceData = {
    title: 'Content Creator Websites',
    icon: '🎬',
    gradient: 'from-pink-500 to-rose-700',
    
    whyMatters: {
      title: 'Why Content Creators Need Professional Websites',
      problems: [
        'Brands can\'t easily find your analytics and media kit',
        'Social media platforms control your audience access',
        'No professional space to pitch brand partnerships',
        'Scattered content across multiple platforms',
        'Difficult to showcase your best work in one place',
      ],
      importance: 'In the creator economy, your website is your business card, portfolio, and pitch deck combined. Brands looking for partnerships want to see professionalism, reach, and content quality—all in one place. A website gives you credibility that social profiles alone cannot provide.',
      withoutWebsite: 'Without a dedicated website, you appear less professional to potential sponsors. Brands have to hunt through multiple platforms to understand your work. You lose opportunities because sponsors can\'t quickly assess if you\'re the right fit for their campaigns.',
    },

    features: {
      title: 'What You Get',
      items: [
        {
          category: 'Content Showcase',
          list: [
            'Video/content portfolio grid',
            'Featured work highlights',
            'Category filtering (vlogs, reviews, etc.)',
            'Embedded social media feeds',
            'Latest uploads section',
            'Best-performing content spotlight',
          ],
        },
        {
          category: 'Brand Partnership Tools',
          list: [
            'Media kit page with analytics',
            'Audience demographics display',
            'Past collaborations showcase',
            'Partnership inquiry form',
            'Rate card/pricing (optional)',
            'Testimonials from brands',
          ],
        },
        {
          category: 'Professional Features',
          list: [
            'Custom domain (yourname.com)',
            'Professional email setup',
            'Analytics dashboard integration',
            'Contact form for business inquiries',
            'Newsletter signup for fans',
            'SEO optimization for discoverability',
          ],
        },
      ],
    },

    benefits: {
      title: 'How It Grows Your Creator Business',
      items: [
        {
          title: 'Attract Premium Sponsors',
          description: 'Brands see you as a professional business partner when you have a polished website with clear metrics and contact information.',
        },
        {
          title: 'Control Your Narrative',
          description: 'Unlike social platforms that change algorithms, your website is 100% yours. You control how brands discover and perceive you.',
        },
        {
          title: 'Centralized Portfolio',
          description: 'One link to share with everyone—all your best work, stats, and contact info in a beautiful, easy-to-navigate package.',
        },
        {
          title: 'Professional Credibility',
          description: 'A custom website signals you\'re serious about your creator career. It elevates you above hobbyists in brand\'s eyes.',
        },
        {
          title: 'Audience Ownership',
          description: 'Build an email list of your true fans. If a platform bans you or changes rules, you still have direct audience access.',
        },
        {
          title: 'Multiple Revenue Streams',
          description: 'Showcase affiliate links, merchandise, courses, or services alongside your content—diversify beyond platform ad revenue.',
        },
      ],
    },

    examples: [
      {
        title: 'Creator Portfolio Website',
        url: 'https://shreyashs.vercel.app/',
        description: 'Professional content creator website showcasing work, social proof, and brand collaboration opportunities with modern design.',
        highlights: ['Content Portfolio', 'Social Integration', 'Professional Branding', 'Contact CTA'],
      },
    ],

    whoIsFor: [
      'YouTube content creators',
      'Instagram influencers',
      'TikTok creators looking to monetize',
      'Podcasters building their brand',
      'Twitch streamers expanding reach',
      'Multi-platform creators needing central hub',
      'Emerging influencers seeking sponsors',
      'Established creators wanting professionalism',
    ],

    process: [
      'Share your content style, audience, and goals',
      'We analyze your brand and create custom design',
      'You provide content, analytics, and media kit details',
      'We build your professional creator hub',
      'Review, refine, and launch with SEO optimization',
      'Update content as you grow and land new partnerships',
    ],
  }

  return <ServiceDetailLayout data={serviceData} />
}
