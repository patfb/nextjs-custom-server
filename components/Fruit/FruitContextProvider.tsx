"use client";

import { FruitContext } from "./FruitContext";

const FruitContextProvider = ({ fruit = "apples", children }) => {
  return (
    <FruitContext.Provider value={fruit}>{children}</FruitContext.Provider>
  );
};

export { FruitContextProvider };
