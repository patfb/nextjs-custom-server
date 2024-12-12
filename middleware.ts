// this is the special middleware file that next.js is watching for
// below is how to stack middleware functions so they all get called

import { NextRequest, NextResponse } from "next/server";
import { aLogger, bLogger, xkcdMiddleware } from "./middlewares";

const PUBLIC_FILE = /\.(.*)$/;
const countries = ["us", "uk", "au"];

export function middleware(req: NextRequest, res: NextResponse) {
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    // don't run middleware because these are internal calls or api calls
    return;
  }

  if (req.nextUrl.pathname.startsWith("/xkcd-app")) {
    return xkcdMiddleware(req); // have to actually return in order to get the middleware header added
  }

  if (req.nextUrl.pathname.startsWith("/a")) {
    aLogger(req);
  }

  if (req.nextUrl.pathname.startsWith("/b")) {
    bLogger(req);
  }

  console.log("meta", {
    pathname: req.nextUrl.pathname,
    search: req.nextUrl.search,
    url: req.url,
  });

  if (req.nextUrl.pathname.startsWith("/c")) {
    const randomCountry =
      countries[Math.floor(Math.random() * countries.length)];

    const redirectUrl = new URL(
      `/${randomCountry}${req.nextUrl.pathname}${req.nextUrl.search}`,
      req.url,
    );

    console.log("redirecting to new country", redirectUrl.toString());

    return NextResponse.redirect(redirectUrl);
  }
}
