import { Metadata } from 'next'
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout'

export const metadata: Metadata = {
  title: 'Portfolio Websites for Job Seekers | WebDevPro',
  description: 'Stand out in job searches with a professional portfolio website that showcases your skills, projects, and achievements.',
}

export default function PortfolioServicePage() {
  const serviceData = {
    title: 'Job Seeker Portfolio Websites',
    icon: '👨‍💼',
    gradient: 'from-blue-500 to-blue-700',
    
    whyMatters: {
      title: 'Why a Portfolio Website Matters for Job Seekers',
      problems: [
        'Your resume gets lost in hundreds of applications',
        'Recruiters can\'t see your actual work, just descriptions',
        'You have no way to showcase projects in detail',
        'LinkedIn profiles all look the same',
        'You can\'t control your professional narrative',
      ],
      importance: 'In today\'s competitive job market, a portfolio website is your digital proof of skills. It\'s the difference between "I can code" and "Here\'s what I\'ve built." Recruiters and hiring managers spend an average of 6 seconds on a resume, but will spend minutes exploring a well-designed portfolio.',
      withoutWebsite: 'Without a portfolio website, you\'re competing on paper alone. Your projects are buried in GitHub repos. Your skills are just bullet points. You miss opportunities to stand out and make a memorable impression on potential employers.',
    },

    features: {
      title: 'What You Get',
      items: [
        {
          category: 'Frontend Features',
          list: [
            'Modern, clean design that reflects your personal brand',
            'Interactive project showcase with images and descriptions',
            'About section highlighting your story and skills',
            'Resume/CV download functionality',
            'Contact form for direct communication',
            'Skills visualization with proficiency levels',
            'Testimonials and recommendations section',
            'Blog section to share knowledge (optional)',
            'Smooth animations and professional transitions',
            'Mobile-responsive design for all devices',
          ],
        },
        {
          category: 'Technical Features',
          list: [
            'Fast loading speeds (<2 seconds)',
            'SEO optimized to appear in Google searches',
            'Custom domain (yourname.com)',
            'SSL certificate for security',
            'Analytics to track visitors',
            'Social media integration',
            'GitHub/LinkedIn profile links',
            'Professional email integration',
          ],
        },
        {
          category: 'Content Strategy',
          list: [
            'Compelling hero section with clear value proposition',
            'Project case studies with problem-solution format',
            'Achievement highlights and metrics',
            'Professional photography recommendations',
            'Clear call-to-action for recruiters',
          ],
        },
      ],
    },

    benefits: {
      title: 'How It Helps Your Career',
      items: [
        {
          title: 'Stand Out in Applications',
          description: 'When you include your portfolio link in applications, you instantly differentiate yourself. Recruiters can see your work quality before even calling you.',
        },
        {
          title: 'Show, Don\'t Just Tell',
          description: 'Instead of saying "experienced in React," you show actual React projects with live demos. Visual proof is infinitely more powerful than text.',
        },
        {
          title: 'Professional Credibility',
          description: 'A custom domain portfolio signals professionalism and seriousness about your career. It shows you invest in yourself.',
        },
        {
          title: 'Control Your Narrative',
          description: 'Tell your story the way you want it told. Highlight what matters most and guide visitors through your best work.',
        },
        {
          title: '24/7 Job Search',
          description: 'Your portfolio works while you sleep. Recruiters can discover you through Google searches and explore your work anytime.',
        },
        {
          title: 'Confidence in Interviews',
          description: 'Walk into interviews knowing they\'ve already seen your work. Discussions become deeper and more meaningful.',
        },
      ],
    },

    examples: [
      {
        title: 'Professional Developer Portfolio',
        url: 'https://vinod-portfolio.pages.dev/',
        description: 'Clean, modern portfolio showcasing projects, skills, and professional journey. Features smooth animations and excellent user experience.',
        highlights: ['Project Showcase', 'Skills Section', 'Contact Form', 'Responsive Design'],
      },
      {
        title: 'Freelancer Personal Brand',
        url: 'https://vinod-bavage-portfolio.vercel.app/',
        description: 'Personal brand website for freelancers with portfolio, services, and client testimonials.',
        highlights: ['Service Offerings', 'Client Work', 'Professional Image', 'Call-to-Actions'],
      },
    ],

    whoIsFor: [
      'Recent graduates entering the job market',
      'Software developers and engineers',
      'Web designers and UI/UX professionals',
      'Data scientists showcasing projects',
      'Career changers building new portfolios',
      'Freelancers seeking full-time positions',
      'Students applying for internships',
      'Anyone wanting to stand out in job applications',
    ],

    process: [
      'Share your resume, projects, and career goals',
      'We design a custom layout that fits your brand',
      'You provide project details, images, and content',
      'We build and refine based on your feedback',
      'Launch with custom domain and SEO setup',
      'Ongoing support for updates as you grow',
    ],
  }

  return <ServiceDetailLayout data={serviceData} />
}
