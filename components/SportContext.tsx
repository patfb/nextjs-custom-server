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

const SportContextProvider = ({ children, sport = "DEFAULT SPORT" }) => {
  const [value, setValue] = useState(sport);

  return (
    <SportContext.Provider value={{ value, setValue }}>
      {children}
    </SportContext.Provider>
  );
};

export { SportContextProvider, SportContext };
