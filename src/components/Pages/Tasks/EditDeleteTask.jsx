import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const EditDeleteTask = () => {
    const { user } = useContext(AuthContext);
    const [task, setTask] = useState();


    const handleUpdate = () => {

    };

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this task!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            // if (result.isConfirmed) {
            //     fetch(`https://projectsyncifyapi.onrender.com/workspace/tasks/delete/${taskId}/`, {
            //         method: 'DELETE'
            //     })
            //         .then(res => res.json())
            //         .then(data => {
            //             if (data.deletedCount > 0) {
            //                 toast.success('Task deleted successfully');
            //                 const remainingTasks = task.filter(task => task._id !== taskId);
            //                 setTask(remainingTasks);
            //             }
            //         })
            //         .catch(error => console.log(error));
            // }
        });
    };

    return (
        <div className="flex justify-center items-center gap-4">
            <div>
                <button className="  font-bold px-4 py-2 rounded-md" onClick={() => document.getElementById('my_modal_2').showModal()}> <FaRegEdit className="text-xl" /></button>
                <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-white dark:bg-black">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_2").close()}>✕</button>
                        <h3 className="font-bold text-2xl text-center dark:text-[#73e9fe] text-[#2c01a1] ">Update Task</h3>
                        <form onSubmit={handleUpdate}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-[#73e9fe] text-[#2c01a1]">Task Name</span>
                                </label>
                                <input type="text" name="name" className="input input-bordered bg-slate-200 dark:bg-black" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-[#73e9fe] text-[#2c01a1]">Details</span>
                                </label>
                                <textarea name="details" className="textarea textarea-bordered bg-slate-200 dark:bg-black" required></textarea>
                            </div>
                            <div className="flex gap-2">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#2c01a1]">Priority</span>
                                    </label>
                                    <select name="priority" className="select select-bordered w-full max-w-xs bg-slate-200 dark:bg-black" required>l
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>

                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#2c01a1]">Status </span>
                                    </label>
                                    <select name="status" className="select select-bordered w-full max-w-xs bg-slate-200 dark:bg-black" required>
                                        <option value="To-Do">To-Do</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Testing">Testing</option>
                                        <option value="Complete">Complete</option>
                                    </select>
                                </div>
                            </div>

                            <div className="modal-action">
                                <button type="submit" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-[#2c01a1] text-white  font-bold rounded w-full ">Update Task</button>
                            </div>
                        </form>
                    </div>
                </dialog>

            </div>
            <div>
                <button className="  font-bold px-4 py-2 rounded-md" onClick={() => handleDelete()}> <MdDeleteForever className="text-xl" /></button>
            </div>

        </div>
    );
};

export default EditDeleteTask;
