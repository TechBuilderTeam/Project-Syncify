import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import axios from "axios";

const DragNDrop = ({ tasks, setTasks, handleShowModal }) => {
    const handleDragStart = (e, taskId) => {
        e.dataTransfer.setData('text/plain', taskId);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleUpdateStatus = async (taskId, newStatus) => {
        await axios.patch(`https://projectsyncifyapi.onrender.com/workspace/tasks/update/${taskId}/`, { status: newStatus });
    };

    const handleDrop = async (e, newStatus) => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData('text/plain');
        try {
            await handleUpdateStatus(taskId, newStatus);
            const updatedTasks = tasks.map((task) =>
                task._id === taskId ? { ...task, status: newStatus } : task
            );
            setTasks(updatedTasks);
        } catch (error) {
            console.error(error);
        }
    };

   

    return (
        <div className="task-dashboard">
            <div className="task-lists grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {['To-Do', 'Ongoing', 'Completed'].map((status) => (
                    <div
                        key={status}
                        className="task-list border-2 border-purple-600 dark:border-cyan-500 p-4 rounded-lg"
                        onDrop={(e) => handleDrop(e, status)}
                        onDragOver={handleDragOver}
                    >
                        <h3 className="text-xl text-center font-semibold mb-4">{status}</h3>
                        {tasks?.filter(task => task.status === status).map((task) => (
                            <div
                                key={task._id}
                                draggable
                                onDragStart={(e) => handleDragStart(e, task._id)}
                                className="task-item border-2 border-purple-600 dark:border-sky-200 p-2 rounded-md mb-2"
                            >
                                <div className="flex justify-between items-center">
                                    <div><p>{task.title}</p></div>
                                  
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DragNDrop;
