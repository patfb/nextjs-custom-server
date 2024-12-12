import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const xkcdMiddleware = (request: NextRequest) => {
  console.log("################# xkcd middleware", {
    path: request.nextUrl.pathname,
    time: new Date(),
  });

  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-hello-from-middleware1", "hello1");

  // You can also set request headers in NextResponse.next
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-hello-from-middleware2`
  response.headers.set("x-hello-from-middleware2", "hello2");
  return response;
};
