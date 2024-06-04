import { useState } from "react";
import { FaPlus } from "react-icons/fa6";


const UserAbout = () => {

    const [aboutAdd, setAboutAdd] = useState();

    const handleModalClose = () => {
        document.getElementById('UserAbout').close();
    }

    const handleAddAbout = () => {
        handleModalClose()
        setAboutAdd(true)
    }


    return (
        <div className="  px-10 md:px-32 py-10 ">
            <div className="flex justify-between mb-4">
                <div>
                    <h1 className="text-xl md:text-3xl font-bold">About</h1>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a consequatur omnis molestiae, perspiciatis unde sed aperiam ipsum accusamus velit, commodi doloribus libero odit maiores consectetur. Eveniet distinctio debitis sequi?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam culpa quam sint harum, aliquid sunt pariatur dolores assumenda error nihil eius fugit consectetur, dolorum saepe dolor sit quisquam impedit! Adipisci.
            </p>
        </div >
    );
};

export default UserAbout;