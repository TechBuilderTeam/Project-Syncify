import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteWorkspace from "./DeleteWorkspace";
import { FaRegEdit } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import { FaCirclePlus } from "react-icons/fa6";
import { MdDoubleArrow } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Workspace = () => {
  const { workspaceId } = useParams();
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [currentWorkspaceId, setCurrentWorkspaceId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return;
    }

    const fetchWorkspaces = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://projectsyncifyapi.onrender.com/workspace/user/${user.userId}/workspaces/`
        );
        setWorkspaces(response.data);
        setLoading(false);
        setError("");
      } catch (err) {
        setError("error");
        setLoading(false);
      }
    };

    fetchWorkspaces();
    setLoading(false);
  }, [user]);

  const handleDeleteWorkspace = async (workspaceId) => {
    try {
      toast.success("Workspace deleted successfully!");

      setWorkspaces((prevWorkspaces) =>
        prevWorkspaces.filter((workspace) => workspace.id !== workspaceId)
      );
    } catch (error) {
      console.error("Error deleting workspace:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!workspaceName) {
      setError("Please enter a workspace name.");
      return;
    }

    const newWorkspace = {
      name: workspaceName,
      workSpace_manager: user.userId.toString(),
    };

    try {
      setLoading(true);
      setSuccess("");
      setError("");

      const response = await axios.post(
        "https://projectsyncifyapi.onrender.com/workspace/list/",
        newWorkspace,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        toast.success("Workspace created successfully!");
        setSuccess("Workspace created successfully!");
        setError("");
        setWorkspaceName("");
        setLoading(false);
        navigate("/workspace");
      } else {
        setError("Failed to create the workspace.");
        setSuccess("");
        setLoading(false);
      }
    } catch (error) {
      console.error("There was an error creating the workspace!", error);
      setError("There was an error creating the workspace!");
      setSuccess("");
      setLoading(false);
    }
  };
  const handleWorkspaceEdit = async (e) => {
    e.preventDefault();

    if (!workspaceName) {
      setError("Please enter a workspace name.");
      return;
    }

    const updatedWorkspace = {
      name: workspaceName,
      workSpace_manager: user.userId,
    };

    try {
      const response = await axios.put(
        `https://projectsyncifyapi.onrender.com/workspace/list/${currentWorkspaceId}/`,
        updatedWorkspace,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSuccess("Workspace updated successfully!");
        setError("");
        document.getElementById("editWorkspace").close();
        // Show toast notification for successful update
        toast.success("Workspace updated successfully!");
        // Update the workspace list after successful edit
        setWorkspaces((prevWorkspaces) =>
          prevWorkspaces.map((workspace) =>
            workspace.id === currentWorkspaceId
              ? { ...workspace, name: workspaceName }
              : workspace
          )
        );
      } else {
        setError("Failed to update the workspace.");
        setSuccess("");
      }
    } catch (error) {
      console.error("There was an error updating the workspace!", error);
      setError("There was an error updating the workspace!");
      setSuccess("");
    }
  };

  const openEditModal = (workspace) => {
    setWorkspaceName(workspace.name);
    setCurrentWorkspaceId(workspace.id);
    document.getElementById("editWorkspace").showModal();
  };

  if (!user) {
    return <div>Loading user information...</div>;
  }

  if (loading) {
    return (
      <div>
        {loading && (
          <div className="flex justify-center items-center">
            <span className="loading loading-ring loading-md"></span>Workspace
            Loading....
          </div>
        )}
      </div>
    );
  } else if (workspaces.length === 0) {
    return (
      <div className="flex justify-center items-center my-10">
        <h1 className="text-2xl">
          No workspaces available for your account. <br />
          <div className="flex items-center gap-2 my-2">
            <div className="w-100 sm:w-40">
              <button
                className="flex justify-center border rounded-tl-xl w-40 bg-purple-500 p-4 text-white shadow-lg"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                <FaPlus className="hover:text-black" />
              </button>
            </div>

            <dialog id="my_modal_4" className="modal">
              <div className="modal-box bg-white dark:bg-black">
                <form onSubmit={handleSubmit}>
                  <button
                    type="button"
                    className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]"
                    onClick={() =>
                      document.getElementById("my_modal_4").close()
                    }
                  >
                    ✕
                  </button>
                  <h2 className="font-bold text-2xl text-center my-3">
                    Create New Workspace
                  </h2>
                  <div className="form-control">
                    <input
                      type="text"
                      id="workspaceName"
                      className="border-2 p-4 w-100 mt-3 bg-slate-100 dark:bg-slate-900"
                      value={workspaceName}
                      onChange={(e) => setWorkspaceName(e.target.value)}
                      required
                      placeholder="Enter Workspace Name"
                    />
                  </div>
                  <div className="flex justify-center mt-6">
                    <button className="w-full border rounded-tl-xl w-40 bg-purple-500 p-4 text-white shadow-lg">
                      Add Workspace
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mt-4 mb-10">
        Workspaces
      </h1>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-10 items-center">
        {workspaces.map((workspace) => (
          <div key={workspace.id} className="w-100 sm:w-80">
            <div className="bg-white border rounded-xl shadow-lg">
              <div className="px-5 py-6">
                <h2 className="text-lg font-semibold">{workspace.name}</h2>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
              </div>

              <div className="px-5 flex gap-5 items-center">
                <button onClick={() => openEditModal(workspace)}>
                  <FaRegEdit className="text-xl" />
                </button>
                <dialog id="editWorkspace" className="modal">
                  <div className="modal-box bg-white dark:bg-black">
                    <form onSubmit={handleWorkspaceEdit}>
                      <button
                        type="button"
                        className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]"
                        onClick={() =>
                          document.getElementById("editWorkspace").close()
                        }
                      >
                        ✕
                      </button>
                      <h2 className="text-2xl font-bold mb-4 text-center">
                        Update Workspace
                      </h2>

                      <div className="form-control">
                        <input
                          type="text"
                          id="workspaceName"
                          className="w-full border-2 p-4 mt-3"
                          value={workspaceName}
                          onChange={(e) => setWorkspaceName(e.target.value)}
                          required
                          placeholder="Enter Workspace Name"
                        />
                      </div>
                      <div className="form-control mb-4">
                        <input
                          type="text"
                          id="workspaceManager"
                          value={user.userId}
                          readOnly
                          className="border-2 p-4 w-full mt-3"
                        />
                      </div>
                      <div className="flex justify-between my-4">
                        <button
                          type="submit"
                          className="text-lg border-none outline-none bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white rounded w-full px-4 py-3"
                        >
                          Update Workspace
                        </button>
                      </div>
                    </form>
                  </div>
                </dialog>
                <DeleteWorkspace
                  workspaceId={workspace.id}
                  onDelete={handleDeleteWorkspace}
                />
              </div>
              <div className="flex justify-end">
                <div className="bg-purple-500 rounded-tl-xl p-3 text-white">
                  <Link to={`${workspace.id}`}>
                    <MdDoubleArrow className="w-[50px] hover:text-black " />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="w-100 sm:w-40">
          <button
            className="flex justify-center border rounded-tl-xl w-40 bg-purple-500 p-4 text-white shadow-lg"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            <FaPlus className="hover:text-black" />
          </button>
        </div>

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box bg-white dark:bg-black">
            <form onSubmit={handleSubmit}>
              <button
                type="button"
                className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]"
                onClick={() => document.getElementById("my_modal_4").close()}
              >
                ✕
              </button>
              <h2 className="font-bold text-2xl text-center my-3">
                Create New Workspace
              </h2>
              <div className="form-control">
                <input
                  type="text"
                  id="workspaceName"
                  className="border-2 p-4 w-100 mt-3 bg-slate-100 dark:bg-slate-900"
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                  required
                  placeholder="Enter Workspace Name"
                />
              </div>
              <div className="flex justify-center mt-6">
                <button className="w-full border rounded-tl-xl w-40 bg-purple-500 p-4 text-white shadow-lg">
                  Add Workspace
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Workspace;
