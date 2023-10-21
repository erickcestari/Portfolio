import NavigationBar from '@/components/nav/NavigationBar'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Suspense } from 'react'
import Loading from './Loading'
import './globals.css'
import { ThemeProvider } from './theme-provider'
import Footer from '@/components/footer/Footer'

const roboto = Roboto({
  weight: ['100', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

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
      <body className={`bg-gray-200 dark:bg-zinc-900 text-zinc-900 dark:text-gray-200 h-full`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className={`${roboto.className} md:px-10 lg:px-40`}>
            <NavigationBar />
            <div className={`mx-auto h-full p-8 py-14`}>
              {children}
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html >
  )
}
