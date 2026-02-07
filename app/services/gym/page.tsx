import { Metadata } from 'next'
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout'

export const metadata: Metadata = {
  title: 'Gym & Fitness Websites | WebDevPro',
  description: 'Professional fitness business websites with class schedules, trainer profiles, and online booking.',
}

export default function GymServicePage() {
  const serviceData = {
    title: 'Gym & Fitness Websites',
    icon: '💪',
    gradient: 'from-orange-500 to-red-700',
    
    whyMatters: {
      title: 'Why Fitness Businesses Need Professional Websites',
      problems: [
        'Potential members can\'t easily find class schedules and pricing',
        'No online presence means missing millennial and Gen-Z members',
        'Competitors with websites appear more professional',
        'Manual booking and payment processes waste time',
        'Unable to showcase trainer expertise and facility quality',
      ],
      importance: 'The fitness industry is highly competitive. Members research gyms online before visiting. A professional website with class schedules, trainer bios, and online booking makes it easy for prospects to choose your gym over competitors. It\'s the difference between looking like a local gym and a professional fitness brand.',
      withoutWebsite: 'Without a website, you lose members to gyms they can research and book online. You spend hours answering the same questions about schedules and pricing. Your gym appears outdated, and you miss the entire demographic that expects digital convenience.',
    },

    features: {
      title: 'Fitness-Focused Features',
      items: [
        {
          category: 'Member Experience',
          list: [
            'Class schedule with real-time updates',
            'Online class booking system',
            'Membership plan comparison',
            'Trainer profiles with specializations',
            'Virtual tour or facility photos',
            'Member testimonials and transformations',
            'Free trial class signup',
            'Fitness blog and tips',
          ],
        },
        {
          category: 'Business Management',
          list: [
            'Online membership registration',
            'Payment integration (optional)',
            'Member login portal',
            'Booking management dashboard',
            'Email notifications for bookings',
            'Waitlist management',
            'Attendance tracking',
            'Analytics on popular classes',
          ],
        },
        {
          category: 'Marketing Tools',
          list: [
            'SEO for local fitness searches',
            'Social media integration',
            'Email newsletter signup',
            'Promotional banners',
            'Success stories showcase',
            'Referral program integration',
            'Google My Business connection',
            'Mobile-optimized for on-the-go browsing',
          ],
        },
      ],
    },

    benefits: {
      title: 'How It Grows Your Fitness Business',
      items: [
        {
          title: 'Attract More Members',
          description: 'Show up in local Google searches when people look for gyms. A professional website makes your gym the obvious choice for prospects.',
        },
        {
          title: 'Streamline Operations',
          description: 'Online booking reduces phone calls and no-shows. Members can check schedules and book classes anytime, freeing up your staff.',
        },
        {
          title: 'Showcase Your Trainers',
          description: 'Highlight trainer certifications, specializations, and success stories. Help members find the perfect fit for their goals.',
        },
        {
          title: 'Build Community Online',
          description: 'Share member transformations, fitness tips, and class highlights. Create engagement beyond the gym floor.',
        },
        {
          title: 'Reduce Administrative Work',
          description: 'Automated booking, payment tracking, and member management save hours every week. Focus on training, not paperwork.',
        },
        {
          title: 'Professional Branding',
          description: 'Stand out from basement gyms and outdated facilities. Position yourself as a premium, modern fitness destination.',
        },
      ],
    },

    examples: [
      {
        title: 'Professional Fitness Website Example',
        url: 'https://vinod-portfolio.pages.dev/',
        description: 'Example of professional service business presentation that can be adapted for fitness industry with scheduling and member features.',
        highlights: ['Professional Design', 'Service Display', 'Contact Integration', 'Mobile Responsive'],
      },
    ],

    whoIsFor: [
      'Gyms and fitness centers',
      'Personal trainers building their brand',
      'Yoga and pilates studios',
      'CrossFit boxes',
      'Martial arts dojos',
      'Dance studios',
      'Wellness centers',
      'Fitness bootcamp organizers',
    ],

    process: [
      'Understand your facility, classes, and target members',
      'Design around your brand and fitness philosophy',
      'Setup class scheduling and booking system',
      'Create trainer profiles and service pages',
      'Integrate payment and member management (if needed)',
      'Launch with local SEO optimization and social integration',
    ],
  }

  return <ServiceDetailLayout data={serviceData} />
}
