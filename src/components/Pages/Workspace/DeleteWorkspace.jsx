import React, { useState } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
const DeleteWorkspace = ({ workspaceId, onDelete }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.delete(
        `https://projectsyncifyapi.onrender.com/workspace/list/${workspaceId}/`
      );

      if (response.status === 204) {
        onDelete(workspaceId);
      } else {
        setError("Failed to delete the workspace.");
      }
    } catch (error) {
      setError("Failed to delete the workspace.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        className="flex justify-center items-center"
        onClick={handleDelete}
        disabled={loading}
      >
        {loading ? (
          <MdDeleteForever className="text-2xl" />
        ) : (
          <MdDeleteForever className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default DeleteWorkspace;
