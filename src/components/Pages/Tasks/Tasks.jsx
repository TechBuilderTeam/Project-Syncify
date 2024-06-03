import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import DragNDrop from "./DragNDrop";
import { useParams } from "react-router-dom";
import axios from "axios";

const Tasks = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const { id } = useParams();
    const [load, setLoad] = useState(false);


    const handleDragStart = (e, id) => {
        e.dataTransfer.setData('text/plain', id);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = async (e, newStatus) => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData('text/plain');
        handleUpdateStatus(taskId, newStatus);
    };

    const handleUpdateStatus = async (id, newStatus) => {
    
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, status: newStatus } : task
        );
        setTasks(updatedTasks);
    
        try {

            const payload = { status: newStatus };
            await axios.patch(`https://projectsyncifyapi.onrender.com/workspace/task/update/status/${id}/`, payload);
            setLoad(!load);
        } catch (error) {
            console.error("Error updating task status:", error.response?.data || error.message);
    
 
            const revertedTasks = tasks.map((task) =>
                task.id === id ? { ...task, status: tasks.find(t => t.id === id).status } : task
            );
            setTasks(revertedTasks);
        }
    };

    useEffect(() => {
        if (user && user.userId) {
            fetch(`https://projectsyncifyapi.onrender.com/workspace/user/${user.userId}/workspace/${id}/tasks/`)
                .then(res => res.json())
                .then(data => {
                    setTasks(data);
                    
                })
                .catch(error => console.error(error));
        }
    }, [user, id ,load]);



    return (
        <div className="h-screen">
               <div className="task-dashboard">
            <div className="task-lists grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {['To Do', 'In Progress', 'Done'].map((status) => (
                    <div
                        key={status}
                        className="task-list border-2 border-gray-200 dark:border-cyan-500 p-4 rounded-lg"
                        onDrop={(e) => handleDrop(e, status)}
                        onDragOver={handleDragOver}
                    >
                        <h3 className="text-xl text-center font-semibold mb-4">{status}</h3>
                        {tasks.filter(task => task.status === status).map((task) => (
                            <div
                                key={task.id}
                                draggable
                                onDragStart={(e) => handleDragStart(e, task.id)}
                                className="task-item border-2 border-gray-300 dark:border-sky-200 p-2 rounded-md mb-2"
                            >
                                <div className="flex justify-between items-center">
                                    <div><p>{task.name}</p></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>

            {/* <DragNDrop reload={setLoad} load={load} tasks={tasks} setTasks={setTasks} /> */}
        </div>
    );
};

export default Tasks;
