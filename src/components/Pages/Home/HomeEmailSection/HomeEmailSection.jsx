import Lottie from "lottie-react";
import { FiSend } from "react-icons/fi";
import Animate from "../../../../../public/emailanimate.json";
import { Link } from "react-router-dom";
const HomeEmailSection = () => {
  return (
    <div className="w-full h-fit px-4 md:px-40 py-4 my-4">
      <div className="bg-gradient-to-b from-[#9d11bd] to-[#73e9fe] md:bg-gradient-to-r md:from-[#73e9fe] md:to-[#8401A1] dark:md:from-[#8401A1] dark:md:to-[#73e9fe] w-full rounded-2xl dark:text-[#8401A1] dark:md:text-[#73e9fe]">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center pb-15 md:pb-10">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-20 pl-10 md:px-0">
            <h1 className="text-3xl md:text-6xl font-bold ">
              Nice to meet you!
            </h1>
            <p className="text-lg my-4 pr-10">
              Get started with Synify today. And explore some excited features
              for keeping your team on track.
            </p>
            <div className="mt-6 w-[90%] md:w-full flex justify-center bg-white rounded-lg">
              <Link to="/contact">
                <button className="flex justify-between items-center gap-3 px-5 py-3 text-lg bg-white dark:text-cyan-600  font-bold">
                  Contact Us <FiSend />
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <Lottie animationData={Animate} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEmailSection;
