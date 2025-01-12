import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

// put other providers at this level instead of in index.tsx? index.tsx is the main nav for page props but not the root of the app

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
