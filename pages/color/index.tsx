"use client";

import { useContext } from "react";
import { ColorContext } from "../../components/Color/ColorContext";
import { BigColor } from "../../components/BigColor";
import { ColorContextProvider } from "../../components/Color/ColorContextProvider";

const Color = (props) => {
  const color = useContext(ColorContext);

  return (
    <div>
      <h1>Color page!</h1>
      <p>color context is: {color}</p>
      <ColorContextProvider>
        <BigColor />
      </ColorContextProvider>
      <ColorContextProvider color="green">
        <BigColor />
      </ColorContextProvider>
    </div>
  );
};

export default Color;
