import { NextRequest } from "next/server";
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'pt'];

function getLocale(request: NextRequest) {
  const headers = { 'accept-language': 'en-US,en;q=0.5' };
  const languages = new Negotiator({ headers }).languages();
  const defaultLocale = 'en-US';

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  if (pathname.includes('svg')) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
};
