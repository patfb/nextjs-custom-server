"use client";

import { useContext } from "react";
import { FruitContext } from "../../components/Fruit/FruitContext";

const FruitPage = (props) => {
  const fruit = useContext(FruitContext);

  return (
    <div>
      <h1>Fruit page!</h1>
      <p>fruit context is: {fruit}</p>
    </div>
  );
};

export default FruitPage;
