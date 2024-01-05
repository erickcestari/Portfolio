import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './theme-provider';
import Footer from '@/components/layout/footer/Footer';
import Menu from '@/components/layout/menu/Menu';
import { dir } from 'i18next'
import { languages } from '@/i18n/settings';

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Erick Cestari Portfolio',
  description: 'Erick Cestari portfolio',
  openGraph: {
    type: 'website',
    url: 'https://erick-cestari-portfolio.vercel.app/',
    title: 'Erick Cestari Portfolio',
    description: 'Erick Cestari portfolio',
  },
  other: {
    "google-site-verification": "zOCg1hogkXOKK4nhPfjLxXkHK1_FZxO7YgQg1RH4tF4",
  }
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: Readonly<{
  children: React.ReactNode,
  params: {lng: string}
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={`${poppins.className} font-medium bg-gray-200 dark:bg-zinc-900 text-zinc-900 dark:text-gray-200  max-w-5xl p-4 mx-auto`}>
        <ThemeProvider attribute='class' defaultTheme="ligth" enableSystem>
          <main>
            <Menu />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html >
  );
}