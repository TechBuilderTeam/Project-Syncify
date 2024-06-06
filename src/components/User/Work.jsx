import axios from "axios";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";


const Work = ({user, work, reload, setReload}) => {

    const [workAdd, setWorkAdd] = useState();
    const [isPresentEnd, setIsPresentEnd] = useState(false);

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
                <div className="mt-4 text-lg font-bold">
                    <h1>Company Name: {work[0]?.company}</h1>
                    <h1>Position: {work[0]?.position}</h1>
                    <h1>Duration: {work[0]?.duration}</h1>

                </div>



            </div>

        </div>
    );
};

export default Work;