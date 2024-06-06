import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteWorkspace from "./DeleteWorkspace";
import { FaRegEdit } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosOpen } from "react-icons/io";
import { MdOutlineFileOpen } from "react-icons/md";

const Workspace = () => {
  const [reload, setReload] = useState(false);
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false)
  const { user } = useContext(AuthContext);
  const [error, setError] = useState(null);

  // const user = JSON.parse(localStorage.getItem("user"));

  console.log("user data show from workspace -> ", { user });

  useEffect(() => {
    const fetchWorkspaces = async () => {
      console.log("loading data ");
      setLoading(true);
      setError(null);
      try {
        console.log("currently in try block");
        const response = await axios.get(
          `https://projectsyncifyapi.onrender.com/workspace/user/${user.userId}/workspaces/`
        );
        console.log("response data -> ", response.data);
        setWorkspaces(response.data);
        setLoading(false);
        console.log("out try block");
        setReload(!reload);
        setError("");
      } catch (err) {
        setError("error");
        setLoading(false);
      }
    };

    fetchWorkspaces();
    //sabrina setted setLoading(false) here
    setLoading(false);
    console.log("workspace data -> ", workspaces);
  }, [user?.userId, reload]);

  const handleDeleteWorkspace = (workspaceId) => {
    setWorkspaces((prevWorkspaces) =>
      prevWorkspaces.filter((workspace) => workspace.id !== workspaceId)
    );
  };

  // if (error) {
  //   return <div>{error}</div>;
  // }
  if (loading) {
    return (
      <div>
        {loading && (
          <div className="flex justify-center items-center">
            <span className="loading loading-ring loading-md"></span>Project
            Loading....
          </div>
        )}
      </div>
    );
  } else if (workspaces.length === 0) {
    return (
      <div className="flex justify-center items-center my-10 px-10">
        <h1 className="text-2xl">
          No project available for your account. <br />
          {/* <div className="flex items-center  gap-2 my-2">
            <Link to="/createworkspace" className="">
              <FaCirclePlus />
            </Link>
            <Link to="/createworkspace" className="hover:underline">
              Create a new workspace
            </Link>
          </div> */}
        </h1>
      </div>
    );
  }
  return (
    <div className="px-10 py-16 md:py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {workspaces.map((workspace) => (
          <div
            key={workspace.id}
            className="border dark:border-gray-700 rounded-lg shadow-lg shadow-gray-400 p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {workspace.name.slice(0, 20)}
            </h2>
            <div className="text-sm">
              <p>
                Manager:{" "}
                <span className="text-gray-800 dark:text-gray-100">
                  {workspace.workspace_manager_name}
                </span>{" "}
              </p>
              <p>
                Email:{" "}
                <span className="text-gray-800 dark:text-gray-100">
                  {workspace.workspace_manager_email}
                </span>
              </p>
              <p>
                Members:{" "}
                <span className="text-gray-800 dark:text-gray-100">
                  {workspace.workspace_total_members}
                </span>{" "}
              </p>
              <p>
                Date:{" "}
                <span className="text-gray-800 dark:text-gray-100">
                  {workspace.created_at}
                </span>{" "}
              </p>
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex justify-center items-center gap-1">
                <Link to={`${workspace.id}`}>
                  <MdOutlineFileOpen className="text-xl" />
                </Link>
                <Link to={`${workspace.id}`}>Visit</Link>
              </div>
              <div className="flex justify-center items-center gap-1">
                <Link to={`/editworkspace/${workspace.id}`}>
                  <FaRegEdit className="text-xl" />
                </Link>
                <DeleteWorkspace
                  workspaceId={workspace.id}
                  onDelete={handleDeleteWorkspace}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workspace;
