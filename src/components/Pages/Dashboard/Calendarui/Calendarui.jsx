import React, { useState, useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import CalendarHeader from "./CalendarHeader";
import Month from "./Month";
import { getMonth } from "../../../../Utils/Util";
import GlobalContext from "../../../../context/GlobalContext";
const Calendarui = () => {
  console.log("getmonth", getMonth(3));
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <div className="h-screen flex flex-col">
      <CalendarHeader />
      <flex className="flex-1">
        <Sidebar />
        <Month month={currentMonth} />
      </flex>
    </div>
  );
};

export default Calendarui;
