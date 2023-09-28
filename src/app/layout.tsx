import NavigationBar from '@/components/nav/NavigationBar'
import type { Metadata } from 'next'
import { Roboto_Mono, } from 'next/font/google'
import { Suspense } from 'react'
import Loading from './Loading'
import './globals.css'
import { ThemeProvider } from './theme-provider'
import Footer from '@/components/footer/Footer'

const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
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
      <body className={`${roboto.className} bg-gray-200 dark:bg-zinc-900 text-zinc-900 dark:text-gray-200 h-full`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className='h-full'>
            <NavigationBar />
            <Suspense fallback={<Loading />}>
              <div className="container mx-auto h-full p-4 lg:p-8">
                {children}
              </div>
            </Suspense>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html >
  )
}
