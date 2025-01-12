import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { SportContextProvider } from "components/SportContext";

// put other providers at this level instead of in index.tsx? index.tsx is the main nav for page props but not the root of the app

export default function MyApp({
  Component,
  pageProps: { session, sport, ...pageProps },
}: AppProps) {
  console.log("MyApp pageProps", { session, sport, ...pageProps });

  return (
    <SessionProvider session={session}>
      <SportContextProvider sport={sport}>
        <Component {...pageProps} />
      </SportContextProvider>
    </SessionProvider>
  );
}
