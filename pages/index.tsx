import Link from "next/link";
import { delay } from "lib/delay";
import { ColorContextProvider } from "components/Color/ColorContextProvider";
import { BigColor } from "components/BigColor";
import { FruitContextProvider } from "components/Fruit/FruitContextProvider";
import { BigFruit } from "components/BigFruit";
import Login from "components/Login";
import { SportContext } from "components/SportContext";
import { useContext } from "react";
import { randomFromArray } from "lib/randomFromArray";

// TODO pick up here
// https://react.dev/learn/scaling-up-with-reducer-and-context

export const getServerSideProps = async (context) => {
  // context contains the context of the initial request. we can access request data here
  // we can get the locale from the request here

  const userAgent = context.req.headers["user-agent"];

  console.log("userAgent", userAgent);
  console.log("FETCHING getServerSideProps in pages/index.tsx");

  const { color, fruit, sport } = await delay(1_500).then(() => {
    const serverTime = new Date().toISOString();

    return {
      color: `cyan_${serverTime}`,
      fruit: `cranberries_${serverTime}`,
      sport: `ping pong_${serverTime}`,
    };
  });

  return { props: { color, fruit, sport, device: userAgent } };
};

const sportOptions = ["basketball", "football", "soccer", "tennis"];

export default function MainNavigation(props) {
  console.log("MainNavigation props are", props);

  const { value: sportValue, setValue: setSportValue } =
    useContext(SportContext);

  // setSportValue(props.sport);

  return (
    <main>
      <ColorContextProvider color={props.color}>
        <FruitContextProvider fruit={props.fruit}>
          <h1>pages nav</h1>
          <ul>
            <p>APP ROUTER</p>
            <li>
              <Link href="/fruit">/fruit (App Router)</Link>
            </li>
            <li>
              <Link href="/sport">/sport (App Router)</Link>
            </li>
            <li>
              <Link href="/xkcd-app/103">/xkcd-app/103 (App Router)</Link>
            </li>
            <p>PAGES ROUTER</p>
            <li>
              <Link href="/color">/color (Pages Router)</Link>
            </li>
            <li>
              <Link href="/xkcd/102">/xkcd/102 (Pages Router)</Link>
            </li>
            <BigColor />
            <BigFruit />
            <p>thanks for visiting from: {props.device}</p>
            <p>color: {props.color}</p>
            <p>fruit: {props.fruit}</p>
            <p>sport: {sportValue}</p>
            <button
              onClick={() => {
                setSportValue(
                  `${randomFromArray(sportOptions)} - ${new Date().toISOString()}`,
                );
              }}
            >
              Get random sport
            </button>
          </ul>
          <Login />
        </FruitContextProvider>
      </ColorContextProvider>
    </main>
  );
}
