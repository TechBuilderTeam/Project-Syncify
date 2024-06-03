import React from "react";
import { Link } from "react-router-dom";
const ItDetials = () => {
  return (
    <div className="p-10 mt-10 md:mt-0 md:p-20">
      <div className="flex flex-col justify-center items-center md:flex-row gap-3">
        <div className="w-full md:w-1/2 space-y-3">
          <h1 className="uppercase text-sm font-semibold">IT TEAMS</h1>
          <h1 className="text-5xl font-bold">
            Where IT connects work to strategy
          </h1>
          <p>
            Project Syncify solves many use cases and integrates with existing
            tools—so there’s no extra work for IT. Connect teams and tools,
            without compromising security.
          </p>
          <Link to="/login">
            <button className="mt-5 dark:bg-cyan-600 bg-purple-800 text-white font-bold px-4 py-3 rounded-sm">
              Get Started
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <img
            src="https://i.ibb.co/StTc1jg/it-1.jpg"
            className=" h-[400px]"
            alt=""
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-3 mt-10">
        <h1 className="text-4xl font-bold">Automate IT workflows with ease</h1>
        <p className="mb-4">
          Spend less time triaging requests and more time on critical IT work.
          With Project Syncify, it’s easy to streamline workflows within and
          across teams—like IT requests, onboarding, and more.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <div className="shadow-sm rounded-sm  space-y-2 py-8 ">
          <img
            src="https://i.ibb.co/CJhHwKc/printer.png"
            className="h-[50px]"
            alt=""
          />
          <h1 className="text-2xl font-bold">Standardize IT requests</h1>
          <p>
            Create a streamlined intake process—so you get all of the
            information you need when a request is submitted.
          </p>
        </div>
        <div className="shadow-sm rounded-sm  space-y-2 py-8 ">
          <img
            src="https://i.ibb.co/YdyLG2g/distance.png"
            className="h-[50px]"
            alt=""
          />
          <h1 className="text-2xl font-bold">Route work to the right person</h1>
          <p>
            Set up automations to instantly assign, route, and organize requests
            as soon as they’re submitted.
          </p>
        </div>
        <div className="shadow-sm rounded-sm space-y-2 py-8">
          <img
            src="https://i.ibb.co/Pmy1QnP/processing.png"
            className="h-[50px]"
            alt=""
          />
          <h1 className="text-2xl font-bold">Update seamlessly across tools</h1>
          <p>
            When a request is complete, automatically notify stakeholders via
            email, Slack, or another communication tool.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItDetials;
