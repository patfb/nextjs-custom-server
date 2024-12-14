import { useContext } from "react";
import { FruitContext } from "./Fruit/FruitContext";

const BigFruit = () => {
  const fruit = useContext(FruitContext);

  return <h1>BIG FRUIT: {fruit}</h1>;
};

export { BigFruit };
