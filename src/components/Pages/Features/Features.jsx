import { LuLayoutDashboard } from "react-icons/lu";
import { TbClockCancel } from "react-icons/tb";
import { CiViewBoard } from "react-icons/ci";
import { FaRegCalendarCheck } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { FaChalkboard } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { MdAddTask, MdLeaderboard } from "react-icons/md";
import { GrStatusUnknown } from "react-icons/gr";
import { FaFolderPlus } from "react-icons/fa";
import { CiSquareMore } from "react-icons/ci";
import { LuClipboardSignature } from "react-icons/lu";
import { MdOutlineTask } from "react-icons/md";
import { IoChatbubbleEllipsesOutline, IoChatbubblesOutline, IoPersonAddOutline } from "react-icons/io5";
import Lottie from "lottie-react";
import Fea from "../../../../public/tasks.json";
import { Link } from "react-router-dom"; // Correct import for page navigation

const Features = () => {
  return (
    <div className="px-10 py-20">
      <div className="text-center mt-3 mb-5">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mt-0 mb-10">
          <div className="w-full md:w-1/3 mx-10 text-center md:text-start">
            <h1 className="text-4xl text-blue-800 dark:text-[#73e9fe] font-bold">Project Syncify</h1>
            <p className="text-sm my-2">Scroll down and learn more about us.</p>
            <p className="text-sm my-2">Reach Out for any type of Inquiries, or Just to Say Hi!</p>
            <p className="text-sm my-2">Thank you for visiting.</p>
          </div>
          <div className="w-full md:w-1/2 ml-10">
            <Lottie animationData={Fea} loop={true} />
          </div>
        </div>
      </div>

      {/* actions */}
      <div className="my-10 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card col-span-2 flex justify-center gap-y-3 items-center rounded-lg shadow-md p-10 bg-gray-100 dark:bg-black text-center">
          <Link to="/workspace" >
            <div className="flex flex-col items-center" title="Create a new project">
              <GoProjectRoadmap className="font-bold text-3xl" />
              <h1 className="text-lg">Project Create</h1>
            </div>
          </Link>
        </div>
        <div className="card flex justify-center gap-y-3 items-center rounded-lg shadow-md md:p-14 bg-gray-100 dark:bg-black">
          <FaRegUser className="font-bold text-3xl" />
          <h1 className="text-lg">Member add</h1>
        </div>
        <div className="card flex justify-center gap-y-3 items-center rounded-lg shadow-md py-10 md:py-14 px-6 md:px-10 bg-gray-100 dark:bg-black">
          <FaChalkboard className="font-bold text-3xl" />
          <h1 className="text-lg">Plans for board</h1>
        </div>
        <div className="card flex justify-center gap-y-3 items-center rounded-lg shadow-md py-10 md:py-14 px-6 md:px-10 bg-gray-100 dark:bg-black">
          <FaUserCheck className="font-bold text-3xl" />
          <h1 className="text-lg">Assign team lead</h1>
        </div>
        <div className="card flex justify-center gap-y-3 items-center rounded-lg shadow-md py-10 md:py-14 px-6 md:px-10 bg-gray-100 dark:bg-black">
          <FaChalkboardUser className="font-bold text-3xl" />
          <h1 className="text-lg">Board create</h1>
        </div>
        <div className="card flex justify-center gap-y-3 items-center rounded-lg shadow-md py-10 md:py-14 px-6 md:px-10 bg-gray-100 dark:bg-black">
          <MdAddTask className="font-bold text-3xl" />
          <h1 className="text-lg">Task assign</h1>
        </div>
        <div className="card flex justify-center gap-y-3 items-center rounded-lg shadow-md py-10 md:py-14 px-6 md:px-10 bg-gray-100 dark:bg-black">
          <GrStatusUnknown className="font-bold text-3xl" />
          <h1 className="text-lg">Task status</h1>
        </div>
      </div>

      {/* project management */}
      <div className="my-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="w-full md:w-1/3 flex flex-col gap-3 text-left md:text-right">
            <div>
              <h3 className="text-xl font-semibold dark:text-white">
              <span className=" md:hidden text-red-600 font-extrabold text-xl mr-2">.</span>
                Role Based
                <span className="hidden md:inline ml-2 text-red-600 font-extrabold text-xl">.</span>
              </h3>
              <p>
                Advance project management with role-based access control.
                Create a focus framework for setting and tracks workflow.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold dark:text-white">
              <span className=" md:hidden text-red-600 font-extrabold text-xl mr-2">.</span>
                Drag & Drop
                <span className="hidden md:inline ml-2 text-red-600 font-extrabold text-xl">.</span>
              </h3>
              <p>
                Just drag and drop tasks to mark your progress. Easy to use.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold dark:text-white">
              <span className=" md:hidden text-red-600 font-extrabold text-xl mr-2">.</span>
                Member Assign
                <span className="hidden md:inline ml-2 text-red-600 font-extrabold text-xl">.</span>
              </h3>
              <p>
                Assign member to the plans and explore more functionality.
              </p>
            </div>
          </div>
          <div className="md:h-[480px] w-full md:w-1/3 flex justify-center items-center">
            <img
              src="https://i.ibb.co/SRMthdr/Project-Management.png"
              className="h-full"
              alt="Project Management"
            />
          </div>
          <div className="flex flex-col gap-3 w-full md:w-1/3 text-left">
            <div>
              <h3 className="text-xl font-semibold dark:text-white">
                <span className="text-red-600 font-extrabold text-xl mr-2">.</span>
                Calendar Plans View
              </h3>
              <p>
                Gain deep insights, make data-driven decisions, and drive
                performance improvements through advanced reporting.
              </p>
            </div>
            <div className="mt-1">
              <h3 className="text-xl font-semibold dark:text-white">
                <span className="text-red-600 font-extrabold text-xl mr-2">.</span>
                Advanced Chats
              </h3>
              <p>
                Now you can chat with specific members in a board like group chat. Also can be used for private messaging.
              </p>
            </div>
            <div className="mt-1">
              <h3 className="text-xl font-semibold dark:text-white">
                <span className="text-red-600 font-extrabold text-xl mr-2">.</span>
                Export Document
              </h3>
              <p>
                Download your project details pdf.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="px-8 py-5 border-2 rounded-md space-y-2 h-[250px]">
          <div className="flex justify-end">
            <FaFolderPlus className="text-4xl font-bold" />
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
        <div className="px-8 py-5 border-2 rounded-md space-y-2 h-[250px]">
          <div className="flex justify-end">
            <CiSquareMore className="text-4xl font-bold" />
          </div>
          <div className="flex flex-col justify-end items-start space-y-2 h-[120px]">
            <h1 className="text-xl font-semibold">Project Details</h1>
            <p>
              Project details are the comprehensive information and
              specifications that define the scope, objectives in a project.
            </p>
          </div>
        </div>
        <div className="px-8 py-5 border-2 rounded-md space-y-2 h-[250px]">
          <div className="flex justify-end">
            <LuClipboardSignature className="text-4xl font-bold" />
          </div>
          <div className="flex flex-col justify-end items-start space-y-2 h-[120px]">
            <h1 className="text-xl font-semibold">Plans Create</h1>
            <p>
              Creating plans is an essential step in achieving goals, whether in professional, or organizational contexts. It serve as
              roadmaps.
            </p>
          </div>
        </div>
        <div className="px-8 py-5 border-2 rounded-md space-y-3 h-[250px]">
          <div className="flex justify-end">
          <IoPersonAddOutline className="text-3xl font-bold" />
          </div>
          <div className="flex flex-col justify-end items-start space-y-2 h-[120px]">
            <h1 className="text-xl font-semibold">Team Lead Assign</h1>
            <p>
              User whose role is team leader. Assign the user into the plan.
              Team lead can create board and assign tasks to the other user.
            </p>
          </div>
        </div>
        <div className="px-8 py-5 border-2 rounded-md space-y-2 h-[250px]">
          <div className="flex justify-end">
          <MdLeaderboard className="text-4xl font-bold" />
          </div>
          <div className="flex flex-col justify-end items-start space-y-2 h-[120px]">
            <h1 className="text-xl font-semibold">Project Insights</h1>
            <p>
              User can see a project overview by different type of recharts. 
              They can see the total member, plans & tasks.
            </p>
          </div>
        </div>
        <div className="px-8 py-5 border-2 rounded-md space-y-2 h-[250px]">
          <div className="flex justify-end">
            <MdOutlineTask className="text-4xl font-bold" />
          </div>
          <div className="flex flex-col justify-end items-start space-y-2 h-[120px]">
            <h1 className="text-xl font-semibold">Task Assign</h1>
            <p>
              It is a crucial aspect, ensuring that work is distributed
              among team members efficiently, and achieves goals
              effectively.
            </p>
          </div>
        </div>
        <div className="px-8 py-5 border-2 rounded-md space-y-2 h-[250px]">
          <div className="flex justify-end">
          <IoChatbubblesOutline className="text-4xl font-bold" />
          </div>
          <div className="flex flex-col justify-end items-start space-y-2 h-[120px]">
            <h1 className="text-xl font-semibold">Team Chat</h1>
            <p>
              Members of one board can easily connected to each other via our chatting features. They can discuss about task details.
            </p>
          </div>
        </div>
        
      </div>

      {/* features section */}
      <div>
        <div className="flex my-20 sm:mb-5 md:md-2 justify-center items-center">
          <div className="w-full md:w-[300px] text-center md:text-center flex justify-center flex-col items-center gap-y-3">
            <div className="text-center">
              <LuLayoutDashboard className="text-2xl" />
            </div>
            <h2 className="font-bold text-xl">Unique Dashboard</h2>
            <p>
              Utilize unique dashboard to stay updated, and fully maintained for
              your workflows.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 h-auto md:h-[400px]">
          <div className="w-full md:w-2/5 flex flex-col gap-14 text-center md:text-right">
            <div className="flex flex-col-reverse md:flex-row gap-3 justify-center items-center sm:items-start">
              <div className="w-full md:w-[300px] text-center md:text-end space-y-2">
                <h3 className="font-bold text-xl">Time Tracking</h3>
                <p>
                  Now, you can track your workflow's time through our system.
                </p>
              </div>
              <TbClockCancel className="text-3xl" />
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-3 justify-center items-center sm:items-start">
              <div className="w-80 md:w-[300px] text-center md:text-end space-y-2">
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
              className="h-[280px]"
              alt="Feature Center Arrow"
            />
          </div>
          <div className="w-full md:w-2/5 flex flex-col gap-14">
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center sm:items-start">
              <FaRegCalendarCheck className="text-3xl" />
              <div className="w-full md:w-[300px] text-center md:text-start space-y-2">
                <h3 className="font-bold text-xl">Timeline Widget</h3>
                <p>
                  Stay up to date with your work duration using our timeline
                  feature where you can see every work update.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center sm:items-start">
              <IoChatbubbleEllipsesOutline className="text-3xl" />
              <div className="w-full md:w-[300px] text-center md:text-start space-y-2">
                <h3 className="font-bold text-xl">Chat Widget</h3>
                <p>
                  Make it easier to interact with members of your workspace with
                  specific workspaces chat features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
