import React, { useState } from "react";
import axios from "axios";

const CreateWorkspace = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!workspaceName) {
      setError("Please enter a workspace name.");
      return;
    }

    const newWorkspace = {
      name: workspaceName,
      workSpace_manager: user.user_id,
    };

    try {
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
        setSuccess("Workspace created successfully!");
        setError("");
        // Reset the form
        setWorkspaceName("");
      } else {
        setError("Failed to create the workspace.");
        setSuccess("");
      }
    } catch (error) {
      console.error("There was an error creating the workspace!", error);
      setError("There was an error creating the workspace!");
      setSuccess("");
    }
  };
  return (
    <div>
      <div className="px-5 pt-20 md:px-10 md:py-20 ">
        <h2 className="mt-3 mb-5 text-2xl font-semibold text-center">
          Create a new workspace
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
            <label htmlFor="workspaceName">Workspace Name </label> <br />
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
            Create Workspace
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateWorkspace;
