import { FaArrowLeft, FaArrowRight, FaBoxTissue, FaChalkboard } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaListUl } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { IoHomeSharp, IoPeopleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillPrinter } from "react-icons/ai";
import { GoTasklist } from "react-icons/go";

const DynamicSidebar = ({ sidebarToggle, setSidebarToggle, id }) => {
  const [open, setOpen] = useState(false);
  const [workspaceDetails, setWorkspaceDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "bg-blue-500 text-white dark:text-[#8401A1] dark:bg-white"
      : "text-black dark:text-white";
  };

  useEffect(() => {
    const fetchWorkspaces = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://projectsyncifyapi.onrender.com/api/v2/workspace/${id}/details/`
        );
        setWorkspaceDetails(response.data);
        console.log("workspace details data -> ", response.data);
      } catch (err) {
        console.log("workspace details error data -> ", err);
      }
    };

    fetchWorkspaces();
    setLoading(false);
    console.log("workspace data -> ", workspaceDetails);
  }, [id]);

  console.log('sidebar toggle from dynamic sidebar -> ', sidebarToggle);

  return (
    <div
      className={`${open ? "w-20" : "block w-20 md:w-60"
        } absolute top-20 left-0 h-full px-4 py-2 border-r border-gray-300`}
    >
      {open ? (
        <FaArrowRight
          onClick={() => { setOpen(!open); setSidebarToggle(!sidebarToggle) }}
          className="absolute cursor-pointer rounded-full -right-3 top-9 w-5 h-5 border-2"
        />
      ) : (
        <FaArrowLeft
          onClick={() => { setOpen(!open); setSidebarToggle(!sidebarToggle) }}
          className="absolute cursor-pointer rounded-full -right-3 top-9 w-5 h-5 border-2 text-xs"
        />
      )}
      <div className="my-2 mb-4">
        <h1 className={`${open? "text-xs font-semibold " : "text-sm md:text-lg font-bold text-center"}`}> 
        {open ? workspaceDetails?.name.slice(0, 10) : workspaceDetails?.name}
        </h1>
      </div>
      <hr />
      <ul className={`${open ? "text-start" : "mt-3 font-bold text-sm text-center md:text-start md:px-2 "}`}>
        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass("/")}`}>
          <Link to="/" className="px-3">
            <IoHomeSharp className="inline-block w-6 h-6 mr-2 -mt-2" />
            {!open && <span>Home</span>}
          </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass(`/workspace/${id}/profile`)}`}>
          <Link to={`/workspace/${id}/profile`} className="px-3">
            <CgProfile className="inline-block w-6 h-6 mr-2 -mt-2" />
            {!open && <span>Profile</span>}
          </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass(`/workspace/${id}`)}`}>
          <Link to={`/workspace/${id}`} className="px-3">
            <IoPeopleSharp className="inline-block w-6 h-6 mr-2 -mt-2" />
            {!open && <span>Members</span>}
          </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass("/timeline")}`}>
          <Link to={`/workspace/${id}/plans`} className="px-3">
            <CiViewTimeline className="inline-block w-6 h-6 mr-2 -mt-2" />
            {!open && <span>Plans</span>}
          </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass(`/workspace/${id}/boards`)}`}>
          <Link to={`/workspace/${id}/boards`} className="px-3">
            <FaChalkboard className="inline-block w-6 h-6 mr-2 -mt-2" />
            {!open && <span>Boards</span>}
          </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass(`/workspace/${id}/tasks`)}`}>
          <Link to={`/workspace/${id}/tasks`} className="px-3">
            <GoTasklist className="inline-block w-6 h-6 mr-2 -mt-2" />
            {!open && <span>Tasks</span>}
          </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass(`/workspace/${id}/export`)}`}>
          <Link to={`/workspace/${id}/export`} className="px-3">
            <AiFillPrinter className="inline-block w-6 h-6 mr-2 -mt-2" />
            {!open && <span>Export</span>}
          </Link>
        </li>
        <li className={`mb-2 rounded hover:shadow py-2 ${getLinkClass(`/workspace/${id}/calendar`)}`}>
          <Link to={`/workspace/${id}/calendar`} className="px-3">
            <SlCalender className="inline-block w-6 h-6 mr-2 -mt-2" />
            {!open && <span>Calendar</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DynamicSidebar;
