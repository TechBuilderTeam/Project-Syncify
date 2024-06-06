import axios from "axios";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";


const UserAbout = ({user,about,reload,setReload}) => {

    console.log({user,about,reload,setReload})

    const [aboutAdd, setAboutAdd] = useState();
    

    const handleModalClose = () => {
        document.getElementById('UserAbout').close();
    }


    const handleAddAbout = async (e) => {
        e.preventDefault();
        
        const addAbout = {
            about: e.target.about.value,
            user: user?.userId
        }
        
         console.log({addAbout})
        
        try {
            const result = await axios.post(`https://projectsyncifyapi.onrender.com/api/v1/profile/about/`, addAbout)
toast.success("Updated About section")
setReload(!reload)
handleModalClose()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="  px-10 md:px-32 py-10 md:pt-16">
            <div className="flex justify-between mb-4">
                <div>
                    <h1 className="text-3xl font-bold">About</h1>
                    <hr className="w-full border-2 border-[#0c01a1]" />
                </div>
                <button className=" text-4xl   font-bold rounded" title="Add About" onClick={() => document.getElementById('UserAbout').showModal()}>
                    <FaPlus />
                </button>
            </div>
            <dialog id="UserAbout" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white dark:bg-black">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("UserAbout").close()}>✕</button>
                    <h3 className="font-bold text-2xl text-center dark:text-[#73e9fe] text-[#0c01a1] ">About</h3>
                    <form onSubmit={handleAddAbout}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Write Details about yourself</span>
                            </label>
                          <textarea name="about" className="textarea textarea-bordered bg-slate-200 dark:bg-black" required></textarea>
                        </div>
                        <div className="modal-action">
                            <button type="submit" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white  font-bold rounded w-full ">Add</button>
                        </div>
                    </form>
                </div>
            </dialog>





            <p className="mt-5">
                {about?.about}
            </p>
        </div >
    );
};

export default UserAbout;