import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from './../../../Providers/AuthProviders/AuthProviders';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaCirclePlus } from "react-icons/fa6";

const CreateWorkspace = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate()


  const { user, loading, setLoading } = useContext(AuthContext)

  console.log({ user })

  const handleCloseModelButton = () => {
    document.getElementById('my_modal_3').close()
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!workspaceName) {
      setError("Please enter a workspace name.");
      return;
    }

    const newWorkspace = {
      name: workspaceName,
      workSpace_manager: user?.userId.toString(),
    };

    console.log({ newWorkspace })

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
        handleCloseModelButton();
        setError("");

        // Reset the form
        setWorkspaceName("");
        setLoading(false)
        navigate('/workspace')
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
      if(error.response.data.workSpace_manager[0]){
         toast.warning("Please reload this")
      }
    }
  };
  return (
    <div>
      <div className=" ">
        

        {/* {loading && <div className="flex justify-center items-center"><span className="loading loading-ring loading-md"></span>Please wait! Creating new workspace.....</div>} */}

        {/* <div className="text-center my-5">
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </div> */}
        <button className="bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white  font-bold px-20 py-16 rounded-md" onClick={() => document.getElementById('my_modal_3').showModal()}><FaCirclePlus className="text-7xl"/></button>
        {/* modal open */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-white dark:bg-black">
            <form onSubmit={handleSubmit} >
              <button className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]" onClick={handleCloseModelButton}>✕</button>
              <h3 className="font-bold text-2xl text-center mb-5">Create New Workspace</h3>
              <div className="form-control">
                <label className="label">Workspace Name </label>
                <input
                  type="text"
                  id="workspaceName"
                  className="input input-bordered bg-slate-200 dark:bg-black"
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                  required
                  placeholder="Enter Workspace Name"
                />
              </div>
            
              <div className="flex justify-center mt-6">
                <button className="border-none outline-none bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white rounded w-full px-4 py-2" type="submit">Create</button>
              </div>
            </form>
          </div>
        </dialog>
       
      </div>
    </div>
  );
};

export default CreateWorkspace;
