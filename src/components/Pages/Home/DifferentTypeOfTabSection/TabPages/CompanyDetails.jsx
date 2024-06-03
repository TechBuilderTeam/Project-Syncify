import React from "react";
import { Link } from "react-router-dom";
const CompanyDetails = () => {
  return (
    <div className="p-10 mt-10 md:mt-0 md:p-20">
      <div className="flex flex-col justify-center  md:flex-row gap-3">
        <div className="w-full md:w-1/2 space-y-5 px-0 py-14">
          <h1 className="text-5xl font-bold ">
            The only work management <br /> platform built for scale
          </h1>
          <p>
            With Project Syncify, syou can set company-wide goals, manage
            strategic plans, and get work done on a single platform.
          </p>
          <Link to="/login">
            <button className="mt-5 dark:bg-cyan-600 bg-purple-800 text-white font-bold px-4 py-3 rounded-sm">
              Get Started
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <img
            src="https://i.ibb.co/QDZH4v2/world-1.jpg"
            className=" h-[350px]"
            alt=""
          />
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-4xl font-semibold">
          A smarter way to work
        </h1>
        <div className="flex flex-col md:flex-row gap-10 mt-5">
          <div className="shadow-md rounded-sm  space-y-2 px-3 py-8 ">
            <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
              <h1 className="text-2xl font-bold">Maximize impact</h1>
              <img
                src="https://i.ibb.co/m5Bqk4r/business.png"
                className="h-[40px]"
                alt=""
              />
            </div>

            <p>
              Increase efficiency across departments and tools on a single
              platform and automate workflows to get more done in less time.
            </p>
          </div>
          <div className="shadow-md rounded-sm  space-y-2 px-3 py-8 ">
            <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
              <h1 className="text-2xl font-bold">
                Drive clarity and accountability
              </h1>
              <img
                src="https://i.ibb.co/YNJsbVP/desktop-computer.png"
                className="h-[40px]"
                alt=""
              />
            </div>
            <p>
              Connect work to company-wide goals to keep everyone focused on the
              work that matters and make better decisions faster with real-time
              data.
            </p>
          </div>
          <div className="shadow-md rounded-sm space-y-2 px-3 py-8">
            <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
              <h1 className="text-2xl font-bold">Scale with confidence</h1>
              <img
                src="https://i.ibb.co/1fPgjw3/locked.png"
                className="h-[40px]"
                alt=""
              />
            </div>
            <p>
              Connect teams and tools across your organization with
              enterprise-grade security, governance, and control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
