import "../global.css";
import { FruitContextProvider } from "components/Fruit/FruitContextProvider";
import { delay } from "../lib/delay";
import { SportContextProvider } from "components/Sport/SportContextProvider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const favoriteFruit = await delay(1_000).then(() => "async bananas");

  return (
    <html lang="en">
      <SportContextProvider defaultSport="app router">
        <FruitContextProvider fruit={favoriteFruit}>
          <body>{children}</body>
        </FruitContextProvider>
      </SportContextProvider>
    </html>
  );
}
