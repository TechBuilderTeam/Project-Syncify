import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import CreateTask from "./CreateTask";
import DragNDrop from "../Tasks/DragNDrop";
import EditDeleteTask from "../Tasks/EditDeleteTask";
import { useLocation, useParams } from "react-router-dom";
import CreateBoard from "./CreateBoard";
import axios from "axios";

const Board = () => {
    const {id} = useParams()
    const location = useLocation();

    const timelineData = location.state;
    console.log('timeline data recive in board from location state -> ',timelineData);
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    // const [currentTask, setCurrentTask] = useState(null);

    const getBoard = async () => {
      const result = await axios.get(`https://projectsyncifyapi.onrender.com/workspace/timeline/scrum/${id}/`);
      console.log(result.data)
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
            {/* <div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {workspaces.map((workspace) => (
          <div key={workspace.id} className="border dark:border-gray-700 rounded-lg shadow-lg shadow-gray-400 p-6">
            <h2 className="text-2xl font-semibold mb-2">{workspace.name.slice(0, 20)}</h2>
            <div className="text-sm">
              <p>Manager: <span className="text-gray-800">{workspace.workspace_manager_name }</span> </p>
              <p >Email:  <span className="text-gray-800">{workspace.workspace_manager_email}</span></p>
              <p >Members:  <span className="text-gray-800">{workspace.workspace_total_members}</span> </p>
              <p>Date:  <span className="text-gray-800">{workspace.created_at}</span> </p>
            </div>

            <div className="flex justify-between mt-4">
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

            </div>

          </div>
        ))}

</div>
            </div> */}
            <div>Timeline Details: {timelineData?.name} </div>
            <CreateTask updateTasks={updateTasks} />
          
        </div>
    );
};

export default Board;
