import './globals.css'
import { Inter } from 'next/font/google'
import {Footer, Navbar} from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Catalejo',
  description: 'Encuentra donde esta todo lo que necesitas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
