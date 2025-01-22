import "@root/global.css";
import { FruitContextProvider } from "components/Fruit/FruitContextProvider";
import { delay } from "lib/delay";
import { SportContextProvider } from "components/SportContext";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { fruit, sport } = await delay(1_000).then(() => ({
    fruit: "async bananas",
    sport: "app_sport_" + new Date().toISOString(),
  }));

  return (
    <html lang="en">
      <SportContextProvider value={sport}>
        <FruitContextProvider fruit={fruit}>
          <body>
            <main>{children}</main>
          </body>
        </FruitContextProvider>
      </SportContextProvider>
    </html>
  );
}
