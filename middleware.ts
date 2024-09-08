import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { aLogger, bLogger, defaultLogger } from "./middlewares";

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/_next")) {
    defaultLogger(request);
  }

  if (request.nextUrl.pathname.startsWith("/a")) {
    aLogger(request);
  }

  if (request.nextUrl.pathname.startsWith("/b")) {
    bLogger(request);
  }
}