"use client";

import { useContext } from "react";
import { SportContext } from "components/SportContext";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SportPage = (_props) => {
  const { value, setValue } = useContext(SportContext);

  console.log("app/sport/page.tsx sport is", value);

  return (
    <div>
      <h1>Sport page!</h1>
      <p>sport context is: {value}</p>
      <button
        onClick={() => {
          setValue("app_sportPage_" + new Date().toISOString());
        }}
      >
        Update Sport
      </button>
      <p>
        <Link href="/">home</Link>
      </p>
    </div>
  );
};

export default SportPage;
