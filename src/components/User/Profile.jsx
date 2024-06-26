import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import { CiEdit } from "react-icons/ci";
import Info from "./Info";
import ChatOnetoOne from "../Pages/Chat/ChatOnetoOne";
import Work from "./Work";
import Education from "./Education";
import UserContact from "./UserContact";
import UserAbout from "./UserAbout";
import UserPortfolio from "./UserProtfolio";
import UserSkills from "./UserSkills";
import ProjectSlider from "./ProjectSlider";
import { Element, ScrollLink } from "react-scroll";
import axios from "axios";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading ] = useState(true);
  const [reload, setReload] = useState(false);
  const [showComponent, setShowComponent] = useState("Info");

  const [edit, setEdit] = useState(false);

  const handleCloseModal = () => {
    document.getElementById("UserEdit").close();
  };

  const handleAddUserEdit = () => {
    handleCloseModal();
    setEdit(true);
  };
  useEffect(() => {
     
    const getProfileData = async() => {
      setLoading(true)
      try{
        const result = await axios.get(`https://projectsyncifyapi.onrender.com/api/v1/profile/${user?.userId}/`)
        console.log({result})
        setProfile(result.data)
        setLoading(false)
      }
      catch(error){
        console.log(error)
        setLoading(false)
      }
    }

    if(user && user.userId){
      getProfileData();
    }
  }, [user, reload]);

  console.log({ profile });
  return (
    <div className=" py-10">
      {/* profile banner */}
      <div className="py-16 md:py-28 mb-32 bg-gradient-to-r from-sky-50 dark:from-sky-900 to-sky-500 dark:to-black relative ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-6">
              <div className="pl-10 md:pl-40">
                <img
                  src={user && profile?.image}
                  alt={user && user.name}
                  className="w-28 md:w-40 h-28 md:h-40 rounded-full border-4 border-sky-900 dark:border-sky-300"
                />
              </div>
              <div className="flex flex-col justify-start">
                <h1 className="text-xl md:text-3xl font-bold">
                  {" "}
                  {user && user?.name}
                </h1>
                {/* <p className=""> {user && user.email}</p> */}
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
                className={`rounded py-1 px-2  text-sm hover:bg-sky-200 dark:hover:bg-sky-300 hover:text-sky-900 ${
                  showComponent === "Info" ? "bg-sky-50 dark:bg-sky-950 " : ""
                }`}
              >
                Info
              </button>
              {/* <button
                onClick={() => setShowComponent("Work")}
                className={`rounded py-1 px-2  text-sm   hover:bg-sky-200 dark:hover:bg-sky-300 hover:text-sky-900 ${showComponent === "Work"
                  ? "bg-sky-50 dark:bg-sky-950 "
                  : ""
                  }`}
              >
                Work
              </button> */}
              {/* <button
                onClick={() => setShowComponent("Education")}
                className={`rounded py-1 px-2  text-sm hover:bg-sky-200 dark:hover:bg-sky-300 hover:text-sky-900  ${showComponent === "Education"
                  ? "bg-sky-50 dark:bg-sky-950"
                  : ""
                  }`}
              >
                Education
              </button> */}
              <button
                onClick={() => setShowComponent("Contact")}
                className={`rounded py-1 px-2  text-sm hover:bg-sky-200 dark:hover:bg-sky-300 hover:text-sky-900  ${
                  showComponent === "Contact" ? "bg-sky-50 dark:bg-sky-950" : ""
                }`}
              >
                Contact
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end text-4xl w-full md:w-1/3 mt-0 md:mt-28 mr-10 md:mr-40 mb-10">
            <div title="Edit">
              <button
                onClick={() => document.getElementById("UserEdit").showModal()}
              >
                <CiEdit className="" />
              </button>
              <dialog
                id="UserEdit"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box bg-white dark:bg-black">
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() => document.getElementById("UserEdit").close()}
                  >
                    ✕
                  </button>
                  <h3 className="font-bold text-2xl text-center dark:text-[#73e9fe] text-[#0c01a1] ">
                    Edit
                  </h3>
                  <form onSubmit={handleAddUserEdit}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">
                          Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="input input-bordered bg-slate-200 dark:bg-black"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">
                          Position
                        </span>
                      </label>
                      <input
                        type="text"
                        name="position"
                        className="input input-bordered bg-slate-200 dark:bg-black"
                        required
                      />
                    </div>
                    <div className="modal-action">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white  font-bold rounded w-full text-lg"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      {/* info  */}
      <div className="translate-y-[-200px] w-4/5 bg-gradient-to-r from-sky-200 dark:from-sky-700  to-sky-600 dark:to-black text-[#0c01a1] dark:text-white -bottom-4 md:bottom-0 rounded mx-10 md:mx-28">
        {showComponent === "Info" ? (
          <Info user={user} profile={profile} />
        ) : // ) : showComponent === "Work" ? (
        //   <Work />
        // ) : showComponent === "Education" ? (
        //   <Education />
        showComponent === "Contact" ? (
          <UserContact user={user} contact={profile.contact} reload={reload} setReload={setReload} />
        ) : null}
      </div>
      {/* profile banner end */}

      {/* add the chatting component here */}
      <div className="fixed bottom-10 right-4">
        <ChatOnetoOne />
      </div>
      
      <div>
      {loading && <div className="flex items-center justify-center"><span className="loading loading-dots loading-lg"> </span>Profile loading ...</div>}
      </div>

      {profile && <>
        
        {/* about section start */}
      <UserAbout user={user} about={profile.about} reload={reload} setReload={setReload}/>

      {/* portfolio section start */}
      <UserPortfolio user={user} portfolio={profile.portfolio} reload={reload} setReload={setReload} />

      {/* skill section start */}
      <UserSkills  user={user} skills={profile.skills} reload={reload} setReload={setReload}/>

      {/* education section start */}

      <Education  user={user} education={profile.education} reload={reload} setReload={setReload}/>

      {/* work section start */}
      <Work  user={user} work={profile.work} reload={reload} setReload={setReload}/>
      
      </>}

      {/* project in slider start */}

      <ProjectSlider user={user} profile={profile} />
    </div>
  );
};

export default Profile;
