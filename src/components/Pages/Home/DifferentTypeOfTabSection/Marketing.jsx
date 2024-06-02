import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Marketing = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 my-10">
      <div className="w-full md:w-1/2 mx-2">
        <img
          src="https://assets.asana.biz/transform/fb6b5fb5-8a08-4232-aa6c-0f1515e78d57/home24-marketing-team-en-ui?io=transform:fill"
          alt=""
        />
      </div>

      <div className="w-full md:w-auto mx-4">
        <h2 className="text-2xl font-semibold">Meet campaign goals</h2>
        <p className="flex items-center gap-2 my-2 text-lg">
          <FaArrowCircleRight />
          Manage events and editorial calendars{" "}
        </p>
        <p className="flex items-center gap-2 my-2 text-lg">
          <FaArrowCircleRight />
          Manage events and editorial calendars{" "}
        </p>
        <p className="flex items-center gap-2 my-2 text-lg">
          <FaArrowCircleRight />
          Manage events and editorial calendars{" "}
        </p>
        <Link to="/marketingDetails">
          <button className="border-solid border border-slate-400 rounded py-2 px-8 my-4 bg-[#8401A1] dark:bg-[#73e9fe]  text-white dark:text-black font-semibold hover:bg-cyan-600 hover:text-black dark:hover:bg-[#8401A1] dark:hover:text-white">
            Explore Marketing
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Marketing;
