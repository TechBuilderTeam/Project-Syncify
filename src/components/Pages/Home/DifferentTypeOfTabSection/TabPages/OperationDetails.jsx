import React from "react";
import { Link } from "react-router-dom";
const OperationDetails = () => {
  return (
    <div className="p-10 mt-10 md:mt-0 md:p-20">
      <div className="flex flex-col justify-center items-center md:flex-row gap-3">
        <div className="w-full md:w-1/2 flex justify-start">
          <img
            src="https://i.ibb.co/vYpGS7B/operation-1.jpg"
            className=" h-[400px]"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2 text-end space-y-3">
          <h1 className="uppercase text-sm font-semibold">
            Project Syncify for OPERATIONS
          </h1>
          <h1 className="text-5xl font-bold">
            Where operations connects work to outcomes
          </h1>
          <p>
            Align work to goals, spend resources efficiently, and automate
            processes across your organization—no matter how large.
          </p>
          <Link to="/login">
            <button className="mt-5 dark:bg-cyan-600 bg-purple-800 text-white font-bold px-4 py-3 rounded-sm">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="flex mt-10 justify-center items-center">
        <div className="w-[600px] text-center space-y-3">
          <h3 className="uppercase text-sm font-semibold">
            THE VALUE OF ProjectSyncify
          </h3>
          <h1 className="text-4xl font-bold">Transform your operations</h1>
          <p>
            Total visibility, for leaders and teams. See the full picture of
            resources, work, and outcomes so it’s clear how to pivot and make
            the most impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OperationDetails;
