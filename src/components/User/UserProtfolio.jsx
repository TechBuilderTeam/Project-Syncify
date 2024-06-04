import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaPlus } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


const UserProtfolio = () => {

    const [protfolioAdd, setProtfolioAdd] = useState();

    const handleModalClose = () => {
        document.getElementById('UserProtfolio').close();
    }

    const handleAddProtfolio = () => {
        handleModalClose()
        setProtfolioAdd(true)
    }
    return (
        <div className="  px-10 md:px-32 py-10 ">
            <div className="flex justify-between mb-4">
                <div>
                    <h1 className="text-xl md:text-3xl font-bold">Protfolio</h1>
                    <hr className="w-full border-2 border-[#0c01a1]" />
                </div>
                <button className=" text-4xl   font-bold rounded" title="Add Protfolio" onClick={() => document.getElementById('UserProtfolio').showModal()}>
                    <FaPlus />
                </button>
            </div>
            <dialog id="UserProtfolio" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white dark:bg-black">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("UserProtfolio").close()}>✕</button>
                    <h3 className="font-bold text-2xl mb-4 text-center dark:text-[#73e9fe] text-[#0c01a1] ">Add Protfolio</h3>
                    <form onSubmit={handleAddProtfolio}>

                        <div className="from-control">
                            <div className="flex gap-2">
                                <label className="label mb-2">
                                    <FaGithub className="w-8 h-8" /></label>
                                <input
                                    type="url"
                                    name="github"

                                    placeholder="GitHub URL"
                                    className="input  w-full bg-white dark:bg-black"
                                />
                            </div>
                        </div>
                        <div className="from-control">
                            <div className="flex gap-2">
                                <label className="label mb-2">
                                    <FaLinkedin className="w-8 h-8" /></label>
                                <input
                                    type="url"
                                    name="linkedin"

                                    placeholder="LinkedIn URL"
                                    className="input  w-full bg-white dark:bg-black"
                                />
                            </div>
                        </div>
                        <div className="from-control">
                            <div className="flex gap-2">
                                <label className="label mb-2">
                                    <MdEmail className="w-8 h-8" /></label>
                                <input
                                    type="url"
                                    name="mail"

                                    placeholder="Email URL"
                                    className="input  w-full bg-white dark:bg-black"
                                />
                            </div>
                        </div>

                        <div className="modal-action">
                            <button type="submit" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white  font-bold rounded w-full ">Add</button>
                        </div>
                    </form>
                </div>
            </dialog>

            <div className="flex gap-4">
                <Link to={`https://github.com/sabrinara`} target="_blank" >
                <FaGithub className="w-8 h-8" /></Link>
                <FaLinkedin className="w-8 h-8" />
                <MdEmail className="w-8 h-8" />
            </div>
        </div>
    );
};

export default UserProtfolio;