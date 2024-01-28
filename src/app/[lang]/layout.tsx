import type { Metadata } from 'next';
import { Fira_Code as firaCodeFont } from 'next/font/google';
import '../globals.css';
import 'katex/dist/katex.min.css';
import { ThemeProvider } from './theme-provider';
import Footer from '@/components/layout/footer/Footer';
import Menu from '@/components/layout/menu/Menu';
import { getDictionary } from '@/dictionaries/getDictionary';
import FadeIn from '@/components/animation/FadeIn';

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
      <body className={`${firaCode.className} font-medium bg-background text-accent-foreground`}>
        <ThemeProvider attribute='class' defaultTheme="light" enableSystem>
          <main className='mx-auto max-w-5xl p-4 transition-colors cursor-default'>
            <FadeIn>
              <Menu dic={dic} />
              {children}
              <Footer textRights={dic.footer.textRights} />
            </FadeIn>
          </main>
        </ThemeProvider>
      </body>
    </html >
  );
}