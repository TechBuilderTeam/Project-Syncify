import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
// import CreateTask from "./CreateTask";
import DragNDrop from "./DragNDrop";
import EditDeleteTask from "./EditDeleteTask";

const Tasks = () => {

    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);

    useEffect(() => {
        fetch(`https://projectsyncifyapi.onrender.com/workspace/tasks/list/${tasks.id}`)
            .then(res => res.json())
            .then(data => {
                const filteredTasks = data.filter(task => task.email === user?.email);
                setTasks(filteredTasks);
            })
            .catch(error => console.log(error));
    }, [user?.email]);


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
            {/* <CreateTask updateTasks={updateTasks} /> */}
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

export default Tasks;
