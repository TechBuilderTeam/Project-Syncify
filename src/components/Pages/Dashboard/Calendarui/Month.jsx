import React, { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../../../../context/GlobalContext";
import Day from "./Day"; // Adjust the path as needed

const Calendar = ({ timelineEvents }) => {
  const { year, monthIndex } = useContext(GlobalContext);

  const generateMonth = (monthIndex, year) => {
    const firstDayOfMonth = dayjs(new Date(year, monthIndex, 1));
    const lastDayOfMonth = dayjs(new Date(year, monthIndex + 1, 0));
    const daysInMonth = [];

    let currentDay = firstDayOfMonth.startOf("week");

    while (currentDay.isBefore(lastDayOfMonth.endOf("week"))) {
      daysInMonth.push(currentDay);
      currentDay = currentDay.add(1, "day");
    }

    return daysInMonth;
  };

  const daysInMonth = generateMonth(monthIndex, year);

  return (
    <div className="grid grid-cols-7 w-full  gap-1">
      {daysInMonth.map((day, i) => (
        <Day
          key={i}
          day={day}
          rowIdx={Math.floor(i / 7)}
          timelineEvents={timelineEvents}
        />
      ))}
    </div>
  );
};

export default Calendar;
