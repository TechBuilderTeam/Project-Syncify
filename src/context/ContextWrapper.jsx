import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

const ContextWrapper = (props) => {
  const [state, setState] = useState({
    year: dayjs().year(),
    monthIndex: dayjs().month(),
  });

  const setMonthIndex = (index) => {
    if (index > 11) {
      setState((prevState) => ({ year: prevState.year + 1, monthIndex: 0 }));
    } else if (index < 0) {
      setState((prevState) => ({ year: prevState.year - 1, monthIndex: 11 }));
    } else {
      setState((prevState) => ({ ...prevState, monthIndex: index }));
    }
  };

  return (
    <GlobalContext.Provider value={{ ...state, setMonthIndex }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
