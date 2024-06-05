import { useState } from "react";
import { FaPlus } from "react-icons/fa6";


const UserSkillls = () => {
    const [skillAdd, setskillAdd] = useState();

    const dummydata = [
        {
            id: 1,
            name: "HTML",
        },
        {
            id: 2,
            name: "CSS",
        },
        {
            id: 3,
            name: "JavaScript",
        },
        {
            id: 4,
            name: "React",
        },
        {
            id: 5,
            name: "Redux",
        },

    ]

    const handleModalClose = () => {
        document.getElementById('Userskill').close();
    }

    const handleAddskill = () => {
        handleModalClose()
        setskillAdd(true)
    }
    return (
        <div className="  px-10 md:px-32 py-10 ">
            <div className="flex justify-between mb-4">
                <div>
                    <h1 className="text-3xl font-bold">Skills</h1>
                    <hr className="w-full border-2 border-[#0c01a1]" />
                </div>
                <button className=" text-4xl   font-bold rounded" title="Add skill" onClick={() => document.getElementById('Userskill').showModal()}>
                    <FaPlus />
                </button>
            </div>
            <dialog id="Userskill" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white dark:bg-black">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("Userskill").close()}>✕</button>
                    <h3 className="font-bold text-2xl mb-4 text-center dark:text-[#73e9fe] text-[#0c01a1] ">Add skill</h3>
                    <form onSubmit={handleAddskill}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Skill</span>
                            </label>
                            <select name="skill" id="" className="select select-bordered w-full bg-white dark:bg-black">
                                <option value="HTML">HTML</option>
                                <option value="CSS">CSS</option>
                                <option value="Javascript">Javascript</option>
                                <option value="React js">React js</option>
                                <option value="Next js">Next js</option>
                                <option value="Tailwind">Tailwind</option>
                                <option value="Bootstrap">Bootstrap</option>
                                <option value="Node js">Node js</option>
                                <option value="Express js">Express js</option>
                                <option value="MongoDB">MongoDB</option>
                                <option value="Firebase">Firebase</option>
                                <option value="Git">Git</option>
                                <option value="Github">Github</option>
                                <option value="Django">Django</option>
                                <option value="Flask">Flask</option>
                                <option value="Python">Python</option>
                                <option value="Java">Java</option>
                                <option value="C++">C++</option>
                                <option value="C#">C#</option>
                                <option value="PHP">PHP</option>
                                <option value="SQL">SQL</option>
                                <option value="MySQL">MySQL</option>
                            </select>

                        </div>


                        <div className="modal-action">
                            <button type="submit" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white  font-bold rounded w-full ">Add</button>
                        </div>
                    </form>
                </div>
            </dialog>

            <div className="flex gap-4">

                <div className="flex flex-wrap gap-4">

                    {dummydata?.map((data) => (
                        < div key={data.id} className="border rounded-sm px-2 py-1  text-sm shadow-lg dark:shadow-sky-900 bg-white dark:bg-black">
                            <p>{data.name}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default UserSkillls;