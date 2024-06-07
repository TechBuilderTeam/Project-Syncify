import axios from "axios";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { toast } from "react-toastify";


const Work = ({user, work, reload, setReload}) => {

    const [workAdd, setWorkAdd] = useState();
    const [isPresentEnd, setIsPresentEnd] = useState(false);

    const [formData, setFormData] = useState({
        workId: "",
        user: user?.userId,
        company: "",
        position: "",
        start_date: "",
        end_date: "",
        description: "",
        currently_working: ""
    }
      );
    
      const [selectedTimeline, setSelectedTimeline] = useState(null);
    
    
    
    
    const handleOpenDialog = (id, work, modalName) => {
        
        // console.log({member})
        setSelectedTimeline(work);
        //  console.log(member.user_id)
    
        setFormData({
            workId: id,
            user: user?.userId,
            company: work?.company,
            position: work?.position,
            start_date: work?.start_date,
            end_date: work?.end_date,
            description: work.description,
            currently_working: work.currently_working
        });
    
    
        document.getElementById("EditWork").showModal();
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log({name,value})
    
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
      
    
    const handleUpadateWork = async (e) => {
        e.preventDefault();

        const updateWork = {
            user: user?.userId,
            company: e.target.company_name?.value,
            position: e.target.position?.value,
            start_date: e.target.startDate?.value,
            end_date: formData.end_date,
            description: e.target.description?.value,
            currently_working: formData.currently_working
        }

        console.log({updateWork});

        try {
            const result = await axios.put(`https://projectsyncifyapi.onrender.com/api/v1/profile/work/edit/${formData.workId}/`,updateWork)

            toast.success('Successfully Updated Course');
            setReload(!reload);
            document.getElementById("EditWork").close()
        } catch (error) {
            toast.warning(error.response.data)
            console.log("error from update education -> ", error)
        }
    }

    {/** handle Delete education functionlity */ }
  const handleDeleteWork = async (work_id) => {
    try {
      const result = await axios.delete(`https://projectsyncifyapi.onrender.com/api/v1/profile/work/delete/${work_id}/`);

      toast.success("Successfully deleted work");
      setReload(!reload)
    } catch (error) {
      console.log("delete timeline error -> ", error)
    }
  }

    const handleModalClose = () => {
        document.getElementById('work').close();
    }

    const handleAddWork = async (e) => {
        e.preventDefault();
        let working;
        let end;
        if(e.target.endDate?.value === undefined){
            if(isPresentEnd){
                working = true
                end = ""
            }
        }
        else{
            working = false;
            end = e.target.endDate?.value
        }
        const newWork = 
            {
                user: user?.userId,
                company: e.target.company_name?.value,
                position: e.target.position?.value,
                start_date: e.target.startDate?.value,
                end_date: end,
                description: e.target.description?.value,
                currently_working: working
            }

            console.log(newWork)

        try {
            console.log("try bloack")
            const result = await axios.post("https://projectsyncifyapi.onrender.com/api/v1/profile/work/create/", newWork)
            console.log("after try block")
            console.log({result});
            toast.success("Work Created Successfully. ");
            setReload(!reload)
        } catch (error) {
            console.log("error form work -> ", error)
        }
        handleModalClose()
        setWorkAdd(true)
    }


    return (
        <div>
            <div className=" py-10 px-10 md:px-32  md:py-12">
                <div className="flex justify-between mb-4">
                    <div>
                        <h1 className="text-3xl font-bold">Work</h1>
                        <hr className="w-full border-2 border-[#0c01a1]" />
                    </div>

                    <button className=" text-4xl   font-bold rounded" onClick={() => document.getElementById('work').showModal()}>
                        <FaPlus />
                    </button>
                    <dialog id="work" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-white dark:bg-black">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("work").close()}>✕</button>
                            <h3 className="font-bold text-2xl text-center dark:text-[#73e9fe] text-[#0c01a1] ">Add Work</h3>
                            <form onSubmit={handleAddWork}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Company Name</span>
                                    </label>
                                    <input type="text" name="company_name" placeholder="Company Name" className="input input-bordered bg-slate-200 dark:bg-black" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Position</span>
                                    </label>
                                    <input type="text" name="position" placeholder="position" className="input input-bordered bg-slate-200 dark:bg-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Description</span>
                                    </label>
                                    <input type="text" name="description" placeholder="Write description..." className="input input-bordered bg-slate-200 dark:bg-black" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Start Date</span>
                                    </label>
                                    <input type="date" name="startDate" className="input input-bordered bg-slate-200 dark:bg-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">End Date</span>
                                    </label>
                                    {!isPresentEnd && (
                                        <input type="date" name="endDate" className="input input-bordered bg-slate-200 dark:bg-black" required />
                                    )}
                                    <label className="flex items-center mt-2">
                                        <input type="checkbox" className="checkbox" checked={isPresentEnd} onChange={() => setIsPresentEnd(!isPresentEnd)} />
                                        <span className="ml-2 dark:text-[#73e9fe] text-[#0c01a1]">Present</span>
                                    </label>
                                </div>






                                <div className="modal-action">
                                    <button type="submit" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white  font-bold rounded w-full ">Add</button>
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>
                
                <div>
                {work?.length > 0 && work.map((ele,idx) => (
    <div className="mt-4 text-lg font-bold">
    <h1>Company Name: {ele?.company}</h1>
    <h1>Position: {ele?.position}</h1>
    <h1>Duration: {ele?.duration}</h1>
    <div className="flex items-center gap-5 p-4">
    <button className="px-6 py-2 bg-blue-300 hover:bg-blue-400 rounded-md" onClick={()=> handleOpenDialog(ele.id, ele, "EditWork")}>
    <FaRegEdit className="text-xl cursor-pointer" title="Edit work" />
    </button>
    <button className="px-6 py-2 bg-yellow-200 hover:bg-yellow-300 rounded-md"  onClick={() => handleDeleteWork(ele.id)}>
    <RiDeleteBin5Fill className="text-xl cursor-pointer" title="Delete Work" />
    </button>

    <dialog id="EditWork" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white dark:bg-black">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("EditWork").close()}>✕</button>
            <h3 className="font-bold text-2xl text-center dark:text-[#73e9fe] text-[#0c01a1] ">Update Work</h3>
            <form onSubmit={handleUpadateWork}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Company Name</span>
                    </label>
                    <input type="text" value={formData.company} onChange={handleChange} name="company_name" placeholder="Company Name" className="input input-bordered bg-slate-200 dark:bg-black" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Position</span>
                    </label>
                    <input value={formData.position} onChange={handleChange} type="text" name="position" placeholder="position" className="input input-bordered bg-slate-200 dark:bg-black" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Description</span>
                    </label>
                    <input value={formData.description} onChange={handleChange} type="text" name="description" placeholder="Write description..." className="input input-bordered bg-slate-200 dark:bg-black" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Start Date</span>
                    </label>
                    <input value={formData.start_date} onChange={handleChange} type="date" name="startDate" className="input input-bordered bg-slate-200 dark:bg-black" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">End Date</span>
                    </label>
                    {!formData.currently_working && (
                        <input type="date" name="endDate" className="input input-bordered bg-slate-200 dark:bg-black" required />
                    )}
                    <label className="flex items-center mt-2">
                        <input type="checkbox" className="checkbox" checked={formData.currently_working} />
                        <span className="ml-2 dark:text-[#73e9fe] text-[#0c01a1]">Present</span>
                    </label>
                </div>






                <div className="modal-action">
                    <button type="submit" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white  font-bold rounded w-full ">Update</button>
                </div>
            </form>
        </div>
    </dialog>
    
    </div>
    </div>
                ))}  
                </div>

            </div>

        </div>
    );
};

export default Work;