// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: '/contact/thankyou'
};

export function middleware (request) {
  try {
    const requestURL = new URL (request.nextUrl.href);
    const refererURL = new URL (request.headers.get ("referer") || '');

    if (refererURL.origin !== requestURL.origin) {
      throw new Error ("origin mismatch");
    }
  } catch {
    // executed if one of the URLs fails to parse, or if origin doesn't match
    return NextResponse.redirect (process.env.SITEBASEURL);
  }

  return NextResponse.next();
}

