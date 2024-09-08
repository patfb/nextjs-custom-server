import { type NextRequest } from "next/server";

export const aLogger = (request: NextRequest) => {
  console.log("A middleware", {
    path: request.nextUrl.pathname,
    time: new Date(),
  });
};
