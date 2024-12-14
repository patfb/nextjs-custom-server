"use client";

import { ColorContext } from "./ColorContext";

const ColorContextProvider = ({ color = "blue", children }) => {
  return (
    <ColorContext.Provider value={color}>{children}</ColorContext.Provider>
  );
};

export { ColorContextProvider };
