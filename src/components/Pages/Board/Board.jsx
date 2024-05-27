import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import CreateTask from "./CreateTask";
import DragNDrop from "../Tasks/DragNDrop";
import EditDeleteTask from "../Tasks/EditDeleteTask";

const Board = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);

    useEffect(() => {
        fetch(`https://task-backend-azure.vercel.app/tasks`)
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
            <CreateTask updateTasks={updateTasks} />
          
        </div>
    );
};

export default Board;
