"use client";

import { useState } from "react";
import { SportContext } from "./SportContext";

const SportContextProvider = ({ children, defaultSport = "baseball" }) => {
  const [sport, setSport] = useState(defaultSport);

  return (
    <SportContext.Provider value={{ sport, setSport }}>
      {children}
    </SportContext.Provider>
  );
};

export { SportContextProvider };
