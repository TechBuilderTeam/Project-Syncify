import dayjs from "dayjs";
import React from "react";

const Day = ({ day, rowIdx }) => {
  function getCurrentDateClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col justify-center items-center">
        {rowIdx === 0 && (
          <div className="w-full text-center">
            <p className="text-sm mt-1 border-b border-gray-300">{day.format("ddd").toUpperCase()}</p>
          </div>
        )}

        

        <p className={`text-sm  p-1 my-1 text-center ${getCurrentDateClass()}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
};

export default Day;
