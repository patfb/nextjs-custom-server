"use client";

import { useContext } from "react";
import { SportContext } from "components/Sport/SportContext";

const SportPage = (props) => {
  // @ts-expect-error
  const { sport, setSport } = useContext(SportContext);

  console.log("sportPage sport is", sport);

  return (
    <div>
      <h1>Sport page!</h1>
      <p>sport context is: {sport}</p>
      <button
        onClick={() => {
          setSport(new Date().toISOString());
        }}
      >
        Update Sport
      </button>
    </div>
  );
};

export default SportPage;
