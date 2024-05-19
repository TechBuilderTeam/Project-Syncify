import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditWorkspace = () => {
  const { workspaceId } = useParams();
  const [workspaceName, setWorkspaceName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // Fetch existing workspace details when component mounts
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

    // Ensure workspace name is provided and user is logged in
    if (!workspaceName) {
      setError("Please enter a workspace name.");
      return;
    }

    const updatedWorkspace = {
      name: workspaceName,
      workSpace_manager: user.user_id,
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

      // Check if the status is 200 (OK)
      if (response.status === 200) {
        setSuccess("Workspace updated successfully!");
        setError("");
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

  return (
    <div>
      <div className="px-5 pt-20 md:px-10 md:py-20">
        <h2 className="mt-3 mb-3 text-2xl font-semibold text-center">
          Edit Workspace
        </h2>
        <div className="text-center my-5">
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center flex-col items-center space-y-3 md:space-y-6"
        >
          <div>
            <label htmlFor="workspaceName">Workspace Name</label> <br />
            <input
              type="text"
              id="workspaceName"
              className="border-2 p-4 w-96 mt-3"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              required
              placeholder="Enter Workspace Name"
            />
          </div>
          <div>
            <label htmlFor="workspaceManager">Workspace Manager:</label>
            <br />
            <input
              type="text"
              id="workspaceManager"
              value={user.user_id}
              readOnly
              className="border-2 p-4 w-96 mt-3"
            />
          </div>
          <button
            type="submit"
            className="border-none outline-none bg-[#8401A1] hover:bg-gradient-to-r from-[#30acc2] to-[#8401A1] text-white rounded-sm w-96 p-4"
          >
            Update Workspace
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditWorkspace;
