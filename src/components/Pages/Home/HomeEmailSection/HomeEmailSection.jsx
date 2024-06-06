import Lottie from "lottie-react";
import { FiSend } from "react-icons/fi";
import Animate from "../../../../../public/emailanimate.json";
import { Link } from "react-router-dom";
const HomeEmailSection = () => {
  return (
    <div className="w-full h-screen px-4 md:px-20 py-2 mb-10">
      <div className="bg-gradient-to-b from-[#9d11bd] to-[#73e9fe] md:bg-gradient-to-r md:from-[#73e9fe] md:to-[#0c01a1] dark:md:from-[#0c01a1] dark:md:to-[#73e9fe] w-full rounded-2xl dark:text-[#0c01a1] dark:md:text-[#73e9fe]">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center pb-10 md:pb-4">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-20 pl-10 md:px-10">
            <h1 className="text-4xl md:text-6xl font-bold ">
              Nice to meet you!
            </h1>
            <p className="text-lg my-4 pr-10">
              Get started with Synify today. And explore some excited features
              for keeping your team on track.
            </p>
            <div className="my-6 md:mt-6 md:mb-0 w-[80%] flex justify-center bg-white rounded-lg">
              <Link to="/contact">
                <button className="flex justify-between items-center gap-3 px-2 py-3 text-lg bg-white dark:text-sky-900  font-bold">
                  Contact Us <FiSend />
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full  md:w-1/2 ">
            <Lottie animationData={Animate} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEmailSection;
