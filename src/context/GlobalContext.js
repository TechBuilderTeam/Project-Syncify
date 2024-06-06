import React from "react";

const GlobalContext = React.createContext({
  year: 2024,
  monthIndex: 0,
  setMonthIndex: (index) => {},
});

export default GlobalContext;
