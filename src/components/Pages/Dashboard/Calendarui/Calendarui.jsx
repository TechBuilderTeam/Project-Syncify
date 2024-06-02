import React, { useState } from "react";
import Calendar from "react-calendar";

const Calendarui = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div className="flex justify-center items-center mt-10 h-screen">
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default Calendarui;
