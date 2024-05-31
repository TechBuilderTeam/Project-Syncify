import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaRegEdit } from "react-icons/fa";

const EditWorkspace = ({ workspaceId }) => {

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const {id, name} = workspaceId || {};

  useEffect(() => {
    fetchWorkspaceDetails();
  }, [workspaceId.id]);

  const fetchWorkspaceDetails = async () => {
    try {
      const response = await axios.get(
        `https://projectsyncifyapi.onrender.com/workspace/list/${workspaceId.id}/`
      );
      const workspace = response.data;
     
      console.log("Fetched workspace details:", workspace);
    } catch (error) {
      console.error("Error fetching workspace details:", error);
      setError("Error fetching workspace details");
    }
  };

  const handleCloseModelButton = () => {
    document.getElementById('my_modal_4').close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const updatedWorkspace = {
      
      name: e.target.workspaceId.name.value,
      workSpace_manager: user.userId,
    };

    try {
      const response = await axios.put(`https://projectsyncifyapi.onrender.com/workspace/list/${id}/`,updatedWorkspace);
        console.log(response.data)
        toast.success("Workspace updated successfully!");
      
        setSuccess("Workspace updated successfully!");
        handleCloseModelButton();
        setError("");
        console.log("Updated workspace:", updatedWorkspace);
     
    } catch (error) {
      console.error("There was an error updating the workspace!", error);
      setError("There was an error updating the workspace!");
      setSuccess("");
    }
  };

  return (
    <div>
      <button className="" onClick={() => document.getElementById('my_modal_4').showModal()}>
        <FaRegEdit className="text-xl mt-1" />
      </button>
      <dialog className="modal" id="my_modal_4">
        <div className="modal-box bg-white dark:bg-black">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col items-center space-y-3 md:space-y-6"
          >
            <button
              type="button"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]"
              onClick={handleCloseModelButton}
            >
              ✕
            </button>
            <div>
              <label>Workspace Name</label>
              <input
                type="text"
                id="workspaceName"
                className="input input-bordered w-full"
            value={workspaceId.name}
                required
                placeholder="Enter Workspace Name"
              />
            </div>
            <div>
              <label htmlFor="workspaceManager">Workspace Manager:</label>
              <input
                type="text"
                id="workspaceManager"
                value={user.userId}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <button
              type="submit"
              className="border-none outline-none bg-[#8401A1] hover:bg-gradient-to-r from-[#30acc2] to-[#8401A1] text-white rounded-sm w-96 p-4"
            >
              Update Workspace
            </button>
            {/* {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>} */}
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default EditWorkspace;
