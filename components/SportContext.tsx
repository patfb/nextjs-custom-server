"use client";

import { createContext, useState } from "react";

interface SportContextInterface {
  value: string;
  setValue: (input: string) => void;
}

const SportContext = createContext<SportContextInterface>({
  value: "DEFAULT",
  setValue: () => {},
});

const SportContextProvider = ({
  children,
  value: inputValue = "DEFAULT SPORT",
}) => {
  const [value, setValue] = useState(inputValue);

  return (
    <SportContext.Provider value={{ value, setValue }}>
      {children}
    </SportContext.Provider>
  );
};

export { SportContextProvider, SportContext };
