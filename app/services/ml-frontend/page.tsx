import { Metadata } from 'next'
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout'

export const metadata: Metadata = {
  title: 'ML Project Frontend Development | WebDevPro',
  description: 'Beautiful, interactive interfaces for machine learning projects with real-time predictions and data visualization.',
}

export default function MLFrontendServicePage() {
  const serviceData = {
    title: 'ML Project Frontends',
    icon: '🤖',
    gradient: 'from-cyan-500 to-blue-700',
    
    whyMatters: {
      title: 'Why ML Projects Need Professional Frontends',
      problems: [
        'Amazing ML model but no way for users to interact with it',
        'Technical demos don\'t impress non-technical stakeholders',
        'Jupyter notebooks aren\'t suitable for presentations or deployment',
        'Can\'t showcase your ML work in a portfolio effectively',
        'Difficult to explain complex models without visual interfaces',
      ],
      importance: 'Your machine learning model is only as good as its interface. A beautiful, intuitive frontend makes your ML work accessible to users, impressive to employers, and professional for presentations. It\'s the difference between a research project and a real-world application.',
      withoutWebsite: 'Without a frontend, your ML work stays trapped in notebooks and code. Stakeholders can\'t test it, employers can\'t see it working, and users can\'t benefit from it. Your impressive technical work doesn\'t get the recognition it deserves.',
    },

    features: {
      title: 'ML-Specific Features',
      items: [
        {
          category: 'User Interface',
          list: [
            'Clean, intuitive input forms',
            'Real-time prediction display',
            'Interactive data visualization',
            'Model explanation section',
            'Example inputs for demonstration',
            'Results export functionality',
            'Mobile-responsive design',
            'Loading states and animations',
          ],
        },
        {
          category: 'Technical Integration',
          list: [
            'API integration with ML backend',
            'File upload for datasets',
            'Image/video upload for computer vision',
            'Chart.js or D3.js visualizations',
            'Error handling and validation',
            'Performance optimization',
            'Batch prediction support',
            'Results caching',
          ],
        },
        {
          category: 'Presentation Features',
          list: [
            'Model methodology explanation',
            'Dataset information display',
            'Accuracy and metrics showcase',
            'Use case examples',
            'Technical documentation',
            'About the project section',
            'GitHub repository link',
            'Download model info',
          ],
        },
      ],
    },

    benefits: {
      title: 'How It Elevates Your ML Work',
      items: [
        {
          title: 'Impress Employers & Clients',
          description: 'A polished frontend shows you can build complete applications, not just train models. It demonstrates full-stack capability and product thinking.',
        },
        {
          title: 'Make ML Accessible',
          description: 'Non-technical users can interact with your model without understanding the code. Stakeholders can see real results instantly.',
        },
        {
          title: 'Portfolio Standout',
          description: 'Live, interactive ML projects in your portfolio are infinitely more impressive than notebook links or code repositories.',
        },
        {
          title: 'Real-World Application',
          description: 'Transform research projects into usable tools. Show that your work has practical value beyond academic interest.',
        },
        {
          title: 'Easy Demonstration',
          description: 'Share a single URL for presentations, interviews, or stakeholder demos. No setup, no installation, just instant access.',
        },
        {
          title: 'User Feedback Loop',
          description: 'When users can actually test your model, you get valuable feedback to improve accuracy and usability.',
        },
      ],
    },

    examples: [
      {
        title: 'Leaf Disease Detection ML App',
        url: 'https://leaf-disease-detection-neon.vercel.app/',
        description: 'Interactive machine learning application with clean UI, image upload, real-time predictions, and disease information display. Perfect example of ML model deployment.',
        highlights: ['Image Upload', 'Real-time Predictions', 'Clean UI', 'Model Information'],
      },
    ],

    whoIsFor: [
      'Data scientists showcasing projects',
      'ML engineers building portfolios',
      'Students completing ML coursework',
      'Researchers making models accessible',
      'Startups deploying ML products',
      'Developers learning full-stack ML',
      'Kaggle competitors showcasing solutions',
      'AI/ML bootcamp graduates',
    ],

    process: [
      'Review your ML model and API requirements',
      'Design UI/UX for optimal user interaction',
      'Build frontend with model integration',
      'Test predictions and optimize performance',
      'Add visualizations and explanations',
      'Deploy and provide documentation for updates',
    ],
  }

  return <ServiceDetailLayout data={serviceData} />
}
