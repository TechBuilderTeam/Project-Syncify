import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteWorkspace from "./DeleteWorkspace";
import { FaRegEdit } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";

const Workspace = () => {
  const [workspaces, setWorkspaces] = useState([]);
  // const [loading, setLoading] = useState(true);
  const {user,loading, setLoading} = useContext(AuthContext)
  const [error, setError] = useState(null);
  // const user = JSON.parse(localStorage.getItem("user"));

  console.log('user data show from workspace -> ',{user})

  useEffect(() => {
    const fetchWorkspaces = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://projectsyncifyapi.onrender.com/workspace/user/${user.userId}/workspaces/`
        );
        setWorkspaces(response.data);
      } catch (err) {
        setError("Failed to fetch workspaces");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkspaces();
  }, []);

  const handleDeleteWorkspace = (workspaceId) => {
    setWorkspaces((prevWorkspaces) =>
      prevWorkspaces.filter((workspace) => workspace.id !== workspaceId)
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  if (workspaces.length === 0) {
    return (
      <div className="flex justify-center items-center my-10">
        <h1 className="text-xl">
          No workspaces available for your account. <br />
          <a href="/createworkspace" className="hover:underline">
            Create a new workspace
          </a>
        </h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold my-3">Workspaces</h1>
      <div className="overflow-x-auto">
        <table className="table border-separate dark:bg-black">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Manager</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {workspaces.map((workspace) => (
              <tr key={workspace.id} className="bg-base-200">
                <th>{workspace.id}</th>
                <td>{workspace.name}</td>
                <td>{user.names}</td>
                <td>{user.email}</td>
                <th className="flex justify-between">
                  <Link to={`/editworkspace/${workspace.id}`}>
                    <FaRegEdit className="text-xl" />
                  </Link>
                  <DeleteWorkspace
                    workspaceId={workspace.id}
                    onDelete={handleDeleteWorkspace}
                  />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Workspace;
