// this is the special middleware file that next.js is watching for
// below is how to stack middleware functions so they all get called

import { NextRequest, NextResponse } from "next/server";
import { aLogger, bLogger, xkcdMiddleware } from "./middlewares";

const PUBLIC_FILE = /\.(.*)$/;
// const countries = ["us", "uk", "au"];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(req: NextRequest, _res: NextResponse) {
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
}
