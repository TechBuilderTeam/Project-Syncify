import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const EditDeleteTask = ({ currentTask, handleUpdateTask }) => {
    const { user } = useContext(AuthContext);
    const [task, setTask] = useState(currentTask);

    useEffect(() => {
        setTask(currentTask);
    }, [currentTask]);

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const status = form.status.value;
        const email = user.email;

        const updatedTask = { ...task, title, description, deadline, priority, email, status };

        fetch(`https://task-backend-azure.vercel.app/tasks/${task._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire('Task updated successfully!', '', 'success');
                    handleUpdateTask(updatedTask);
                    form.reset();
                    document.getElementById("my_modal_5").close();
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            {task && (
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-white dark:bg-black">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_5").close()}>✕</button>
                        <h3 className="font-bold text-2xl text-center">Update Task</h3>
                        <form onSubmit={handleUpdate}>
                          
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#8401A1]">Title</span>
                                    </label>
                                    <input type="text" name="title" defaultValue={task.title} className="input input-bordered bg-slate-200 dark:bg-black" required />
                                </div>
                               
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#8401A1]">Description</span>
                                    </label>
                                    <textarea name="description" defaultValue={task.description} className="textarea textarea-bordered bg-slate-200 dark:bg-black" required></textarea>
                                </div>
                            <div className="flex gap-2">
                                <div className="form-control w-1/3">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#8401A1]">Priority</span>
                                    </label>
                                    <select name="priority" className="select select-bordered w-full max-w-xs bg-slate-200 dark:bg-black" defaultValue={task.priority} required>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#8401A1]">Deadline</span>
                                    </label>
                                    <input type="date" name="deadline" defaultValue={task.deadline} className="input input-bordered bg-slate-200 dark:bg-black" required />
                                </div>
                                <div className="form-control w-1/3">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#8401A1]">Status (can&#39;t update)</span>
                                    </label>
                                   <input type="text" name="status" value={task.status} className="input input-bordered bg-slate-200 dark:bg-black" />
                                </div>
                            </div>
                            
                            <div className="modal-action">
                                <button type="submit" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white  font-bold rounded w-full ">Update Task</button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default EditDeleteTask;
