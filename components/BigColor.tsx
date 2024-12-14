import { useContext } from "react";
import { ColorContext } from "./Color/ColorContext";

const BigColor = () => {
  const color = useContext(ColorContext);

  return <h1>BIG COLOR: {color}</h1>;
};

export { BigColor };
