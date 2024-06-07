import { useContext, useState } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import { toast } from "react-toastify";

const DeleteWorkspace = ({ workspaceId, onDelete }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    const deleteUser = { user_id: user?.userId };
    // console.log({ deleteUser });

    try {
      const response = await axios.request({
        method: 'delete',
        url: `https://projectsyncifyapi.onrender.com/workspace/list/${workspaceId}/`,
        data: deleteUser
      });
      // console.log(response);
      toast.success("Workspace deleted successfully!");

      if (response.status === 204) {
        onDelete(workspaceId);
      } else {
        setError("Failed to delete the workspace.");
      }
    } catch (error) {
      setError("Failed to delete the workspace.");
      console.log(error);
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
