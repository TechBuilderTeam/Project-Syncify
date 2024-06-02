import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import CreateTask from "./CreateTask";
import DragNDrop from "../Tasks/DragNDrop";
import EditDeleteTask from "../Tasks/EditDeleteTask";
import { useLocation, useParams } from "react-router-dom";
import CreateBoard from "./CreateBoard";
import axios from "axios";
import { IoIosCreate } from "react-icons/io";
import { FaRegEdit} from 'react-icons/fa';

const Board = () => {
    const {id} = useParams()
    const location = useLocation();

    const timelineData = location.state;
    console.log('timeline data recive in board from location state -> ',timelineData);
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [boards, setBoards] = useState(null)
    // const [currentTask, setCurrentTask] = useState(null);

    const getBoard = async () => {
      const result = await axios.get(`https://projectsyncifyapi.onrender.com/workspace/timeline/scrum/${timelineData.timelineId}/`);
      console.log(result.data)
      setBoards(result.data)
  }

    useEffect(() => {
        const fetch = async () => {
          const result = await axios.get(`https://projectsyncifyapi.onrender.com/workspace/tasks/${timelineData?._id}`)
            console.log('task result -> ',result)
        }
        
        getBoard()
        fetch()
    }, [user?.email]);

    const updateTasks = () => {
        fetch(`https://task-backend-azure.vercel.app/tasks`)
            .then(res => res.json())
            .then(data => {
                const filteredTasks = data.filter(task => task.email === user?.email);
                setTasks(filteredTasks);
            })
            .catch(error => console.log(error));
    };
    
    return (
        <div className="h-screen">
            {/** timeline all data exist in timelineData variable */}
            <div>
                <CreateBoard timelineData={timelineData} />
            </div>
            <div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {boards?.map((workspace) => (
          <div key={workspace.timeline_Name
          } className="border dark:border-gray-700 rounded-lg shadow-lg shadow-gray-400 p-6">
            <h2 className="text-2xl font-semibold mb-2">{workspace.name}</h2>
            <div className="text-sm">
              <p>Details: <span className="text-gray-800">{workspace.details }</span> </p>
              {/* <p >Email:  <span className="text-gray-800">{workspace.workspace_manager_email}</span></p>
              <p >Members:  <span className="text-gray-800">{workspace.workspace_total_members}</span> </p>
              <p>Date:  <span className="text-gray-800">{workspace.created_at}</span> </p> */}
            </div>

{/** Member edit button and model start */}
<button className='btn-ghost'>  </button>
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="mx-4" onClick={() => document.getElementById('task').showModal()}>
<FaRegEdit className="text-xl" />
</button>
<dialog id="task" className="modal">
<div className="modal-box bg-white dark:bg-black">
<button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]" onClick={() => document.getElementById('edit').close()}>✕</button>
                                                            <h2 className="text-2xl font-bold mb-4 text-center">Create task</h2>
<form>
  <div className='form-control'>
      <label htmlFor="email" className="label">Email</label>
      <input type="email" id="email" name="email"  className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter Email" />
  </div>
  <div className="form-control mb-4">
      <label htmlFor="email" className="label">User Id</label>
      <input type="text" id="user_id" name="user_id"  className="input input-bordered bg-slate-200 dark:bg-black" />

  </div>
  <div className="form-control mb-4">
      <label htmlFor="userType" className="label">Role</label>
      <select id="userType" name="userType" className="select select-bordered bg-slate-200 dark:bg-black">
          <option value="Associate Manager">Associate Manager</option>
          <option value="Team Leader">Team Leader</option>
          <option value="Member">Member</option>
      </select>
  </div>
  <div className="flex justify-between my-4">
      <button type="submit" className="text-lg border-none outline-none bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white rounded w-full px-4 py-3">Update Member</button>
  </div>
</form>
</div>
</dialog>
{/** Member edit button and model end */}

            {/* <div className="flex justify-between mt-4">
              <div className="flex justify-center items-center gap-1">
                <Link to={`${workspace.id}`}>
                  <MdOutlineFileOpen
                    className="text-xl" />
                </Link>
                <Link to={`${workspace.id}`}>
                  Visit
                </Link>

              </div>
              <div className="flex justify-center items-center gap-1">
                <Link to={`/editworkspace/${workspace.id}`}>
                  <FaRegEdit className="text-xl" />
                </Link>
                <DeleteWorkspace
                  workspaceId={workspace.id}
                  onDelete={handleDeleteWorkspace}
                />
              </div>

            </div> */}

          </div>
        ))}

</div>
            </div>
            <div>Timeline Details: {timelineData?.name} </div>
            <CreateTask updateTasks={updateTasks} />
          
        </div>
    );
};

export default Board;
