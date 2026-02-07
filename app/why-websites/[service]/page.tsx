import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BackButton from '@/components/BackButton'
import WhyServiceHero from '@/components/why-websites/WhyServiceHero'
import WhyServiceContent from '@/components/why-websites/WhyServiceContent'

interface Props {
  params: {
    service: string
  }
}

const serviceData: Record<string, any> = {
  'job-seekers': {
    title: 'Why Job Seekers Need Websites',
    category: 'Career Growth',
    icon: 'briefcase',
    gradient: 'from-blue-500 to-blue-700',
    reasons: [
      {
        title: 'Stand Out from Hundreds of Applicants',
        description: 'Your resume is one of 250+ applications. A portfolio website makes you memorable and shows you\'re serious about your career.',
        impact: '5x higher interview rate with portfolio websites',
      },
      {
        title: 'Show, Don\'t Just Tell',
        description: 'Instead of listing skills on paper, demonstrate them with live projects, case studies, and interactive examples.',
        impact: 'Visual proof beats text descriptions 100% of the time',
      },
      {
        title: 'Control Your Professional Narrative',
        description: 'LinkedIn profiles all look the same. Your website lets you tell your unique story and showcase personality.',
        impact: 'Recruiters spend 3-5 minutes on portfolios vs 6 seconds on resumes',
      },
      {
        title: 'Get Discovered by Recruiters',
        description: 'SEO-optimized portfolio websites appear in Google searches when companies look for talent in your field.',
        impact: 'Passive job opportunities while you sleep',
      },
      {
        title: 'Build Professional Credibility',
        description: 'A custom domain (yourname.com) signals professionalism and investment in your career.',
        impact: 'Higher perceived expertise and trustworthiness',
      },
    ],
    examples: [
      {
        scenario: 'Recent graduate with no website',
        problem: 'Sent 200+ applications, got 3 interviews. Skills buried in bullet points.',
        solution: 'Built portfolio website with projects and blog',
        result: '10 interviews in next 2 months. Landed $85k job.',
      },
      {
        scenario: 'Developer changing careers',
        problem: 'Couldn\'t prove new skills without work experience.',
        solution: 'Created portfolio with personal projects and contributions',
        result: 'Companies saw actual code. Got hired without traditional experience.',
      },
    ],
    cta: 'Ready to transform your job search with a professional portfolio?',
  },
  'businesses': {
    title: 'Why Businesses Need Websites',
    category: 'Business Growth',
    icon: 'office',
    gradient: 'from-purple-500 to-indigo-700',
    reasons: [
      {
        title: '81% of Customers Research Online Before Buying',
        description: 'Without a website, you\'re invisible to most potential customers who Google your business before visiting or calling.',
        impact: 'Missing 81% of potential customers',
      },
      {
        title: 'Compete with Larger Companies',
        description: 'A professional website levels the playing field. Small businesses can look as credible as Fortune 500 companies.',
        impact: 'Perceived size and credibility increase dramatically',
      },
      {
        title: '24/7 Lead Generation',
        description: 'Your website works while you sleep, answering questions and collecting inquiries around the clock.',
        impact: 'Generate leads outside business hours',
      },
      {
        title: 'Build Trust and Credibility',
        description: 'Customers judge business legitimacy by website quality. No website = questionable credibility in 2025.',
        impact: '75% judge credibility based on web design',
      },
      {
        title: 'Reach Beyond Local Area',
        description: 'Expand your market beyond word-of-mouth. Get found by customers searching online.',
        impact: 'Geographic and market expansion opportunities',
      },
    ],
    examples: [
      {
        scenario: 'Local service business',
        problem: 'Relied on word-of-mouth. Customers couldn\'t find hours or services online.',
        solution: 'Built website with SEO, services, and contact form',
        result: 'Leads doubled. Found in local searches. Revenue up 40%.',
      },
      {
        scenario: 'Retail store',
        problem: 'Competitors had websites. Looked less professional.',
        solution: 'Professional website with products and location',
        result: 'Customers research online before visiting. Sales increased.',
      },
    ],
    cta: 'Ready to grow your business with a professional website?',
  },
  'creators': {
    title: 'Why Content Creators Need Websites',
    category: 'Creator Economy',
    icon: 'video',
    gradient: 'from-pink-500 to-rose-700',
    reasons: [
      {
        title: 'Attract Premium Brand Partnerships',
        description: 'Brands want to work with professional creators. A website with media kit signals you\'re serious about sponsorships.',
        impact: 'Higher-paying brand deals and partnerships',
      },
      {
        title: 'Platform Independence',
        description: 'TikTok bans accounts. Instagram changes algorithms. Your website is yours forever.',
        impact: 'Audience ownership and security',
      },
      {
        title: 'Centralized Portfolio',
        description: 'One link for everything: content, analytics, testimonials, and contact. Makes pitching brands effortless.',
        impact: 'Professional presentation vs scattered social profiles',
      },
      {
        title: 'Monetization Beyond Platforms',
        description: 'Sell products, courses, memberships, or affiliate offers directly without platform fees.',
        impact: 'Diversified income streams',
      },
      {
        title: 'Email List Building',
        description: 'Build direct audience relationship. If platforms fail, you still have your community.',
        impact: 'True audience ownership and communication',
      },
    ],
    examples: [
      {
        scenario: 'Mid-tier influencer',
        problem: 'Brands asked for media kit. Had to send PDF via email.',
        solution: 'Built creator website with stats and portfolio',
        result: 'Tripled brand partnership inquiries. Higher rates.',
      },
      {
        scenario: 'Multi-platform creator',
        problem: 'Followers on TikTok, YouTube, Instagram. No central hub.',
        solution: 'Website aggregates all content and offers merch',
        result: 'Merchandise sales. Email list of 5k true fans.',
      },
    ],
    cta: 'Ready to level up your creator business with a professional hub?',
  },
  'freelancers': {
    title: 'Why Freelancers Need Websites',
    category: 'Freelance Success',
    icon: 'star',
    gradient: 'from-amber-500 to-orange-700',
    reasons: [
      {
        title: 'Escape Platform Fees',
        description: 'Upwork and Fiverr take 20% of your earnings. Direct clients through your website = 100% profit.',
        impact: 'Keep all your earnings, no platform commissions',
      },
      {
        title: 'Charge Premium Rates',
        description: 'Position yourself as an expert consultant, not a commodity freelancer competing on price.',
        impact: 'Justify 2-3x higher rates with professional presence',
      },
      {
        title: 'Build Authority and Trust',
        description: 'Blog posts, case studies, and testimonials establish expertise. Clients choose you over cheaper alternatives.',
        impact: 'Higher quality clients who value expertise',
      },
      {
        title: 'Get Found on Google',
        description: 'Rank for "web designer in [city]" or "React developer for hire" in search results.',
        impact: 'Passive client acquisition while you work',
      },
      {
        title: 'Showcase Your Best Work',
        description: 'Curate portfolio exactly how you want. Highlight projects that attract ideal clients.',
        impact: 'Attract better-fit, higher-paying projects',
      },
    ],
    examples: [
      {
        scenario: 'Designer on Fiverr',
        problem: 'Competing with thousands. Racing to bottom on price. 20% platform fees.',
        solution: 'Built personal brand website with portfolio and pricing',
        result: 'Direct clients pay 3x more. No platform fees. Selective clients.',
      },
      {
        scenario: 'Developer freelancer',
        problem: 'Hard to stand out on Upwork. Generic profile.',
        solution: 'Website with blog, projects, and case studies',
        result: 'Inbound leads from Google. Higher rates. Better projects.',
      },
    ],
    cta: 'Ready to build your freelance brand and attract premium clients?',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = serviceData[params.service]
  if (!data) return { title: 'Not Found' }

  return {
    title: `${data.title} | WebDevPro`,
    description: `Discover why ${data.category.toLowerCase()} needs professional websites to succeed.`,
  }
}

export default function WhyServicePage({ params }: Props) {
  const data = serviceData[params.service]
  
  if (!data) {
    notFound()
  }

  return (
    <>
      <BackButton />
      <WhyServiceHero data={data} />
      <WhyServiceContent data={data} />
    </>
  )
}

export async function generateStaticParams() {
  return [
    { service: 'job-seekers' },
    { service: 'businesses' },
    { service: 'creators' },
    { service: 'freelancers' },
  ]
}
