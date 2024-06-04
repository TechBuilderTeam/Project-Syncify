import React from "react";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  return (
    <div className="p-10 mt-10 md:mt-0 md:p-20">
      <div className="flex flex-col justify-center items-center md:flex-row gap-3">
        <div className="w-full md:w-1/2 space-y-3">
          <h1 className="uppercase text-sm font-semibold">
            PRODUCT AND PRODUCT MANAGEMENT TEAMS
          </h1>
          <h1 className="text-5xl font-bold">
            Launch better <br /> products—faster
          </h1>
          <p>
            Project Syncify simplifies your product development process and
            helps you speed up your time to market.
          </p>
          <Link to="/login">
            <button className="mt-5 dark:bg-cyan-600 bg-purple-800 text-white font-bold px-4 py-3 rounded-sm">
              Get Started
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <img
            src="https://i.ibb.co/qm89CzH/web.jpg"
            className=" h-[400px]"
            alt=""
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row gap-5 md:gap-3">
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-3">
          <h1 className="text-5xl font-semibold">Make your way to market</h1>
          <p className="text-lg">
            Easily manage all stages of product development and launch faster.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full join join-vertical ">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Keep product development on track
              </div>
              <div className="collapse-content">
                <p>
                  Organize initiatives by priority, so you can be sure you’re
                  focusing on the most high-impact work.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Centralize launch information
              </div>
              <div className="collapse-content">
                <p>
                  Monitor project status, send updates, and understand next
                  steps.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Move faster with automation
              </div>
              <div className="collapse-content">
                <p>
                  Monitor project status, send updates, and understand next
                  steps.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Tie your product roadmap to your strategy
              </div>
              <div className="collapse-content">
                <p>
                  Deliver on your company’s larger goals by connecting
                  individual responsibilities to top business priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
