import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import { toast } from "react-toastify";
import TaskAni from "../../../../public/tasks.json";
import Lottie from "lottie-react";

const CreateTask = ({ updateTasks }) => {
    const { user } = useContext(AuthContext);

    const handleCloseModelButton = () => {
        document.getElementById('my_modal_5').close()
    }

    const handleCreateTask = (event) => {
        event.preventDefault();

        const form = event.target;
        const scrum_Name = form.scrum_Name.value;
        const name = form.name.value;
        const details = form.details.value;
        const assign = form.assign.value;
        const priority = form.priority.value;

        if (!scrum_Name || !name || !details || !priority) {
            toast.error('Please fill in all required fields');
            return;
        }

    
        const status = 'To-Do';
        const newTask = { scrum_Name , name , details, assign,status,priority };

        fetch('https://projectsyncifyapi.onrender.com/workspace/tasks/create/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Task Added Successfully');
                    handleCloseModelButton();
                    updateTasks(); 
                }
            })
            .catch(error => {
                console.error('Error creating task:', error);
                toast.error('Failed to create task');
            });

        form.reset();
    };

    return (
        <div>
            <div className="flex justify-center">
                <div className="flex items-center gap-6">

                    <div className=" dark:text-[#73e9fe] text-[#8401A1] mt-6">
                        <p className="text-3xl font-bold mb-1">Wanna Create Task?</p>
                        <p className="text-sm mb-4 text-black dark:text-white">For maintain your project progress. <br />Create your task and track your progress... <br />Click below<span className="font-extrabold font-2xl text-[#8401A1] dark:text-[#73e9fe]"> ↓↓ </span>  and explore more</p>
                        <button className="bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white  font-bold px-4 py-2 rounded-md" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Task</button>
                    </div>
                    <div className="w-80 h-80">
                        <Lottie animationData={TaskAni} loop={true} />
                    </div>
                </div>

                <dialog id="my_modal_5" className="modal">
                    <div className="modal-box bg-white dark:bg-black">
                        <form onSubmit={handleCreateTask} >
                            <button className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]" onClick={handleCloseModelButton}>✕</button>
                            <h3 className="font-bold text-2xl text-center">Create Task</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-[#73e9fe] text-[#8401A1]">Board Name</span>
                                </label>
                                <input type="text" name="scrum_Name" placeholder="Board Name" className="input input-bordered bg-slate-200 dark:bg-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-[#73e9fe] text-[#8401A1]">Task Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered bg-slate-200 dark:bg-black dark:text-[#73e9fe] text-[#8401A1]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-[#73e9fe] text-[#8401A1]">Task Details</span>
                                </label>
                                <input type="text" name="details" placeholder="Text Details" className="input input-bordered bg-slate-200 dark:bg-black dark:text-[#73e9fe] text-[#8401A1]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-[#73e9fe] text-[#8401A1]">Assign</span>
                                </label>
                                <input type="text" name="assign" placeholder="Assign Task" className="input input-bordered bg-slate-200 dark:bg-black dark:text-[#73e9fe] text-[#8401A1]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-[#73e9fe] text-[#8401A1]">Priority</span>
                                </label>
                                <select name="priority" className="select select-bordered bg-slate-200 dark:bg-black">
                                    <option disabled selected>Priority</option>
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>High</option>
                                </select>
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

export default CreateTask;
