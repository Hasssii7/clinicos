import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ClinicOS - Digital Healthcare Management for Pakistani Clinics',
  description: 'Transform your healthcare clinic with our mobile-first SaaS platform. Patient management, WhatsApp integration, FBR-compliant billing, and AI-powered insights designed for Pakistani clinics.',
  keywords: 'healthcare management, clinic software, Pakistan, EMR, patient management, WhatsApp integration, FBR compliant, medical billing',
  authors: [{ name: 'ClinicOS Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  )
}