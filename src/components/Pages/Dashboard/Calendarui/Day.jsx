import React from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

const Day = ({ day, rowIdx, timelineEvents }) => {
  const eventsOnDay = timelineEvents.filter((event) =>
    dayjs(day).isBetween(
      dayjs(event.start_Date),
      dayjs(event.end_Date),
      null,
      "[]"
    )
  );

  const colors = ["#0c01a1", "#73e9fe"];

  return (
    <div className="relative border border-gray-200 flex flex-col h-32">
      <header className="flex flex-col justify-center items-center relative">
        {rowIdx === 0 && (
          <div className="w-full text-center">
            <p className="text-sm mt-1 border-b border-gray-300">
              {day?.format("ddd").toUpperCase()}
            </p>
          </div>
        )}
        <p className="text-sm px-2 pt-1 text-center">{day?.format("DD")}</p>
      </header>
      <div className="relative flex flex-col items-center mt-1 flex-grow">
        {eventsOnDay.map((event, index) => (
          <div
            key={index}
            className="w-[70%] h-2 opacity-80"
            style={{
              top: `${index * 10}px`,
              backgroundColor: colors[index % colors.length],
              margin: "1px 0",
              borderRadius: "2px",
              zIndex: 10,
            }}
            title={event.name}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Day;
