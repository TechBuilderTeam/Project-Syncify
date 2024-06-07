import axios from "axios";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { toast } from "react-toastify";


const Education = ({user,education,reload,setReload}) => {

    console.log({user,education,reload, setReload})
    const [ educationAdd , setEducationAdd ] = useState()
    const [isPresentEnd, setIsPresentEnd] = useState(false);
    
    const [formData, setFormData] = useState({
        eduId: "",
        user: user?.userId,
        institution: "",
        degree: "",
        start_date: "",
        end_date: "",
        description: "",
        currently_studying: false
    }
      );
    
      const [selectedTimeline, setSelectedTimeline] = useState(null);
    
    
    
    
    const handleOpenDialog = (id, edu, modalName) => {
        
        // console.log({member})
        setSelectedTimeline(edu);
        //  console.log(member.user_id)
    
        setFormData({
            eduId: id,
            user: user?.userId,
            institution: edu.institution,
            degree: edu.degree,
            start_date: edu.start_date,
            end_date: edu.end_date,
            description: edu.description,
            currently_studying: edu.currently_studying
        });
    
    
        document.getElementById(modalName).showModal();
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log({name,value})
    
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

    
    const handleUpadateEducation = async (e) => {
        e.preventDefault();

        const updateEducation = {
            user: user?.userId,
            institution: e.target.institution_name.value,
            degree: e.target.degree.value,
            start_date: e.target.startDate.value,
            end_date: formData.end_date,
            description: e.target.description.value,
            currently_studying: formData.currently_studying
        }

        console.log({updateEducation});

        try {
            const result = await axios.put(`https://projectsyncifyapi.onrender.com/api/v1/profile/education/edit/${formData.eduId}/`,updateEducation)

            toast.success('Successfully Updated Course');
            setReload(!reload);
            document.getElementById("EditEducation").close()
        } catch (error) {
            toast.warning(error.response.data)
            console.log("error from update education -> ", error)
        }
    }

    {/** handle Delete education functionlity */ }
  const handleDeleteEducation = async (education_id) => {
    try {
      const result = await axios.delete(`https://projectsyncifyapi.onrender.com/api/v1/profile/education/delete/${education_id}/`);

      toast.success("Successfully deleted Education");
      setReload(!reload)
    } catch (error) {
      console.log("delete timeline error -> ", error)
    }
  }


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
            <div>
            {education?.length > 0 && education.map((ele, idx) => (
                <div key={idx} className="mt-4 text-lg font-bold">
                    <h1>Institution Name: {ele?.institution}</h1>
                    <h1>Degree: {ele?.degree}</h1>
                    <h1>Description: {ele?.description}</h1>
                    <div className="flex items-center gap-5 p-4">
                    <button className="px-6 py-2 bg-blue-300 hover:bg-blue-400 rounded-md" onClick={()=> handleOpenDialog(ele.id, ele, "EditEducation")}>
                    <FaRegEdit className="text-xl cursor-pointer" title="Edit education" />
                    </button>
                    <button className="px-6 py-2 bg-yellow-200 hover:bg-yellow-300 rounded-md"  onClick={() => handleDeleteEducation(ele.id)}>
                    <RiDeleteBin5Fill className="text-xl cursor-pointer" title="Delete education" />
                    </button>
                    
                    </div>
                    <dialog id="EditEducation" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-white dark:bg-black">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("EditEducation").close()}>✕</button>
                            <h3 className="font-bold text-2xl text-center dark:text-[#73e9fe] text-[#0c01a1] ">Update Education</h3>
                            <form onSubmit={handleUpadateEducation}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Institution Name</span>
                                    </label>
                                    <input value={formData.institution} onChange={handleChange} type="text" name="institution_name" className="input input-bordered bg-slate-200 dark:bg-black " placeholder="Enter institution name" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Degree</span>
                                    </label>
                                    <input value={formData.degree} onChange={handleChange} type="text" name="degree" className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter your degree" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Description</span>
                                    </label>
                                    <input value={formData.description} onChange={handleChange} type="text" name="description" className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter your degree" required />
                                </div>

                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Result</span>
                                    </label>
                                    <input type="text" name="position" className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter your result" required />
                                </div> */}

                                <div className="form-control mb-4">
                                    <label htmlFor="userType" className="label">Start Date</label>
                                    <input value={formData.start_date} onChange={handleChange} type="date" name="startDate" id="startDate" className="input input-bordered bg-slate-200 dark:bg-black" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">End Date</span>
                                    </label>
                                    {!formData.currently_studying && (
                                        <input type="date" value={formData.end_date} onChange={handleChange} name="endDate" className="input input-bordered bg-slate-200 dark:bg-black" required />
                                    )}
                                    <label className="flex items-center mt-2">
                                        <input type="checkbox" className="checkbox" checked={formData.currently_studying}/>
                                        <span className="ml-2 dark:text-[#73e9fe] text-[#0c01a1]">Present</span>
                                    </label>
                                </div>


                                <div className="modal-action">
                                    <button type="submit" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white  font-bold rounded w-full ">Update</button>
                                </div>
                            </form>
                        </div>
                    </dialog>
                    {/* <h1>Duration:</h1> */}
                </div>
                ))}
            </div>



        </div>

    </div>
    );
};

export default Education;