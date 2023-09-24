import NavigationBar from '@/components/NavigationBar'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono, } from 'next/font/google'
import { Suspense } from 'react'
import Loading from './Loading'
import TakeTheme from '@/components/theme/TakeTheme'

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
    <html lang="en" className='h-screen'>
      <body className={`${roboto.className} bg-gray-100 dark:bg-zinc-900 text-black dark:text-white h-full`}> 
        <main className='h-full'>
          <TakeTheme />
          <NavigationBar />
          <Suspense fallback={ <Loading />}>
            <div className="container mx-auto h-full p-8">
              {children}
            </div>
          </Suspense>
        </main>
      </body>
    </html >
  )
}
