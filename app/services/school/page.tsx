import { Metadata } from 'next'
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout'

export const metadata: Metadata = {
  title: 'School Management Systems | WebDevPro',
  description: 'Complete digital transformation for schools with student databases, admin panels, and parent communication tools.',
}

export default function SchoolServicePage() {
  const serviceData = {
    title: 'School Websites & Management Systems',
    icon: '🎓',
    gradient: 'from-green-500 to-teal-700',
    
    whyMatters: {
      title: 'Why Schools Need Digital Systems',
      problems: [
        'Managing student records manually is time-consuming and error-prone',
        'Parents struggle to get updates and communicate with teachers',
        'Paper-based systems are inefficient and hard to search',
        'No centralized place for announcements, events, and resources',
        'Difficult to track attendance, grades, and performance',
      ],
      importance: 'Modern schools need modern tools. A comprehensive school management system streamlines operations, improves communication with parents, and creates a professional digital presence. It saves administrators hours every week and provides transparency that parents expect in 2025.',
      withoutWebsite: 'Without a digital system, schools waste countless hours on manual paperwork, struggle with parent communication, and appear outdated to prospective families. Student data is vulnerable, and administrative inefficiencies hurt the overall educational experience.',
    },

    features: {
      title: 'Complete School System',
      items: [
        {
          category: 'Student Management',
          list: [
            'Student database with profiles',
            'Attendance tracking system',
            'Grade and performance records',
            'Class assignment management',
            'Student ID generation',
            'Photo and document storage',
            'Fee payment tracking',
            'Report card generation',
          ],
        },
        {
          category: 'Admin Features',
          list: [
            'Secure admin dashboard',
            'Teacher management portal',
            'Class scheduling system',
            'Event and calendar management',
            'Announcement posting',
            'Document management system',
            'Analytics and reporting',
            'Role-based access control',
          ],
        },
        {
          category: 'Parent Portal',
          list: [
            'Parent login accounts',
            'View child\'s attendance & grades',
            'Communication with teachers',
            'Event notifications',
            'Fee payment status',
            'Download report cards',
            'School announcements',
            'Calendar integration',
          ],
        },
      ],
    },

    benefits: {
      title: 'How It Transforms Your School',
      items: [
        {
          title: 'Save Administrative Time',
          description: 'Automate repetitive tasks like attendance, report generation, and announcements. Free up staff to focus on education, not paperwork.',
        },
        {
          title: 'Improve Parent Communication',
          description: 'Parents get instant updates on their child\'s progress, attendance, and school events. No more phone tag or missed messages.',
        },
        {
          title: 'Professional Image',
          description: 'A modern website and digital system show prospective parents that your school is forward-thinking and well-organized.',
        },
        {
          title: 'Data Security & Backup',
          description: 'Student records are securely stored in the cloud with automatic backups. No more lost files or damaged paper records.',
        },
        {
          title: 'Easy Information Access',
          description: 'Find any student record, grade, or document in seconds with powerful search. No more digging through filing cabinets.',
        },
        {
          title: 'Scalable Growth',
          description: 'As your school grows, the system grows with you. Add more students, classes, and features without starting over.',
        },
      ],
    },

    examples: [
      {
        title: 'Matrubharati School Portal',
        url: 'https://matrubharati.vercel.app/',
        description: 'Comprehensive school management system with student database, admin panel, parent portal, and communication tools. Features modern UI and efficient workflows.',
        highlights: ['Student Database', 'Admin Dashboard', 'Parent Access', 'Event Management'],
      },
    ],

    whoIsFor: [
      'Primary and secondary schools',
      'Private educational institutions',
      'Coaching centers and academies',
      'Preschools and kindergartens',
      'Vocational training centers',
      'School administrators seeking efficiency',
      'Educational organizations going digital',
      'New schools establishing online presence',
    ],

    process: [
      'Discuss your school\'s specific needs and workflows',
      'We design the database structure and user interface',
      'Setup admin accounts, roles, and permissions',
      'Import existing student data (if applicable)',
      'Train staff on using the system',
      'Launch and provide ongoing support for updates',
    ],
  }

  return <ServiceDetailLayout data={serviceData} />
}
