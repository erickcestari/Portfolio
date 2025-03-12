import type { Metadata } from 'next';
import { Fira_Code as firaCodeFont } from 'next/font/google';
import '../globals.css';
import 'katex/dist/katex.min.css';
import { ThemeProvider } from './theme-provider';
import Footer from '@/components/layout/footer/Footer';
import Menu from '@/components/layout/menu/Menu';
import { getDictionary } from '@/dictionaries/getDictionary';
import FadeIn from '@/components/animation/FadeIn';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { locales } from '@/dictionaries/locales';
import { DOMAIN } from '@/utils/domain';

interface LangParamsType {
  lang: string
}

const firaCode = firaCodeFont({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Erick Cestari Portfolio',
  description: 'Erick Cestari portfolio',
  openGraph: {
    type: 'website',
    url: DOMAIN,
    title: 'Erick Cestari Portfolio',
    description: 'Erick Cestari portfolio',
  },
  other: {
    "google-site-verification": "zOCg1hogkXOKK4nhPfjLxXkHK1_FZxO7YgQg1RH4tF4",
  }
}

export const dynamic = "force-static";

export const revalidate = 60;

export async function generateStaticParams() {
  const langs = locales.map((locale) => ({
    lang: locale
  }));

  return langs
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: LangParamsType
}>) {
  const { lang } = await params;
  const dic = await getDictionary(lang);

  return (
    <html lang={dic.locale} suppressHydrationWarning>
      <SpeedInsights />
      <body className={`${firaCode.className} font-medium bg-background text-primary`}>
        <ThemeProvider attribute='class' defaultTheme="light" enableSystem>
          <main className='flex flex-col justify-between mx-auto max-w-5xl p-4 pb-0 transition-colors cursor-default min-h-screen'>
            <div>
              <FadeIn>
                <Menu dic={dic} />
                {children}
              </FadeIn>
            </div>
            <Footer textRights={dic.footer.textRights} />
          </main>
          <div className='fixed bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-background h-16' />
        </ThemeProvider>
      </body>
    </html >
  );
}
