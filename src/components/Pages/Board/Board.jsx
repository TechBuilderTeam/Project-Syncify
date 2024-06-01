import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import CreateTask from "./CreateTask";
import DragNDrop from "../Tasks/DragNDrop";
import EditDeleteTask from "../Tasks/EditDeleteTask";
import { useLocation } from "react-router-dom";
import CreateBoard from "./CreateBoard";
import NewBoard from "./NewBoard/NewBoard";

const Board = () => {
    const location = useLocation();

    const timelineData = location.state;
    console.log('timeline data recive in board from location state -> ', timelineData);
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);

    useEffect(() => {
        fetch(`https://projectsyncifyapi.onrender.com/workspace/tasks/${timelineData?._id}`)
            .then(res => res.json())
            .then(data => {
                const filteredTasks = data.filter(task => task.email === user?.email);
                setTasks(filteredTasks);
            })
            .catch(error => console.log(error));
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

            <div className=" py-2">
                <div className="flex justify-between items-center pb-2">
                    <h1 className="text-3xl   pb-2 font-semibold ">
                        Board
                    </h1>
                    
                </div>

                <hr className="w-full h-1 bg-gradient-to-r from-[#2c01a1] to-[#73e9fe] " />
                <p className="text-sm  font-semibold mt-2 text-black dark:text-white  mb-10">
                    To ensure seamless progress tracking and maintenance of your project, check out the boards into your project structure. Assign task and distinct roles to each member to streamline collaboration and enhance accountability throughout the project lifecycle. Also chat with your team members.
                </p>
            </div>
           
        
            {/** timeline all data exist in timelineData variable */ }
    {/* <div>
                <CreateBoard timelineData={timelineData} />
            </div> */}
    {/* <div>Timeline Details: {timelineData?.name} </div>
            <CreateTask updateTasks={updateTasks} /> */}

    <NewBoard />
        </div >
    );
};

export default Board;
