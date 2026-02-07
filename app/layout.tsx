import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Premium Web Development Services | Professional Websites That Work',
  description: 'Modern, scalable, and professional websites with clean UI, strong backend systems, and real business impact. 10+ projects delivered.',
  keywords: 'web development, professional websites, portfolio websites, business websites, web design, full-stack development',
  authors: [{ name: 'Premium Web Dev' }],
  openGraph: {
    title: 'Premium Web Development Services',
    description: 'We Build Websites That Actually Work',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
