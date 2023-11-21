import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maaaaax',
  description: 'Working with computers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='ml-4 mt-4 fixed top-0 z-40 bg-black'>
          <NavBar></NavBar>
        </div>
        {children}</body>
    </html>
  )
}
