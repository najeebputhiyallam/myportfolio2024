import { Metadata } from 'next'
import { Inter } from "next/font/google"
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: { 
    default: "Najeeb Puthiyapattillath - Creative Web Designer Based in Dubai",
    template: "%s | Najeeb",
  },
  description: 'Next.js Developer / Web Developer / Front End Developer / Elementor Expert / Web Designer - Based in Dubai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
