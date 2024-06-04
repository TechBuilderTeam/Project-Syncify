import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const IT = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 my-10">
      <div className="w-full md:w-1/2 mx-2">
        <img
          src="https://assets.asana.biz/transform/9462b0f2-6173-42e0-ba08-bb731ea3d24d/home24-it-team-ui?io=transform:fill"
          alt=""
        />
      </div>

      <div className="w-full md:w-auto mx-4">
        <h2 className="text-2xl font-semibold">
          Onboard and offboard employees
        </h2>
        <p className="flex items-center gap-2 my-2 text-lg">
          <FaArrowCircleRight />
          Allocate resources more effectively{" "}
        </p>
        <p className="flex items-center gap-2 my-2 text-lg">
          <FaArrowCircleRight />
          Automate and scale your workflows{" "}
        </p>
        <p className="flex items-center gap-2 my-2 text-lg">
          <FaArrowCircleRight />
          Onboard and offboard employees{" "}
        </p>
        <Link to="/itDetails">
          <button className="border-solid border border-slate-400 rounded py-2 px-8 my-4 bg-[#0c01a1] dark:bg-[#73e9fe]  text-white dark:text-black font-semibold hover:bg-cyan-600 hover:text-black dark:hover:bg-[#0c01a1] dark:hover:text-white">
            Explore IT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IT;
