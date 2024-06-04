import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import { toast } from "react-toastify";
import TaskAni from "../../../../public/tasks.json";
import Lottie from "lottie-react";
import { MdAddTask } from "react-icons/md";

const CreateTask = ({ data }) => {
    const boardData = data.board;
    
    const {id, name} = data.board;

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

    // const handleCreateTask = (event) => {
    //     event.preventDefault();

    //     const form = event.target;
    //     const scrum_Name = form.scrum_Name.value;
    //     const name = form.name.value;
    //     const details = form.details.value;
    //     const assign = form.assign.value;
    //     const priority = form.priority.value;

    //     if (!scrum_Name || !name || !details || !priority) {
    //         toast.error('Please fill in all required fields');
    //         return;
    //     }

    
    //     const status = 'To-Do';
    //     const newTask = { scrum_Name , name , details, assign,status,priority };

    //     fetch('https://projectsyncifyapi.onrender.com/workspace/tasks/create/', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newTask)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.insertedId) {
    //                 toast.success('Task Added Successfully');
    //                 handleCloseModelButton();
    //                 updateTasks(); 
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error creating task:', error);
    //             toast.error('Failed to create task');
    //         });

    //     form.reset();
    // };

    return (
        <div>
            <button className="  font-bold px-4 py-2 rounded-md" onClick={() => handleOpenDialog(boardData,"crateTask")}>
            <MdAddTask className="text-xl" />
            </button>
            {/* <div className="flex justify-center"> */}
                {/* <div className="flex items-center gap-6">

                    <div className=" dark:text-[#73e9fe] text-[#0c01a1] mt-6">
                        <p className="text-3xl font-bold mb-1">Wanna Create Task?</p>
                        <p className="text-sm mb-4 text-black dark:text-white">For maintain your project progress. <br />Create your task and track your progress... <br />Click below<span className="font-extrabold font-2xl text-[#0c01a1] dark:text-[#73e9fe]"> ↓↓ </span>  and explore more</p>
                        <button className="bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white  font-bold px-4 py-2 rounded-md" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Task</button>
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
                                    <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Board Name</span>
                                </label>
                                <input type="text" name="scrum_Name" value={formData.scrum_Name} 
                                onChange={handleChange}
                                placeholder="Board Name" className="input input-bordered bg-slate-200 dark:bg-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Task Name</span>
                                </label>
                                <input type="text" name="taskName" placeholder="Task Name" className="input input-bordered bg-slate-200 dark:bg-black dark:text-[#73e9fe] text-[#2c01a1]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Task Details</span>
                                </label>
                                <input type="text" name="details" placeholder="Text Details" className="input input-bordered bg-slate-200 dark:bg-black dark:text-[#73e9fe] text-[#0c01a1]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Priority</span>
                                </label>
                                <select name="priority" className="select select-bordered bg-slate-200 dark:bg-black">
                                    <option disabled selected>Assign</option>
                                    <option>chowdhuryrasel040@gmail.com</option>
                                    <option>rasel@gmail.com</option>
                                    <option>rahul@gmail.com</option>
                                </select>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button className="border-none outline-none bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white rounded w-full px-4 py-2" type="submit">Create</button>
                            </div>
                        </form>
                    </div>
                </dialog>
            {/* </div> */}
        </div>
    );
};

export default CreateTask;
