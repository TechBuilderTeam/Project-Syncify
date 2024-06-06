import React from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

const Day = ({ day, rowIdx, timelineEvents }) => {
  const startEventsOnDay = timelineEvents.filter((event) =>
    dayjs(day).isSame(dayjs(event.start_Date), 'day')
  );

  const endEventsOnDay = timelineEvents.filter((event) =>
    dayjs(day).isSame(dayjs(event.end_Date), 'day')
  );

 
  const colors1 = ["#4CAF50"];
 const colors = ["#FF5733"];
  return (
    <div className="relative border border-gray-200 flex flex-col h-32">
      <header className="flex flex-col justify-center items-center relative">
        {rowIdx === 0 && (
          <div className="w-full text-center">
            <p className="text-sm bg-[#e9fcff] dark:bg-[#1d2a42] border-2 border-gray-300 font-bold opacity-80">
              {day?.format("ddd").toUpperCase()}
            </p>
          </div>
        )}
        <p className="text-sm px-2 pt-1 text-center">{day?.format("DD")}</p>
      </header>
      <div className="relative flex flex-col items-center mt-1 flex-grow">
        {startEventsOnDay.map((event, index) => (
          <div
            key={index}
            className="w-[25%] h-1 opacity-80"
            style={{
              top: `${index * 10}px`,
              backgroundColor: colors1[index % colors1.length],
              margin: "1px 0",
              borderRadius: "2px",
              zIndex: 10,
            }}
            title={`Start: ${event.name}`}
          >
             
          </div>
        ))}
        {endEventsOnDay.map((event, index) => (
          <div
            key={index}
            className="w-[25%] h-1 opacity-80"
            style={{
              top: `${(startEventsOnDay.length + index) * 10}px`,
              backgroundColor: colors[index % colors.length],
              margin: "1px 0",
              borderRadius: "2px",
              zIndex: 10,
            }}
            title={`End: ${event.name}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Day;
