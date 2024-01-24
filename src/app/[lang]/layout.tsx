import type { Metadata } from 'next';
import { Fira_Code as firaCodeFont } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from './theme-provider';
import Footer from '@/components/layout/footer/Footer';
import Menu from '@/components/layout/menu/Menu';
import { getDictionary } from '@/dictionaries/getDictionary';
import FadeInMotion from '@/components/animation/FadeInMotion';

interface LangParamsType {
  lang: string
}

const firaCode = firaCodeFont({ weight: ["400", "500", "700"], subsets: ["latin"] });

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

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: LangParamsType
}>) {
  const dic = await getDictionary(params.lang)

  return (
    <html lang={dic.locale} suppressHydrationWarning>
      <body className={`${firaCode.className} font-medium bg-gray-200 dark:bg-zinc-900 text-zinc-900 dark:text-gray-200`}>
        <ThemeProvider attribute='class' defaultTheme="ligth" enableSystem>
          <main className='mx-auto max-w-5xl p-4 transition-colors cursor-default'>
            <FadeInMotion>
              <Menu dic={dic} />
              {children}
              <Footer textRights={dic.footer.textRights} />
            </FadeInMotion>
          </main>
        </ThemeProvider>
      </body>
    </html >
  );
}