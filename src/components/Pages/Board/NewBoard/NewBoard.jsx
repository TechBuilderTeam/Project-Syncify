import React, { useState } from "react";
import { BiCollapseVertical, BiDownArrowCircle, BiUpArrowCircle } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdAddTask, MdDeleteForever } from "react-icons/md";
import CreateTask from "../CreateTask";
import EditDeleteTask from "../../Tasks/EditDeleteTask";
import BoardDelete from "./BoardDelete";
import ChatUI from "../../Chat/ChatUI";
import axios from "axios";
import { toast } from "react-toastify";

const NewBoard = ({board,reload,setReload}) => {
    console.log({board,reload, setReload})
    const [formData, setFormData] = useState({
        id: "",
        scrum_Name: "",
        name: "",
        details: "",
        assign: "",
        
    }
    );
    
    const {tasks} = board;
    const allData = {
        board,
        reload,
        setReload,
        tasks
    }
    const [showTasks, setShowTasks] = useState(false);

    const handleToggle = () => {
        setShowTasks(!showTasks);
    };
    
    const handleDeleteButton = async (boardId) => {
        const result = await axios.delete(`https://projectsyncifyapi.onrender.com/workspace/scrum/delete/${boardId}`);
        if(result){
            toast.success("Successfully deleted board.");
            setReload(!reload)
        }
    }
    
    const [selectedTimeline, setSelectedTimeline] = useState(null);

    const handleOpenDialog = (board, modalName) => {
        console.log({board})
        setSelectedTimeline(board);
        console.log(board.name)
        setFormData({
            id: board.id,
            scrum_Name: board.name,
            name: "",
            details: "",
            assign: ""
        });
        document.getElementById("createTask").showModal();
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log({name,value})
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleCreateTaskButton = async (e) => {
        e.preventDefault()
    
        const newTask = {
            scrum_Name: id,
            name: "",
            details: "",
            assign: ""
        }

        newTask.scrum_Name = id;
        newTask.name = e.target.name.value;
        newTask.details = e.target.details.value;
        newTask.assign = e.target.assign.value
    
        
        console.log({ newTask })
    
        const result = await axios.put(`https://projectsyncifyapi.onrender.com/workspace/timelines/update/${formData.timelineId}/`, updateTimeline)
    
        if (result) {
          toast.success('Successfully Updated timeline');
    
          setReload(!reload);
          handleCloseModelButton('createTask')
        }
        else {
          console.log('timeline post result -> ', result)
        }
      }
      {/** end update timeline form functionlity */ }

    const handleCloseModelButton = () => {
        document.getElementById("createTask").close()
    }

    return (
        <div className="overflow-x-auto shadow-xl rounded w-full">
            <table className="table w-full">
                <thead>
                    <tr className="text-center text-sm text-[#0c01a1] dark:text-[#73e9fe]">
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
                            <BoardDelete onClick={() => handleDeleteButton(board.id) } />
                            {/* <button className="mx-4">
                                <MdDeleteForever className="text-xl" />
                            </button> */}
                        </td>
                        <td>
                            {/* <CreateTask data={allData}/> */}
                            {/* <button className="mx-4">
                                <MdAddTask className="text-xl" />
                            </button> */}
                            {/** start create task button with modal */}
                            <div>
            <button className="  font-bold px-4 py-2 rounded-md" onClick={() => handleOpenDialog(board,"crateTask")}>
            <MdAddTask className="text-xl" />
            </button>
            {/* <div className="flex justify-center"> */}
                {/* <div className="flex items-center gap-6">

                    <div className=" dark:text-[#73e9fe] text-[#2c01a1] mt-6">
                        <p className="text-3xl font-bold mb-1">Wanna Create Task?</p>
                        <p className="text-sm mb-4 text-black dark:text-white">For maintain your project progress. <br />Create your task and track your progress... <br />Click below<span className="font-extrabold font-2xl text-[#2c01a1] dark:text-[#73e9fe]"> ↓↓ </span>  and explore more</p>
                        <button className="bg-gradient-to-r from-cyan-500 to-[#2c01a1] text-white  font-bold px-4 py-2 rounded-md" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Task</button>
                    </div>
                    <div className="w-80 h-80">
                        <Lottie animationData={TaskAni} loop={true} />
                    </div>
                </div> */}

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
                                    <span className="label-text dark:text-[#73e9fe] text-[#2c01a1]">Priority</span>
                                </label>
                                <select name="priority" className="select select-bordered bg-slate-200 dark:bg-black">
                                    <option disabled selected>Assign</option>
                                    <option>chowdhuryrasel040@gmail.com</option>
                                    <option>rasel@gmail.com</option>
                                    <option>rahul@gmail.com</option>
                                </select>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button className="border-none outline-none bg-gradient-to-r from-cyan-500 to-[#2c01a1] text-white rounded w-full px-4 py-2" type="submit">Create</button>
                            </div>
                        </form>
                    </div>
                </dialog>
            {/* </div> */}
        </div>
 {/** end create task button with modal */}
                        </td>
                        <td>
                            <ChatUI />
                           
                        </td>
                        <td>
                            <button onClick={handleToggle} className="mx-4 px-2 py-1 rounded">
                                {showTasks ? <BiCollapseVertical classname="text-xl" /> : <HiMiniChevronUpDown className="text-xl" />}
                            </button>
                        </td>
                       
                    </tr>
                    {showTasks && tasks?.map((task, idx) => (
        <tr key={idx} className="text-center text-sm text-black dark:text-white w-full">
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center text-sm text-black dark:text-white">
                                <td>{task.name}</td>
                                <td>{task.assignedTo}</td>
                                <td>{task.status}</td>
                                <td>{task.type}</td>
                                <td>{task.priority}</td>
                                <td>
                                    {/* <button className="mx-4">
                                        <FaRegEdit className="text-xl" />
                                    </button> */}
                                    <EditDeleteTask />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </td>
        </tr>
    ))
}
                        
                        
                  
                </tbody>
            </table>
        </div>
    );
};

export default NewBoard;
