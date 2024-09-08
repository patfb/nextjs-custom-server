import { type NextRequest } from "next/server";

export const bLogger = (request: NextRequest) => {
  console.log("B middleware", {
    path: request.nextUrl.pathname,
    time: new Date(),
  });
};
