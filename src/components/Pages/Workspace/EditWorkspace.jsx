import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaRegEdit } from "react-icons/fa";

const EditWorkspace = ({ workspace }) => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const { id, name } = workspace || {};

  useEffect(() => {
    if (id) {
      setWorkspaceName(name);
    }
  }, [id, name]);

  const handleCloseModelButton = () => {
    document.getElementById('my_modal_4').close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!workspaceName) {
      setError("Please enter a workspace name.");
      return;
    }

    const updatedWorkspace = {
      "name": workspaceName,
      "workSpace_manager": user.userId,
    };

    try {
      const result = await axios.put(`https://projectsyncifyapi.onrender.com/workspace/list/${id}/`, updatedWorkspace);

      if (result.status === 200) {
        toast.success("Workspace updated successfully!");
        setSuccess("Workspace updated successfully!");
        handleCloseModelButton();
      } else {
        toast.error("Failed to update workspace.");
        setError("Failed to update workspace.");
      }
    } catch (error) {
      console.error("Error updating workspace:", error);
      setError("Error updating workspace.");
      toast.error("Failed to update workspace.");
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
            <button className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]" onClick={handleCloseModelButton}>✕</button>
            <div className="form-control">
              <label>Workspace Name</label>
              <input
                type="text"
                id="workspaceName"
                className="input input-bordered w-full"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                required
                placeholder="Enter Workspace Name"
              />
            </div>
            <div>
              <label htmlFor="worspaceId">Id</label>
              <input
                type="text"
                id="worspaceId"
                value={id}
                readOnly
                className="input input-bordered w-full"
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
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default EditWorkspace;
