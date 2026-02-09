import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProWebDev | Professional Web Development Services That Deliver Results',
  description: 'Transform your business with professional websites that drive growth. Modern design, powerful systems, and exceptional user experiences. Trusted by 10+ clients worldwide.',
  keywords: 'web development, professional websites, portfolio websites, business websites, web design, full-stack development, ProWebDev',
  authors: [{ name: 'ProWebDev' }],
  openGraph: {
    title: 'ProWebDev - Professional Web Development Services',
    description: 'Transform Your Business with Professional Websites That Actually Work',
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
