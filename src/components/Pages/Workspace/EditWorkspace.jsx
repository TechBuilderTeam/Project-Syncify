import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditWorkspace = () => {
  const { workspaceId } = useParams();
  const [workspaceName, setWorkspaceName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  useEffect(() => {
    fetchWorkspaceDetails();
  }, [workspaceId]);

  const fetchWorkspaceDetails = async () => {
    try {
      const response = await axios.get(
        `https://projectsyncifyapi.onrender.com/workspace/list/${workspaceId}/`
      );
      const workspace = response.data;
      setWorkspaceName(workspace.name);
    } catch (error) {
      console.error("Error fetching workspace details:", error);
      setError("Error fetching workspace details");
    }
  };

  const handleSubmit = async (e) => {
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
        `https://projectsyncifyapi.onrender.com/workspace/list/${workspaceId}/`,
        updatedWorkspace,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSuccess("Project updated successfully!");
        toast.success("Project updated successfully!");
        navigate("/workspace");
        setError("");
      } else {
        setError("Failed to update the Project.");
        setSuccess("");
      }
    } catch (error) {
      console.error("There was an error updating the Project!", error);
      setError("There was an error updating the Project!");
      setSuccess("");
    }
  };

  return (
    <div>
      <div className="px-5 pt-20 md:px-10 md:py-20">
        <h2 className="mt-3 mb-3 text-2xl font-semibold text-center">
          Edit Project
        </h2>
        <div className="text-center my-5">
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center flex-col items-center space-y-3 md:space-y-6 "
        >
          <div className="">
            <label htmlFor="workspaceName">Project Name</label> <br />
            <input
              type="text"
              id="workspaceName"
              className="input input-bordered w-96 mt-3 bg-white dark:bg-black"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              required
              placeholder="Enter Workspace Name"
            />
          </div>
          {/* <div>
            <label htmlFor="workspaceManager">Project Manager:</label>
            <br />
            <input
              type="text"
              id="workspaceManager"
              value={user.userId}
              readOnly
              className="border-2 p-4 w-96 mt-3"
            />
          </div> */}
          <button className="border-none outline-none bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white rounded w-96 px-4 py-2" type="submit">Update Project</button>
        </form>
      </div>
    </div>
  );
};

export default EditWorkspace;
