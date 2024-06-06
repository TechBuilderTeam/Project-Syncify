import { LuLayoutDashboard } from "react-icons/lu";
import { TbClockCancel } from "react-icons/tb";
import { LuClipboardList } from "react-icons/lu";
import { CiViewBoard } from "react-icons/ci";
import { FaRegCalendarCheck } from "react-icons/fa";
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
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
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
                Create a focus framework for setting and tracking goals,
                fostering alignment, and driving impactful outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold dark:text-white">
                Advanced Task
                <span className="text-red-600 font-extrabold text-xl"> .</span>
              </h3>
              <p>
                Enables teams to manage complex project efficiently, streamline
                workflows, and achieve higher productivity level.
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
                Gain deep insights, make data driven decisions, and drive
                performance improvements through advanced reporting.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold dark:text-white">
                Advanced Chats
                <span className="text-red-600 font-extrabold text-xl"> .</span>
              </h3>
              <p>
                Now you can chats with specific members in a board to make user
                friendly product.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* features section  */}
      <div>
        <div className="flex mt-10 mb-10 sm:mb-5 md:md-2 justify-center items-center">
          <div className="w-[300px] text-start md:text-center flex justify-center flex-col items-center gap-y-3">
            <div className="text-center">
              <LuLayoutDashboard className="text-2xl" />
            </div>
            <h2 className="font-bold text-xl">Unique Dashboard</h2>
            <p>
              Utilize unique dashboard to updated, and fully maintainded for
              your workflows
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 h-auto md:h-[400px]">
          <div className="w-full md:w-2/5 flex flex-col gap-14 text-center md:text-right">
            <div className="flex flex-col-reverse md:flex-row gap-3 justify-center items-center sm:items-start">
              <div className="w-80 md:w-[300px] text-start md:text-center space-y-2">
                <h3 className="font-bold text-xl">Time Tracking</h3>
                <p>
                  Now, you can track your workflows time through our system.
                </p>
              </div>
              <TbClockCancel className="text-3xl" />
            </div>
            <div className="flex flex-col-reverse md:flex-row  gap-3 justify-center items-center sm:items-start">
              <div className="w-80 md:w-[300px] text-start md:text-center space-y-2">
                <h3 className="font-bold text-xl">Fun Facts</h3>
                <p>
                  Project Syncify is an innovative project management tool
                  designed to streamline team collaboration and enhance
                  productivity.
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
              <FaRegCalendarCheck className="text-3xl" />
              <div className="w-80 md:w-[300px] space-y-2">
                <h3 className="font-bold text-xl">Timeline Widget</h3>
                <p>
                  Get Up to date with your work duration with our timeline
                  feature where you see every work update.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center sm:items-start ">
              <IoChatbubbleEllipsesOutline className="text-3xl" />
              <div className="w-80 md:w-[300px] space-y-2">
                <h3 className="font-bold text-xl">Chat Widget</h3>
                <p>
                  Make easier interaction with member of your workspace with
                  specific workspaces chat features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* actions  */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card col-span-none md:col-span-2 flex justify-center gap-y-3 items-center rounded-lg shadow-md p-10 bg-gray-100 dark:bg-black">
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
        <div className="px-8 py-5  border-2 rounded-md space-y-2 h-[250px]">
          <div className="flex justify-end">
            <FaFolderPlus className=" text-4xl font-bold" />
          </div>
          <div className="flex flex-col justify-center items-start space-y-2 h-[120px]">
            <h1 className="text-xl font-semibold">Project Title</h1>
            <p>
              Project title is more than just a label; it is the first
              impression of your project and a concise summary of its purpose
              and goals.
            </p>
          </div>
        </div>
        <div className="px-8 py-5  border-2 rounded-md space-y-2 h-[250px]">
          <div className="flex justify-end">
            <CiSquareMore className="text-4xl font-bold" />
          </div>
          <div className="flex flex-col justify-end items-start space-y-2 h-[120px]">
            <h1 className="text-xl  font-semibold">Project Details</h1>
            <p>
              Project details are the comprehensive information and
              specifications that define the scope, objectives, deliverables,
              timelines, in a project.
            </p>
          </div>
        </div>
        <div className="px-8 py-5  border-2 rounded-md space-y-2 h-[250px]">
          <div className="flex justify-end">
            <LuClipboardSignature className=" text-4xl font-bold" />
          </div>
          <div className="flex flex-col justify-end items-start space-y-2 h-[120px]">
            <h1 className="text-xl  font-semibold">Plans Create</h1>
            <p>
              Creating plans is an essential step in achieving goals, whether in
              personal, professional, or organizational contexts. Plans serve as
              roadmaps.
            </p>
          </div>
        </div>
        <div className="px-8 py-5  border-2 rounded-md space-y-2 h-[250px]">
          <div className="flex justify-end">
            <MdOutlineTask className=" text-4xl font-bold" />
          </div>
          <div className="flex flex-col justify-end items-start space-y-2 h-[120px]">
            <h1 className="text-xl  font-semibold">Task Assign</h1>
            <p>
              Task assign is a crucial aspect, ensuring that work is distribute
              among team members in a way that efficiency,and achieves goals
              effectively.
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
