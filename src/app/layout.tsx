import NavigationBar from '@/components/NavigationBar'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'

const inter = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Erick Cestari Portfolio',
  description: 'Erick Cestari portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-100 dark:bg-zinc-900 text-black dark:text-white">
        <main>
          <NavigationBar />
          <div className="container mx-auto p-8">
            {children}
          </div>
        </main>
      </body>
    </html >
  )
}
