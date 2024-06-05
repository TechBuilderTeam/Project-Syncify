import React, { useContext } from "react";
import { FaRegCalendarAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GlobalContext from "../../../../context/GlobalContext";

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  return (
    <div>
      <header className="px-4 py-2 flex items-center">
        <FaRegCalendarAlt className="w-12 h-10" />
        <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendar</h1>
        <button className="border rounded py-2 px-4 mr-5">Today</button>
        <div className="flex items-center">
          <button onClick={handlePrevMonth}>
            <span className="cursor-pointer ">
              <FaArrowLeft />
            </span>
          </button>
          <button className="mx-2" onClick={handleNextMonth}>
            <span className="cursor-pointer">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default CalendarHeader;
