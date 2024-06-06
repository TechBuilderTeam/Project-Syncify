import axios from "axios";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";


const Education = ({user,education,reload,setReload}) => {

    console.log({user,education,reload, setReload})
    const [ educationAdd , setEducationAdd ] = useState()
    const [isPresentEnd, setIsPresentEnd] = useState(false);


    const handleModalClose = () => {
        document.getElementById('my_modal_2').close();
    }

    const handleAddEducation = async (e) => {
        e.preventDefault()
         
        let endDate;
        let currentlyStudying;

         if(isPresentEnd){
            currentlyStudying = true; 
        }  
         else{
            endDate = e.target.endDate.value;
            currentlyStudying = false;
         }

        const userEducation = {
            user: user?.userId,
            institution: e.target.institution_name.value,
            degree: e.target.degree.value,
            start_date: e.target.startDate.value,
            end_date: endDate,
            description: e.target.description.value,
            currently_studying: currentlyStudying
        }

        console.log({userEducation})

        try {
            const result = await axios.post(`https://projectsyncifyapi.onrender.com/api/v1/profile/education/create/`, userEducation)
            console.log({result});
      
            toast.success("Create successfully")
            setReload(!reload)
            handleModalClose()
          } catch (error) {
            console.log('error from designation -> ', error)
          }
        
        // handleModalClose()
        // setEducationAdd(true)
    }
    return (
        <div>
        <div className=" py-10 px-10 md:px-32  md:py-12 ">
            <div className="flex justify-between mb-4">
            <div>
                    <h1 className="text-3xl font-bold">Education</h1>
                    <hr className="w-full border-2 border-[#0c01a1]" />
                </div>

                <button className=" text-4xl   font-bold rounded" onClick={() => document.getElementById('my_modal_2').showModal()}>
                        <FaPlus />
                    </button>
                    <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-white dark:bg-black">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_2").close()}>✕</button>
                            <h3 className="font-bold text-2xl text-center dark:text-[#73e9fe] text-[#0c01a1] ">Add Education</h3>
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
                                    <input type="text" name="degree" className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter your degree" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Description</span>
                                    </label>
                                    <input type="text" name="description" className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter your degree" required />
                                </div>

                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Result</span>
                                    </label>
                                    <input type="text" name="position" className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter your result" required />
                                </div> */}

                                <div className="form-control mb-4">
                                    <label htmlFor="userType" className="label">Start Date</label>
                                    <input type="date" name="startDate" id="startDate" className="input input-bordered bg-slate-200 dark:bg-black" />
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
                <h1>Institution Name: {education[0]?.institution}</h1>
                <h1>Degree: {education[0]?.degree}</h1>
                <h1>Descriptionn: {education[0]?.description}</h1>
                {/* <h1>Duration:</h1> */}
                
            </div>



        </div>

    </div>
    );
};

export default Education;