import logo1 from "../../../../assets/logo1.png";
import logo2 from "../../../../assets/logo.jpg";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CustomerSection = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [totalTask, setTotalTask] = useState(80);
  const [totalPlans, setTotalPlan] = useState(320);
  const [totalMember, setTotalMember] = useState(120);

  useEffect(() => {
    const getProjectData = async () => {
       try {
        const result = await axios.get("https://projectsyncifyapi.onrender.com/api/v1/insights/")
        setTotalTask(result.data?.totalTasks);
        setTotalPlan(result.data?.totalWorkspaces)
        setTotalMember(result.data?.totalMembers)
       } catch (error) {
        
       }
    }

    getProjectData()
  },[])
  return (
    <div className="bg-gradient-to-b from-[#3fe2ff] to-[#13118f] w-full">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex sm:flex-col md:flex-row flex-wrap m-10 py-10 px-2 md:px-6 relative">
          <div className="w-full md:w-4/6 p-2 md:p-8 flex flex-col justify-around">
            <div>
              <h2 className="text-white text-4xl font-bold mb-4">
                We love our customers and they love us too.
              </h2>
              <p className="text-white ">
                We love our customers and they love us too. It is a long
                established fact that a reader will be distracted. It is a long
                established fact that a reader will be distracted.
              </p>
              <div className="flex items-center my-2">
                <img
                  src={logo2}
                  alt="Logo 1"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src={logo1}
                  alt="Logo 1"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src={logo2}
                  alt="Logo 1"
                  className="w-6 h-6 rounded-full"
                />
                <img
                  src={logo1}
                  alt="Logo 1"
                  className="w-6 h-6 rounded-full"
                />
                <span className="ml-4 text-white font-semibold">
                  {counterOn && (
                    <CountUp start={320} end={334} duration={5} delay={0} />
                  )}
                  &nbsp; members
                </span>
              </div>
            </div>

            <div className="my-1">
              <Link to="/features">
                <button className="border-solid border rounded-md py-2 px-5  text-sm text-white hover:bg-gradient-to-b from-[#11528f] to-[#73e9fe]">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/** right side */}
          <div className="w-full md:w-2/6 p-2 relative">
            <div className="flex w-full text-center ">
              {/* Card 1 */}
              <div className="bg-white bg-opacity-20 mr-2 p-8 rounded-lg shadow-lg w-1/2">
                <h3 className="text-white text-3xl font-bold mb-2">
                  {counterOn && (
                    <CountUp start={totalTask-20} end={totalTask} duration={5} delay={0} />
                  )}
                  +
                </h3>
                <p className="text-white font-semibold text-xl">Tasks</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white bg-opacity-20 ml-2 p-8 rounded-lg shadow-lg w-1/2">
                <h3 className="text-white text-3xl font-bold mb-2">
                  {counterOn && (
                    <CountUp start={totalPlans-10} end={totalPlans} duration={5} delay={0} />
                  )}
                  +
                </h3>
                <p className="text-white text-xl font-semibold">Projects</p>
              </div>
            </div>

            <div className="w-full ">
              {/* Card 3 */}
              <div className="text-center bg-white bg-opacity-20 my-2 p-8 rounded-lg shadow-lg">
                <h3 className="text-white text-3xl font-bold mb-2">
                  {counterOn && (
                    <CountUp start={totalMember-10} end={totalMember} duration={5} delay={0} />
                  )}
                  +
                </h3>
                <p className="text-white text-xl font-semibold">Members</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default CustomerSection;
