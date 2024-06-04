import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import { CiEdit } from "react-icons/ci";
import { AiOutlineProject, AiOutlineTeam } from "react-icons/ai";
import { RiChatSmile3Line } from "react-icons/ri";
import { Link as ScrollLink, Element } from 'react-scroll';
import Info from "./Info";
import ChatOnetoOne from "../Pages/Chat/ChatOnetoOne";
import Work from "./Work";
import Education from "./Education";
import UserContact from "./UserContact";
import UserAbout from "./UserAbout";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [showComponent, setShowComponent] = useState("Info");
  useEffect(() => {
    if (user && user.userId) {
      fetch(`https://projectsyncifyapi.onrender.com/api/v1/user/details/${user.userId}/`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setProfile(data);
        })
        .catch((error) => {
          console.error('Error fetching profile:', error);
        });
    }
  }, [user]);

  // for formating date design
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  console.log({ profile });
  return (
    <div className=" py-10">

      {/* profile banner */}
      <div className="py-16 md:py-28 mb-60 bg-gradient-to-r from-sky-50 dark:from-sky-900 to-sky-500 dark:to-black relative ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-6">
              <div className="pl-10 md:pl-40">
                <img src={user && profile?.image} alt={user && user.name} className="w-28 md:w-40 h-28 md:h-40 rounded-full border-4 border-sky-900 dark:border-sky-300" />
              </div>
              <div className="flex flex-col justify-start">
                <h1 className="text-xl md:text-3xl md:text-center"> {user && user.name}</h1>
                <p className=""> {user && user.email}</p>
              </div>
            </div>

            {/* <div>
              <div className="flex gap-2  md:gap-5 mt-8 md:mt-16 ml-10 md:ml-40">
                <ScrollLink to="info" smooth={true} duration={1000}>
                  <button className="flex justify-between items-center gap-3 px-2 py-1 text-sm  bg-sky-200 dark:bg-sky-900  dark:text-sky-50 font-bold rounded">
                    Info
                  </button>
                </ScrollLink>
                <ScrollLink to="education" smooth={true} duration={1000}>
                  <button className="flex justify-between items-center gap-3 px-2 py-1 text-sm  bg-sky-200 dark:bg-sky-900  dark:text-sky-50 font-bold rounded">
                    Education
                  </button>
                </ScrollLink>
                <ScrollLink to="work" smooth={true} duration={1000}>
                  <button className="flex justify-between items-center gap-3 px-2 py-1 text-sm  bg-sky-200 dark:bg-sky-900  dark:text-sky-50 font-bold rounded">
                    Work
                  </button>
                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={1000}>
                  <button className="flex justify-between items-center gap-3 px-2 py-1 text-sm  bg-sky-200 dark:bg-sky-900  dark:text-sky-50 font-bold rounded">
                    Contact
                  </button>
                </ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={1000}>
                  <button className="flex justify-between items-center gap-3 px-2 py-1 text-sm  bg-sky-200 dark:bg-sky-900  dark:text-sky-50 font-bold rounded">
                    Projects
                  </button>
                </ScrollLink>
              </div>
            </div> */}

            <div className="flex flex-wrap gap-2 sm:items-center mt-10 md:mt-6 ml-10 md:ml-36 font-semibold ">
              <button
                onClick={() => setShowComponent("Info")}
                className={`rounded py-1 px-2  text-sm hover:bg-sky-200 dark:hover:bg-sky-300 hover:text-sky-900 ${showComponent === "Info"
                  ? "bg-sky-50 dark:bg-sky-950 "
                  : ""
                  }`}
              >
                Info
              </button>
              <button
                onClick={() => setShowComponent("Work")}
                className={`rounded py-1 px-2  text-sm   hover:bg-sky-200 dark:hover:bg-sky-300 hover:text-sky-900 ${showComponent === "Work"
                  ? "bg-sky-50 dark:bg-sky-950 "
                  : ""
                  }`}
              >
                Work
              </button>
              <button
                onClick={() => setShowComponent("Education")}
                className={`rounded py-1 px-2  text-sm hover:bg-sky-200 dark:hover:bg-sky-300 hover:text-sky-900  ${showComponent === "Education"
                  ? "bg-sky-50 dark:bg-sky-950"
                  : ""
                  }`}
              >
                Education
              </button>
              <button
                onClick={() => setShowComponent("Contact")}
                className={`rounded py-1 px-2  text-sm hover:bg-sky-200 dark:hover:bg-sky-300 hover:text-sky-900  ${showComponent === "Contact"
                  ? "bg-sky-50 dark:bg-sky-950"
                  : ""
                  }`}
              >
                Contact
              </button>

            </div>

          </div>
          <div className="flex items-center justify-end md:justify-center gap-6 text-2xl md:text-4xl w-full md:w-1/2 md:mt-28 mr-10 md:mr-0 mb-10 ">
            <div title="Edit">
              <CiEdit />
            </div>
            <div title="Projects">
              <AiOutlineProject />
            </div>
            <div title="Members">
              <AiOutlineTeam />
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute bg-gradient-to-r from-sky-200 dark:from-sky-700  to-sky-600 dark:to-black text-[#0c01a1] dark:text-white   -bottom-4 md:bottom-0 w-[80%] left-1/2 -translate-x-1/2 rounded ">
        {showComponent === "Info" ? (
          <Info user={user} profile={profile} />
        ) : showComponent === "Work" ? (
          <Work />
        ) : showComponent === "Education" ? (
          <Education />
        ) : showComponent === "Contact" ? (
          <UserContact />
        )
          : null}
      </div>
      {/* profile banner end */}


      {/* add the chatting component here */}
      <div className="fixed bottom-10 right-4">
        <ChatOnetoOne />
      </div>

     

        {/* portfolio section start */}


        {/* skill section start */}

        {/* about section start */}
        <UserAbout />
        {/* project in slider start */}


      



    </div>
  );
};

export default Profile;
