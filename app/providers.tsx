"use client";

import { SportContextProvider } from "components/SportContext";

export function Providers({ children }) {
  return <SportContextProvider>{children}</SportContextProvider>;
}
