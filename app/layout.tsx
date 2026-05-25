import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'JURISLAB | Liga Acadêmica de Direito - UNIP Teresina',
  description: 'Liga Acadêmica de Direito da Faculdade UNIP Teresina-PI. Promovendo conhecimento, pesquisa e extensão jurídica.',
  keywords: ['direito', 'liga acadêmica', 'UNIP', 'Teresina', 'jurídico', 'OAB', 'estudos jurídicos'],
  icons: {
    icon: [
      {
        url: '/images/jurislab-logo.jpeg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
