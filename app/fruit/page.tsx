"use client";

import { useContext } from "react";
import { FruitContext } from "components/Fruit/FruitContext";
import { BigFruit } from "components/BigFruit";
import { BigColor } from "components/BigColor";

const FruitPage = (props) => {
  const fruit = useContext(FruitContext);

  return (
    <div>
      <h1>Fruit page!</h1>
      <p>fruit context is: {fruit}</p>
      <BigFruit />
      <BigColor />
    </div>
  );
};

export default FruitPage;
