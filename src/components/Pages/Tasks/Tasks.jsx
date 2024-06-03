import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
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
    }, [user, id, load]);




    return (
        <div className="h-screen">
            <div className="">
                <div className=" py-2">
                    <div className="flex justify-between items-center pb-2">
                        <h1 className="text-3xl   pb-2 font-semibold ">
                            All Tasks
                        </h1>
                      
                    </div>

                    <hr className="w-full h-1 bg-gradient-to-r from-[#0c01a1] to-[#73e9fe] " />
                    <p className="text-sm  font-semibold my-2 text-black dark:text-white ">
                        To ensure seamless progress tracking and maintenance of your project, incorporate team members into your project structure. Keep the tasks organized by status, just like in a Kanban board. So you can easily find the tasks you need to complete. Just grab them and start working on them with the team. Ensure to use the drag and drop functionality to move tasks between statuses.
                    </p>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                    {['To Do', 'In Progress', 'Done'].map((status) => (
                        <div
                            key={status}
                            className=" border-2 border-gray-200 dark:border-cyan-500 p-4 rounded-sm"
                            onDrop={(e) => handleDrop(e, status)}
                            onDragOver={handleDragOver}
                        >
                            <h3 className="text-xl text-center font-semibold mb-2">{status}</h3>
                            <hr className="h-1 mb-4" />
                            {tasks.filter(task => task.status === status).map((task) => (
                                <div
                                    key={task.id}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, task.id)}
                                    className="task-item border-2 border-gray-300 dark:border-sky-200 p-2 hover:p-3 rounded mb-2 font-medium hover:border-2 hover:border-sky-800 hover:cursor-grabbing  hover:shadow-lg hover:shadow-sky-800 hover:bg-[#0c01a1] hover:text-white"
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="hover:font-bold"><p className="">{task.name}</p></div>
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
