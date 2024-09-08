import { type NextRequest } from "next/server";

export const defaultLogger = (request: NextRequest) => {
  console.log("default middleware", {
    path: request.nextUrl.pathname,
    time: new Date(),
  });
};
