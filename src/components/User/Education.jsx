import { useState } from "react";
import { FaPlus } from "react-icons/fa6";


const Education = () => {
    const [ educationAdd , setEducationAdd ] = useState()



    const handleModalClose = () => {
        document.getElementById('my_modal_2').close();
    }

    const handleAddEducation = () => {
        handleModalClose()
        setEducationAdd(true)
    }
    return (
        <div>
        <div className=" py-10 px-10 md:px-20  md:py-12 ">
            <div className="flex justify-between mb-4">
                <h1 className="text-3xl font-bold">Education</h1>

                <button className=" text-4xl   font-bold rounded" onClick={() => document.getElementById('my_modal_2').showModal()}>
                        <FaPlus />
                    </button>
                    <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-white dark:bg-black">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_2").close()}>✕</button>
                            <h3 className="font-bold text-2xl text-center dark:text-[#73e9fe] text-[#0c01a1] ">Add Contact</h3>
                            <form onSubmit={handleAddEducation}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Institution Name</span>
                                    </label>
                                    <input type="text" name="institution_name" className="input input-bordered bg-slate-200 dark:bg-black " placeholder="Enter institution name" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Degree</span>
                                    </label>
                                    <input type="text" name="position" className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter your degree" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Result</span>
                                    </label>
                                    <input type="text" name="position" className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter your result" required />
                                </div>

                               
                             






                                <div className="modal-action">
                                    <button type="submit" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white  font-bold rounded w-full ">Add</button>
                                </div>
                            </form>
                        </div>
                    </dialog>
            </div>
            <div className="mt-4 text-lg font-bold">
                <h1>Institution Name:</h1>
                <h1>Degree:</h1>
                <h1>Result:</h1>
                {/* <h1>Duration:</h1> */}
                
            </div>



        </div>

    </div>
    );
};

export default Education;