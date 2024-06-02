import React from "react";
import { Link } from "react-router-dom";
const MarketingDetails = () => {
  return (
    <div className="p-10 mt-10 md:mt-0 md:p-20">
      <div className="flex flex-col justify-center items-center md:flex-row gap-3">
        <div className="w-full md:w-1/2 space-y-3">
          <h1 className="uppercase text-sm font-semibold">
            Project Syncify for marketing
          </h1>
          <h1 className="text-5xl font-bold">
            Where marketing connects work to revenue
          </h1>
          <p>
            Mobilize around clear goals, get more impact from your resources,
            and confidently scale any campaign workflow.
          </p>
          <Link to="/login">
            <button className=" bg-purple-800 text-white font-bold px-4 py-3 rounded-sm">
              Get Started
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <img
            src="https://i.ibb.co/Y0RjcBJ/marketting-1.jpg"
            className=" h-[400px]"
            alt=""
          />
        </div>
      </div>
      <div className="flex mt-10 justify-center items-center">
        <div className="w-[600px] text-center space-y-3">
          <h3 className="uppercase text-sm font-semibold">
            THE VALUE OF ProjectSyncify
          </h3>
          <h1 className="text-4xl font-bold">Make every campaign count</h1>
          <p>
            Align marketers in a single tool, so everyone has the full picture.
            With clear priorities and processes, teams can work together to hit
            revenue targets and meet changing market conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingDetails;
