import axios from 'axios';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import MemberAni from "../../../../public/member.json";
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit, FaSearch } from 'react-icons/fa';
import TitlePages from '../../../pages/shared/TitlePages';
const Member = () => {
    const [members, setMembers] = useState([]);
    const [change, setChange] = useState(false)
    const { id } = useParams();
    console.log({ id })




    const newMember = {
        "workspace_Name": '',
        "role": '',
        "email": '',
    }

    const handleCloseModelButton = (value) => {
        document.getElementById(value).close()
    }

    const handleAddUserButton = async (e) => {
        e.preventDefault()

        newMember.workspace_Name = id;
        newMember.role = e.target.userType.value;
        newMember.email = e.target.email.value;

        try {
            const result = await axios.post(`https://projectsyncifyapi.onrender.com/api/v2/workspace/members/add/`, newMember)
            console.log('result -> ', result)
            toast.success("Member Successfully Added");
            setChange(!change);
            handleCloseModelButton("my_modal_3")
        } catch (error) {
            console.log('error -> ', error)
        }

    }

    const handleUpdateButton = async (e) => {
        e.preventDefault()
        const updateMember = {
            "workspace_id": id,
            "new_role": e.target.userType.value,
            "user_id": e.target.user_id.value
        }

        try {
            const result = await axios.patch(`https://projectsyncifyapi.onrender.com/api/v2/workspace/members/change-role/`, updateMember
            )

            console.log('result -> ', result)
            toast.success("Member Successfully Updated");
            setChange(!change);
            handleCloseModelButton("edit")
        } catch (error) {
            console.log('error -> ', error)
        }
    }

    const handleDeleteMember = async (user_id) => {
        console.log("user id -> ", user_id)
        const convertIdToSring = id.toString()
        console.log(typeof convertIdToSring)
        const data = { workspace_id: convertIdToSring, user_id: user_id }
        console.log("data -> ", data)
        try {
            const result = await axios.delete("https://projectsyncifyapi.onrender.com/api/v2/workspace/members/remove/", { data }
            )
            console.log("delete member -> ", result)
            toast.success("Successfully deleted member")
            setChange(!change)

        } catch (error) {

            console.log("delete member error -> ", error)
        }
    }

    useEffect(() => {
        const getSpecificMembers = async () => {
            try {
                const result = await axios.get(`https://projectsyncifyapi.onrender.com/api/v2/workspace/${id}/members/`)
                console.log("get member -> ", result.data)
                setMembers(result.data)
            } catch (error) {
                console.log("get member error -> ", error)
            }
        }

        getSpecificMembers()
    }, [change])


    const memberLength = members.length;


    return (
        <div className="h-screen ">
        
            {/* <div className=" flex justify-center items-center gap-6">
                <div className="w-80 h-80">
                    <Lottie animationData={MemberAni} loop={true} />
                </div>
                <div className=" dark:text-[#73e9fe] text-[#8401A1] mt-6">
                    <p className="text-3xl font-bold mb-1">Wanna Add New <br />Member?</p>
                    <p className="text-sm mb-4 text-black dark:text-white">For maintain your project progress. <br />Add your member and track your progress... <br />Click below<span className="font-extrabold font-2xl text-[#8401A1] dark:text-[#73e9fe]"> ↓↓ </span>  and explore more.</p>
                    <button className="bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white  font-bold px-4 py-2 rounded-md" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Member</button>
                </div>

            </div> */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white dark:bg-black">
                    <form onSubmit={handleAddUserButton}>
                        <button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
                        <h2 className="font-bold text-2xl text-center my-3">Create New Member</h2>
                        <div className="form-control">
                            <label className="label" htmlFor="email">
                                <span className="label-text dark:text-[#73e9fe] text-[#8401A1]">Email</span>
                            </label>
                            <input type="email" id="email" name="email" placeholder="Enter Email Address" className="input input-bordered bg-slate-200 dark:bg-black" />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="userType">
                                <span className="label-text dark:text-[#73e9fe] text-[#8401A1]">Role</span>
                            </label>
                            <select id="userType" name="userType" className="select select-bordered bg-slate-200 dark:bg-black">
                                <option value="Associate Manager">Associate Manager</option>
                                <option value="Team Leader">Team Leader</option>
                                <option value="Member">Member</option>
                            </select>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button className="border-none outline-none bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white rounded w-full px-4 py-2" type="submit">Add Member</button>
                        </div>


                    </form>
                </div>

            </dialog>
            <div className='dark:text-[#73e9fe] text-[#8401A1] '>
               {/* <p className="text-3xl font-bold mb-1">Member</p> */}
               <TitlePages title="Member" />
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center my-6 gap-2 '>
                {/** search bar */}
                {/* <div className='flex w-2/5 flex-wrap sm:w-full rounded bg-white'>
                    <input 
                      type="search"
                      name="search"
                      id="search"
                      placeholder='search'
                      className='w-[300px] border rounded-md  bg-transparent px-4 text-gray-900 outline-none focus:outline-none' />

                    <button className='m-2 rounded bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white px-4 py-2'>Search</button>
                </div> */}

                <div className='relative md:w-65 flex items-center '>
                    <input type="text" className='w-full px-4 py-1 rounded shadow outline-none bg-white dark:bg-black ' placeholder='Search' />            
                    <button className='p-1 m-2 focus:outline-none  '><FaSearch /></button>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white  font-bold px-4 py-2 rounded-md" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Member</button>
                </div>
            </div>
            {/* <h2 className='m-4 text-5xl text-center '>User List </h2> */}
            {memberLength === 0 && <h2 className='m-4 text-2xl text-center '>No Member Found, Add Member!</h2>}
            {
                memberLength > 0 && (
                    <div className="overflow-x-auto shadow-xl rounded w-full ">
                        <table className="table">
                            {/* head */}
                            <thead className=' text-lg text-[#8401A1] dark:text-[#73e9fe]'>
                                <tr className='text-center'>
                                    {/* <th>
                           Checkbox
                        </th> */}
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                    <th> <button className='btn-ghost'>  </button>
                                        {/* You can open the modal using document.getElementById('ID').showModal() method */}


                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    members?.map(member =>
                                        <tr key={member.user_id} className="text-center">
                                            {/* <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th> */}
                                            <td>
                                                {/* <div className="flex items-center gap-3">
                                
                                <div>
                                    <div className="font-bold">{user.firstName} {user.lastName}</div>
                                    <div className="text-sm opacity-50">{user.gender}</div>
                                    <div className="text-sm opacity-50">{user.birthDate}</div>
                                </div>
                            </div> */}
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                    </div>
                                                    <div>
                                                    <div className="font-bold">{member.user_name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {member.user_email}
                                                {/* <br />
                            <span className="badge badge-ghost badge-sm">{user.phone}</span>
                            <span className="badge badge-ghost badge-sm">{user.email}</span> */}
                                            </td>
                                            {/* <td>{user.roll === 'admin' ? <button onClick={() => handleMakeUser(user)} className="btn btn-ghost bg-red-600 text-white ">Admin</button> 
                                : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-red-600 text-white ">User</button>}</td> */}

                                            <td>{member.role}</td>
                                            <th>
                                                {/* <Link to= {`/admin/admin/userDetails`} state={user} className="btn btn-accent  p-2 m-2">details</Link> */}
                                                {/* <button className="btn btn-neutral px-4  py-2">Edit</button> */}

                                                {/** Member edit button and model start */}
                                                <button className='btn-ghost'>  </button>
                                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                                <button className="mx-4" onClick={() => document.getElementById('edit').showModal()}>
                                                    <FaRegEdit className="text-xl" />
                                                </button>
                                                <dialog id="edit" className="modal">
                                                    <div className="modal-box bg-white dark:bg-black">
                                                        <form onSubmit={handleUpdateButton}>
                                                            <button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]" onClick={() => document.getElementById('edit').close()}>✕</button>
                                                            <h2 className="text-2xl font-bold mb-4 text-center">Update Member Role</h2>

                                                            <div className='form-control'>
                                                                <label htmlFor="email" className="label">Email</label>
                                                                <input type="email" id="email" name="email" value={member.user_email} className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter Email" />
                                                            </div>
                                                            <div className="form-control mb-4">
                                                                <label htmlFor="email" className="label">User Id</label>
                                                                <input type="text" id="user_id" name="user_id" value={member.user_id} readOnly  className="input input-bordered bg-slate-200 dark:bg-black" />

                                                            </div>
                                                            <div className="form-control mb-4">
                                                                <label htmlFor="userType" className="label">Role</label>
                                                                <select id="userType" name="userType" className="select select-bordered bg-slate-200 dark:bg-black">
                                                                    <option value="Associate Manager">Associate Manager</option>
                                                                    <option value="Team Leader">Team Leader</option>
                                                                    <option value="Member">Member</option>
                                                                </select>
                                                            </div>
                                                            <div className="flex justify-between my-4">
                                                                <button type="submit" className="text-lg border-none outline-none bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white rounded w-full px-4 py-3">Update Member</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </dialog>
                                                {/** Member edit button and model end */}
                                                <button className="mx-4" onClick={() => handleDeleteMember(member.user_id)}>
                                                    <MdDeleteForever className="text-xl " />
                                                </button>
                                            </th>
                                        </tr>
                                    )
                                }

                            </tbody>
                            {/* foot */}
                            {/* <tfoot>
                    <tr >
                        <th></th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </tfoot> */}

                        </table>

                    </div>
                )
            }

        </div >
    );
};

export default Member;