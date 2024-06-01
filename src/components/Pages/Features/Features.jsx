import { LuLayoutDashboard } from "react-icons/lu";
import { TbClockCancel } from "react-icons/tb";
import { LuClipboardList } from "react-icons/lu";
import { CiViewBoard } from "react-icons/ci";
import { AiOutlinePieChart } from "react-icons/ai";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { FaChalkboard } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { MdAddTask } from "react-icons/md";
import { GrStatusUnknown } from "react-icons/gr";
import { FaFolderPlus } from "react-icons/fa";
import { CiSquareMore } from "react-icons/ci";
import { LuClipboardSignature } from "react-icons/lu";
import { MdOutlineTask } from "react-icons/md";
const Features = () => {
  return (
    <div className="px-10 py-20">
      {/* project management */}
      <div>
        <h1 className="text-2xl mb-4 text-center font-bold dark:text-white">
          Project Management
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="w-full md:w-1/3 flex flex-col gap-3 text-right">
            <div className="">
              <h3 className="text-xl font-semibold dark:text-white">
                OKRs
                <span className="text-red-600 font-extrabold text-xl"> .</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                beatae dolor debitis iste ipsa ea iusto sequi culpa architecto
                accusantium.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold dark:text-white">
                Advanced Task
                <span className="text-red-600 font-extrabold text-xl"> .</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                beatae dolor debitis iste ipsa ea iusto sequi culpa architecto
                accusantium.
              </p>
            </div>
          </div>
          <div className="h-[300px] w-full md:w-1/3 flex justify-center items-center">
            <img
              src="https://i.ibb.co/SRMthdr/Project-Management.png"
              className="h-full"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3 w-full md:w-1/3 text-left">
            <div>
              <h3 className="text-xl font-semibold dark:text-white">
                Advanced Reporting
                <span className="text-red-600 font-extrabold text-xl"> .</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                beatae dolor debitis iste ipsa ea iusto sequi culpa architecto
                accusantium.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold dark:text-white">
                Advanced Emails
                <span className="text-red-600 font-extrabold text-xl"> .</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                beatae dolor debitis iste ipsa ea iusto sequi culpa architecto
                accusantium.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* features section  */}
      <div>
        <div className="flex mt-10 mb-10 sm:mb-5 md:md-2 justify-center items-center">
          <div className="w-[300px] text-center flex justify-center flex-col items-center gap-y-3">
            <div className="text-center">
              <LuLayoutDashboard className="text-2xl" />
            </div>
            <h2 className="font-bold text-xl">Widgetized Dashboard</h2>
            <p>
              Utilize 10+ custom, updated, and fully maintainded widgets for
              your dashboard with the impresive widgetized footer.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 h-auto md:h-[400px]">
          <div className="w-full md:w-2/5 flex flex-col gap-14 text-center md:text-right">
            <div className="flex flex-col-reverse md:flex-row gap-3 justify-center items-center sm:items-start">
              <div className="w-80 md:w-[300px] space-y-2">
                <h3 className="font-bold text-xl">Time Tracking Widget</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime, saepe?
                </p>
              </div>
              <TbClockCancel className="text-3xl" />
            </div>
            <div className="flex flex-col-reverse md:flex-row  gap-3 justify-center items-center sm:items-start">
              <div className="w-80 md:w-[300px] space-y-2">
                <h3 className="font-bold text-xl">Fun Facts</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime, saepe?
                </p>
              </div>
              <CiViewBoard className="text-3xl" />
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center items-center my-10 md:mt-[-50px]">
            <img
              src="https://i.ibb.co/6WFpG4s/feature-center-arrow.webp"
              className="h-[180px]"
              alt=""
            />
          </div>
          <div className="w-full md:w-2/5 flex flex-col gap-14">
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center sm:items-start ">
              <LuClipboardList className="text-3xl" />
              <div className="w-80 md:w-[300px] space-y-2">
                <h3 className="font-bold text-xl">Elementor Widgetst</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime, saepe?
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-3 justify-center items-center sm:text-start">
              <AiOutlinePieChart className="text-3xl" />
              <div className="w-80 md:w-[300px] space-y-2">
                <h3 className="font-bold text-xl">Poll Widget</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime, saepe?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* actions  */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card col-span-2 flex justify-center gap-y-3 items-center rounded-lg shadow-md p-10 bg-gray-100 dark:bg-black">
          <GoProjectRoadmap className="font-bold text-3xl" />
          <h1 className="text-lg">Project create</h1>
        </div>
        <div className="card flex justify-center gap-y-3 items-center rounded-lg shadow-md p-14 bg-gray-100 dark:bg-black">
          <FaRegUser className="font-bold text-3xl" />
          <h1 className="text-lg">Member add</h1>
        </div>
        <div className="card flex justify-center gap-y-3 items-center rounded-lg shadow-md py-14 px-10 bg-gray-100 dark:bg-black">
          <FaChalkboard className="font-bold text-3xl" />
          <h1 className="text-lg">Plans for board</h1>
        </div>
        <div className="card flex justify-center gap-y-3 items-center rounded-lg shadow-md py-14 px-10 bg-gray-100 dark:bg-black">
          <FaUserCheck className="font-bold text-3xl" />
          <h1 className="text-lg">Assign team lead</h1>
        </div>
        <div className="card flex justify-center gap-y-3 items-center rounded-lg shadow-md py-14 px-10 bg-gray-100 dark:bg-black">
          <FaChalkboardUser className="font-bold text-3xl" />
          <h1 className="text-lg">Board create</h1>
        </div>
        <div className="card flex justify-center gap-y-3 items-center rounded-lg shadow-md py-14 px-10 bg-gray-100 dark:bg-black">
          <MdAddTask className="font-bold text-3xl" />
          <h1 className="text-lg">Task assign</h1>
        </div>
        <div className="card flex justify-center gap-y-3 items-center rounded-lg shadow-md py-14 px-10 bg-gray-100 dark:bg-black">
          <GrStatusUnknown className="font-bold text-3xl" />
          <h1 className="text-lg">Task status</h1>
        </div>
      </div>
      {/* cards  */}
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="px-8 py-5  border-2 rounded-md space-y-2 h-[300px]">
          <div className="flex justify-end">
            <FaFolderPlus className=" text-4xl font-bold" />
          </div>
          <div className="flex flex-col justify-end items-start space-y-2 h-[120px]">
            <h1 className="text-xl  font-semibold">Project Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              adipisci!
            </p>
          </div>
        </div>
        <div className="px-8 py-5  border-2 rounded-md space-y-2 h-[300px]">
          <div className="flex justify-end">
            <CiSquareMore className=" text-4xl font-bold" />
          </div>
          <div className="flex flex-col justify-end items-start space-y-2 h-[120px]">
            <h1 className="text-xl  font-semibold">Project Details</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              adipisci!
            </p>
          </div>
        </div>
        <div className="px-8 py-5  border-2 rounded-md space-y-2 h-[300px]">
          <div className="flex justify-end">
            <LuClipboardSignature className=" text-4xl font-bold" />
          </div>
          <div className="flex flex-col justify-end items-start space-y-2 h-[120px]">
            <h1 className="text-xl  font-semibold">Plans Create</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              adipisci!
            </p>
          </div>
        </div>
        <div className="px-8 py-5  border-2 rounded-md space-y-2 h-[300px]">
          <div className="flex justify-end">
            <MdOutlineTask className=" text-4xl font-bold" />
          </div>
          <div className="flex flex-col justify-end items-start space-y-2 h-[120px]">
            <h1 className="text-xl  font-semibold">Task Assign</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              adipisci!
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center border-gray-100 border-4 rounded-md space-y-2 h-[300px]">
          <img
            src="https://i.ibb.co/FxVSWKN/report-line-black-icon-vector.jpg"
            className="w-full h-full"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center border-gray-100 border-4 rounded-md space-y-2 h-[300px]">
          <img
            src="https://i.ibb.co/LpBM4Fv/Screenshot-7.png"
            className="w-full h-full"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center border-gray-100 border-4 rounded-md space-y-2 h-[300px]">
          <img
            src="https://i.ibb.co/N3tnhZ6/Screenshot-8.png"
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
