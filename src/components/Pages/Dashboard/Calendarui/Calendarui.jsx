import React, { useState, useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import CalendarHeader from "./CalendarHeader";
import Month from "./Month";
import { getMonth } from "../../../../Utils/Util";
import GlobalContext from "../../../../context/GlobalContext";

const Calendarui = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [timelineEvents, setTimelineEvents] = useState([]);
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    fetch(
      "https://projectsyncifyapi.onrender.com/workspace/get-timeline-dates/8/"
    )
      .then((response) => response.json())
      .then((data) => setTimelineEvents(data))
      .catch((error) => console.error("Error fetching timeline data:", error));
  }, []);

  return (
    <div className="h-full flex flex-col">
      <CalendarHeader />
      <div className="flex ">
        <Month month={currentMonth} timelineEvents={timelineEvents} />
      </div>
    </div>
  );
};

export default Calendarui;
