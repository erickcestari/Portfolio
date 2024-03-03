import { NextRequest } from "next/server";
import Negotiator from 'negotiator';
import { locales } from "./dictionaries/locales";

function getLocale(request: NextRequest) {
  const defaultLocale = 'en';
  const userLanguages = request.headers.get('accept-language') ?? defaultLocale
  const headers = { 'accept-language': userLanguages };
  const languages = new Negotiator({ headers }).languages();

  return locales.find(x => languages.includes(x)) ?? defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.endsWith('svg') || pathname.startsWith("/cover") || pathname.endsWith('.xml')) return;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}`)
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
