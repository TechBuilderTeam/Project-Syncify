import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import CreateTask from "./CreateTask";

import EditDeleteTask from "../Tasks/EditDeleteTask";
import { useLocation, useParams } from "react-router-dom";
import CreateBoard from "./CreateBoard";
import axios from "axios";
import { IoIosCreate } from "react-icons/io";
import { FaRegEdit} from 'react-icons/fa';
import { BiCollapseVertical, BiDownArrowCircle, BiUpArrowCircle } from "react-icons/bi";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { MdAddTask, MdDeleteForever } from "react-icons/md";
import ChatUI from './../Chat/ChatUI';
import { toast } from "react-toastify";



const Board = () => {
    const { user } = useContext(AuthContext);
    
    console.log({user})
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    
    const [boards, setBoards] = useState(null);
    const [reload,setReload] = useState(false);
    const [members,setMembers] = useState(null);
    const [expandedBoardId, setExpandedBoardId] = useState(null);

    const getSpecificMembers = async () => {

        try {
            const result = await axios.get(`https://projectsyncifyapi.onrender.com/api/v2/workspace/${id}/members/`)
            console.log("get member -> ", result.data)
            setMembers(result.data)
        } catch (error) {
            console.log("get member error -> ", error)
        }
    }
    
    const [formData, setFormData] = useState({
        id: "",
        scrum_Name: "",
        name: "",
        details: "",
        assign: "",
        
    }
    );

    const [selectedTimeline, setSelectedTimeline] = useState(null);

    const handleOpenDialog = (board, modalName) => {
        if(!members){
            getSpecificMembers()
        }
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
            scrum_Name: formData.id,
            name: "",
            details: "",
            assign: "",
            which_Type: ""
        }

        newTask.scrum_Name = Number(formData.id);
        newTask.name = e.target.taskName.value;
        newTask.details = e.target.details.value;
        newTask.assign = e.target.assign.value;
        newTask.which_Type = e.target.which_type.value;
    
        
        console.log({ newTask })
    
        const result = await axios.post(`https://projectsyncifyapi.onrender.com/workspace/tasks/create/`, newTask)
    
        if (result) {
          toast.success('Successfully Create successfully.');
    
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

    // const [showTasks, setShowTasks] = useState(false);

    const handleToggle = (boardId) => {
        // console.log("toggle button clicked", boardId)
        // console.log("before expant board id -> ", expandedBoardId);
        // console.log((null === 27))
        setExpandedBoardId(expandedBoardId === boardId ? null : boardId);
        // setShowTasks(!showTasks);
        
    };
    
    const handleDeleteButton = async (boardId) => {
        const result = await axios.delete(`https://projectsyncifyapi.onrender.com/workspace/scrum/delete/${boardId}/`);
        if(result){
            toast.success("Successfully deleted board.");
            setReload(!reload)
        }
    }

    console.log('after expant board id -> ',expandedBoardId)
  
    useEffect(()=> {
        const getBoard = async () => {
            try {
                const result = await axios.get(`https://projectsyncifyapi.onrender.com/workspace/user/${user?.userId}/workspace/${id}/scrums/`);
                console.log({ result });
                setBoards(result.data);

                
            } catch (error) {
                console.error("Error fetching boards:", error);
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            setLoading(true);
            getBoard();
        } else {
            setLoading(false);
        }
    }, [reload])

    return (
        <div className="h-screen">


            <div className=" py-2">
                <div className="flex justify-between items-center pb-2">
                    <h1 className="text-3xl   pb-2 font-semibold ">
                        Board
                    </h1>
                    
                </div>

                <hr className="w-full h-1 bg-gradient-to-r from-[#0c01a1] to-[#73e9fe] " />
                <p className="text-sm  font-semibold mt-2 text-black dark:text-white  mb-10">
                    To ensure seamless progress tracking and maintenance of your project, check out the boards into your project structure. Assign task and distinct roles to each member to streamline collaboration and enhance accountability throughout the project lifecycle. Also chat with your team members.
                </p>
            </div> 

            {loading && <h3>Loading .... </h3>}

        
            <div className="overflow-x-auto shadow-xl rounded w-full">
    <table className="table w-full">
        <thead>
            <tr className="text-center text-sm text-[#2c01a1] dark:text-[#73e9fe]">
                <th> Plans Name </th>
                <th>Board Name</th>
                <th>Assigned</th>
                <th>Delete</th>
                <th>Add Task</th>
                <th>Chat</th>
                <th>Toggle Tasks</th>
            </tr>
        </thead>
        <tbody>
            {!loading && boards?.map((board, idx) => (
                <>
                    <tr key={idx} className="text-center text-sm text-black dark:text-white">
                        <td>{board?.timeline_name}</td>
                        <td>{board?.name}</td>
                        <td>{board?.assign?.first_name}</td>
                        <td>
                            <button className="mx-4" onClick={() => handleDeleteButton(board.id)}>
                                <MdDeleteForever className="text-xl" />
                            </button>
                        </td>
                        <td>
                            <button className="font-bold px-4 py-2 rounded-md" onClick={() => handleOpenDialog(board, "createTask")}>
                                <MdAddTask className="text-xl" />
                            </button>

                            <dialog id="createTask" className="modal">
                                <div className="modal-box bg-white dark:bg-black">
                                    <button className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#2c01a1] dark:text-[#73e9fe]" onClick={() => handleCloseModelButton("createTask")}>✕</button>
                                    <h3 className="font-bold text-2xl text-center dark:text-[#73e9fe] text-[#2c01a1]">Create Task</h3>
                                    <form onSubmit={handleCreateTaskButton}>
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
                        </td>

                        <td>
                            <ChatUI boardId={board.id} User={user} board={board} />
                        </td>

                        <td>
                            <button onClick={() => handleToggle(board.id)} className="mx-4 px-2 py-1 rounded">
                                {expandedBoardId === board.id ? <BiCollapseVertical className="text-xl" /> : <HiMiniChevronUpDown className="text-xl" />}
                            </button>
                        </td>
                    </tr>

                    {expandedBoardId === board.id && (
                        <tr className="text-center text-sm text-black dark:text-white w-full">
                            <td colSpan="7" className="w-full px-10">
                                <div className="overflow-x-auto w-full shadow-xl rounded">
                                    <table className="table w-full">
                                        <thead>
                                            <tr className="text-center text-sm text-[#2c01a1] dark:text-[#73e9fe] bg-cyan-50 dark:bg-gray-900">
                                                <th>Task Name</th>
                                                <th>Assigned To</th>
                                                <th>Status</th>
                                                <th>Type</th>
                                                <th>Priority</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {board.tasks.map((task, taskIdx) => (
                                                <tr key={taskIdx} className="text-center text-sm text-black dark:text-white">
                                                    <td>{task.name}</td>
                                                    <td>{task.assign?.email}</td>
                                                    <td>{task.status}</td>
                                                    <td>{task.which_Type}</td>
                                                    <td>{task.priority}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    )}
                </>
            ))}
        </tbody>
    </table>
</div>


        </div >

    );
};

export default Board;


