import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import CreateTask from "./CreateTask";
import DragNDrop from "./DragNDrop";
import EditDeleteTask from "./EditDeleteTask";
import { useLocation } from "react-router-dom";

const Board = () => {
    const location = useLocation();

    const timelineData = location.state;
    console.log('timeline data recive in doard from location state -> ',timelineData);
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

    const handleShowModal = (task) => {
        setCurrentTask(task);
        document.getElementById("my_modal_5").showModal();
    };

    const handleUpdateTask = (updatedTask) => {
        setTasks(prevTasks => prevTasks.map(task =>
            task._id === updatedTask._id ? { ...task, ...updatedTask } : task
        ));
    };
    
    return (
        <div className="h-screen">
            {/** timeline all data exist in timelineData variable */}
            <div>Timeline Details: {timelineData.name} </div>
            <CreateTask updateTasks={updateTasks} />
            <DragNDrop
                tasks={tasks}
                setTasks={setTasks}
                handleShowModal={handleShowModal}
            />
            <EditDeleteTask
                currentTask={currentTask}

                handleUpdateTask={handleUpdateTask}
            />
        </div>
    );
};

export default Board;
