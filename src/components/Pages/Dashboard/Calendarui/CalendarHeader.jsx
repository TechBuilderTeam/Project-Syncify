import React, { useContext } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiCalendarTodoFill } from "react-icons/ri";
import dayjs from "dayjs";
import GlobalContext from "../../../../context/GlobalContext";

const CalendarHeader = () => {
  const { year, monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex((prevMonthIndex) => prevMonthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex((prevMonthIndex) => prevMonthIndex + 1);
  }

  function handleReset() {
    const currentDate = dayjs();
    setMonthIndex(currentDate.month());
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      <div className="dark:text-[#73e9fe] text-[#010ca1]">
        <div className="py-2 mt-4">
          <div className="flex justify-between items-center pb-2">
            <h1 className="text-3xl pb-2 font-semibold">Check Out Plans</h1>
          </div>
          <hr className="w-full h-1 bg-gradient-to-r from-[#0c01a1] to-[#73e9fe]" />
        </div>
      </div>
      <div className="px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <RiCalendarTodoFill className="w-12 h-10" />
          <h2 className="text-xl font-bold mx-2">
            {months[monthIndex]} {year}
          </h2>
        </div>
        <div className="flex items-center">
          <button
            onClick={handleReset}
            className="border border-slate-400 rounded py-2 px-4 mr-5"
          >
            Today
          </button>
          <div className="flex items-center">
            <button onClick={handlePrevMonth}>
              <span className="cursor-pointer">
                <FaArrowLeft />
              </span>
            </button>
            <button className="mx-2" onClick={handleNextMonth}>
              <span className="cursor-pointer">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    </div>
    </div>
  );
};

export default CalendarHeader;
