"use client";

import { useContext } from "react";
import { ColorContext } from "components/Color/ColorContext";
import { BigColor } from "components/BigColor";
import { ColorContextProvider } from "components/Color/ColorContextProvider";
import { BigFruit } from "components/BigFruit";

export default function Color(props) {
  const color = useContext(ColorContext);

  console.log("props inside color are", props);

  return (
    <div>
      <h1>Color page!</h1>
      <p>color context is: {color}</p>
      <BigFruit />
      <ColorContextProvider>
        <BigColor />
      </ColorContextProvider>
      <ColorContextProvider color="green">
        <BigColor />
      </ColorContextProvider>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  console.log("pages/color/index.tsx getServerSideProps context", context);

  // Fetch data from external API
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();

  console.log("repo is", repo);

  // Pass data to the page via props
  return { props: { data: JSON.stringify(repo) } };
};
