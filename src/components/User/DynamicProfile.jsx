import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import { LuMessagesSquare } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { AiFillProject, AiOutlineProject, AiOutlineTeam } from "react-icons/ai";
import { useParams } from "react-router-dom";

const DynamicProfile = () => {
  const { user } = useContext(AuthContext);
  const {pId} = useParams();
  console.log("profile id -> ",pId)
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user && user.userId && pId) {
      fetch(`https://projectsyncifyapi.onrender.com/api/v1/user/details/${pId}/`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          console.log('profile data -> ',data);
          setProfile(data);
        })
        .catch((error) => {
          console.error('Error fetching profile:', error);
        });
    }
  }, [user]);

  console.log({ profile })
  return (
    <div className="h-screen  py-10">

      {/* profile banner */}
      <div className="py-28 bg-gradient-to-r from-sky-100 dark:from-sky-900 to-sky-500 dark:to-bg-sky-500 ">
        <div className="flex justify-between items-center gap-10">
          <div className="flex items-center gap-6 w-1/2">
            <div className="pl-40">
              <img src={profile?.image} alt={profile?.first_name} className="w-40 h-40 rounded-full border-4 border-sky-900" />
            </div>
            <div className="flex flex-col justify-start">
              <h1 className="text-3xl text-center"> {profile?.first_name}</h1>
              <p className=""> {profile?.email}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 text-4xl w-1/2 mt-28">

            <div title="Edit">
              <CiEdit />
            </div>
            <div title="Messages">
              <LuMessagesSquare />
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

      {/* profile banner end */}

      {/* profile info */}
      <div className="py-20 px-40">
        <h1 className="text-3xl font-bold">Info</h1>

        <div className="mt-4 text-lg font-bold ">
          <h1 className="my-2">Name:
            <span className="font-normal"> {profile?.first_name}</span> 
          </h1>
          <h1 className="my-2">Email: <span className="font-normal"> {profile?.email}</span></h1>
          <h1 className="my-2">Joinded: <span className="font-normal"> {profile?.date_joined }</span></h1>
        </div>
      </div>
      {/* profile info end */}

    </div>
  );
};

export default DynamicProfile;
