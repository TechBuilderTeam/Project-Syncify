import { BiBarChartSquare } from "react-icons/bi";
import { MdOutlineMarkChatUnread } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
import Title from "../../../../pages/shared/Title";

const Features = () => {
  return (
    <div className="px-10 py-0">
      <div className="flex justify-start text-start mb-5 gap-2">
        <Title title="See how Syncify can improve your systems productivity" />
      </div>
      {/* card  */}
      <div className="flex flex-col md:flex-row justify-between md:justify-center gap-6 ">
        <div className="border shadow-md p-8 md:p-16 rounded-xl ">
          <div className="flex gap-5">
            <div className="space-y-2">
              <h1 className="text-xl font-semibold">Task Management</h1>
              <p>You can manage your whole task easily.</p>
            </div>
            <BiBarChartSquare className="text-7xl" />
          </div>
        </div>
        <div className=" border shadow-md p-8 md:p-16 rounded-xl">
          <div className="flex gap-5">
            <div className="space-y-2">
              <h1 className="text-xl font-semibold">Team Collaboration</h1>
              <p>You can build team and collab with each others.</p>
            </div>
            <MdOutlineMarkChatUnread className="text-7xl" />
          </div>
        </div>
        <div className=" border shadow-md p-8 md:p-16 rounded-xl">
          <div className="flex gap-5">
            <div className="space-y-2">
              <h1 className="text-xl font-semibold">Project Planning</h1>
              <p>Make a perfect plan for your future project.</p>
            </div>
            <VscGraphLine className="text-7xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
