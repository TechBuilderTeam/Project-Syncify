import { useState, useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import CalendarHeader from "./CalendarHeader";
import Month from "./Month";
import { getMonth } from "../../../../Utils/Util";
import GlobalContext from "../../../../context/GlobalContext";
import { useParams } from "react-router-dom";
const Calendarui = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [timelineEvents, setTimelineEvents] = useState([]);
  const { monthIndex } = useContext(GlobalContext);

  const { id } = useParams();
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    fetch(
      `https://projectsyncifyapi.onrender.com/workspace/get-timeline-dates/${id}/`
    )
      .then((response) => response.json())
      .then((data) => setTimelineEvents(data))
      .catch((error) => console.error("Error fetching timeline data:", error));
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <CalendarHeader />
      <div className="flex flex-1">
        <Sidebar />
        <Month month={currentMonth} timelineEvents={timelineEvents} />
      </div>
    </div>
  );
};

export default Calendarui;
