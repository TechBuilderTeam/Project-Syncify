{!loading && boards?.map((board, idx) =>  (
    <div key={idx} className="overflow-x-auto shadow-xl rounded w-full">
    <table className="table w-full">
        <thead>
            <tr className="text-center text-sm text-[#2c01a1] dark:text-[#73e9fe]">
                <th> Plans Name </th>
                <th>Board Name</th>

                <th>Assigned </th>

                <th>Delete</th>
                <th>Add Task</th>
                <th>Chat</th>
                {/* <th>All Tasks</th> */}
            </tr>
        </thead>
        <tbody>
            <tr className="text-center text-sm text-black dark:text-white">
                <td>{board?.timeline_name}</td>
                <td>{board?.name}</td>
                {/* <td>status</td> */}
                <td>{board?.assign?.first_name}</td>

                <td>
                    <button className="mx-4" onClick={() => handleDeleteButton(board.id)}>
                        <MdDeleteForever className="text-xl" />
                    </button>
                </td>
                <td>
<div>
    <button className="  font-bold px-4 py-2 rounded-md" onClick={() => handleOpenDialog(board,"crateTask")}>
    <MdAddTask className="text-xl" />
    </button>

    <dialog id="createTask" className="modal">
        <div className="modal-box bg-white dark:bg-black">
                <button className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#2c01a1] dark:text-[#73e9fe]" onClick={() => handleCloseModelButton("createTask")}>✕</button>
                <h3 className="font-bold text-2xl text-center dark:text-[#73e9fe] text-[#2c01a1]">Create Task</h3>
            <form onSubmit={handleCreateTaskButton} >
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[#73e9fe] text-[#2c01a1]">Board Name</span>
                    </label>
                    <input type="text" name="scrum_Name" value={formData.scrum_Name} 
                    onChange={handleChange}
                    placeholder="Board Name" className="input input-bordered bg-slate-200 dark:bg-black" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[#73e9fe] text-[#2c01a1]">Task Name</span>
                    </label>
                    <input type="text" name="taskName" placeholder="Task Name" className="input input-bordered bg-slate-200 dark:bg-black dark:text-[#73e9fe] text-[#2c01a1]" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[#73e9fe] text-[#2c01a1]">Task Details</span>
                    </label>
                    <input type="text" name="details" placeholder="Text Details" className="input input-bordered bg-slate-200 dark:bg-black dark:text-[#73e9fe] text-[#2c01a1]" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[#73e9fe] text-[#2c01a1]">Assign Member</span>
                    </label>
                    <select name="assign" className="select select-bordered bg-slate-200 dark:bg-black">
                        <option disabled selected>Assign</option>
                        {members?.map((member, idx) => <option key={idx} value={member.user_email}>{member.user_email}</option>)}
                    </select>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[#73e9fe] text-[#2c01a1]">Which Type</span>
                    </label>
                    <select name="which_type" className="select select-bordered bg-slate-200 dark:bg-black">
                        <option disabled selected>Which_type</option>
                        <option value="Feature">Feature</option>
                        <option value="Bug Fix">Bug Fix</option>
                        <option value="Code Test">Code Test</option>
                        <option value="Task">Task</option>
                    </select>
                </div>

                <div className="flex justify-center mt-6">
                    <button className="border-none outline-none bg-gradient-to-r from-cyan-500 to-[#2c01a1] text-white rounded w-full px-4 py-2" type="submit">Create</button>
                </div>
            </form>
        </div>
    </dialog>
</div>
                </td>

                <td className="absolute">
                    <ChatUI boardId={board.id} User={user} board={board}/>
                    
                </td>

                <td>
                    <button onClick={handleToggle} className="mx-4 px-2 py-1 rounded">
                        {showTasks ? <BiCollapseVertical classname="text-xl" /> : <HiMiniChevronUpDown className="text-xl" />}
                    </button>
                </td>
                
            </tr>

            {showTasks && <tr className="text-center text-sm text-black dark:text-white w-full">
    <td colSpan="8" className="w-full px-10">
        <div className="overflow-x-auto w-full shadow-xl rounded">
            <table className="table w-full">
                <thead>
                    <tr className="text-center text-sm text-[#2c01a1] dark:text-[#73e9fe] bg-cyan-50 dark:bg-gray-900">
                        <th>Task Name</th>
                        <th>Assigned To</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Priority</th>
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>

                {showTasks && 
board.tasks.map((task, idx) => (
<tr className="text-center text-sm text-black dark:text-white">
                        <td>{task.name}</td>
                        <td>{task.assign?.email}</td>
                        <td>{task.status}</td>
                        <td>{task.which_Type}</td>
                        <td>{task.priority}</td>
                        <td>
                            {/* <button className="mx-4">
                                <FaRegEdit className="text-xl" />
                            </button> */}
                            {/* <EditDeleteTask /> */}
                        </td>
                    </tr>
))
}
                    
                </tbody>
            </table>
        </div>
    </td>
            </tr>}
                
            
        </tbody>
    </table>
    </div>
))}