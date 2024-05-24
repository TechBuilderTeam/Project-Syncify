import axios from 'axios';
import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Member = () => {
  const [members, setMembers] = useState([]);
   const [change,setChange] = useState(false)
    const {id} = useParams();
    console.log({id})

   
    

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
        setChange(!change);
        handleCloseModelButton("my_modal_3")
      } catch (error) {
        console.log('error -> ',error)
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
            setChange(!change);
            handleCloseModelButton("edit")
        } catch (error) {
            console.log('error -> ',error)
        }
    }

    const handleDeleteMember = async (user_id) => {
      console.log("user id -> ", user_id)
      const convertIdToSring = id.toString()
      console.log(typeof convertIdToSring)
      const data = {workspace_id: convertIdToSring, user_id: user_id}
      console.log("data -> ",data)
      try {
        const result = await axios.delete("https://projectsyncifyapi.onrender.com/api/v2/workspace/members/remove/", {data}
          )
          console.log("delete member -> ", result)
          toast.success("Successfully deleted")
          setChange(!change)
          
      } catch (error) {
        
        console.log("delete member error -> ", error)
      }
    }

    useEffect(()=>{
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
    },[change])


    return (
        <div className=" h-screen">
      {/* <h2 className='m-4 text-5xl text-center '>User List </h2> */}
      <div className="overflow-x-auto shadow-xl rounded w-full m-4">
            <table className="table">
                {/* head */}
                <thead className=' text-2xl text-[#8401A1] dark:text-[#73e9fe]'>
                    <tr>
                        {/* <th>
                           Checkbox
                        </th> */}
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th> <button className='btn-ghost'>  </button>
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="px-4 py-2 rounded  bg-black dark:bg-white dark:text-[#8401A1] text-[#73e9fe] text-lg" onClick={() => document.getElementById('my_modal_3').showModal()}>Add New Member</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button id="closeBtn" className="btn btn-sm btn-circle  absolute right-2 top-2">✕</button>
                                    </form>
                                    <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
                                        <h2 className="text-2xl font-bold mb-4 text-black text-center">New Member Create</h2>
                                        <form onSubmit={handleAddUserButton}>
                                            
                                            <div className="mb-4">
                                                <label htmlFor="email" className="block text-[#8401A1] font-semibold mb-2">Email</label>
                                                <input type="email" id="email" name="email" className="w-full  border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter email address" />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="userType" className="block text-[#8401A1] font-semibold mb-2">Role</label>
                                                <select id="userType" name="userType" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500  text-1xl">
                                                    <option value="Associate Manager">Associate Manager</option>
                                                    <option value="Team Leader">Team Leader</option>
                                                    <option value="Member">Member</option>
                                                </select>
                                            </div>
                                            <div className="flex justify-center mb-4">
                                                
                                                <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out text-xl mt-6 ">Add New Member</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </dialog>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        members?.map( member => 
                            <tr key={member.user_id}>
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
                            {member.user_name}
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
                            <button className="btn btn-neutral px-4 py-2" onClick={() => document.getElementById('edit').showModal()}>Edit</button>
                            <dialog id="edit" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button id="closeBtn" className="btn btn-sm btn-circle btn-error absolute right-2 top-2">✕</button>
                                    </form>
                                    <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
                                        <h2 className="text-2xl font-bold mb-4 text-black text-center">Update Member Role</h2>
                                        <form onSubmit={handleUpdateButton}>
                                            
                                            <div className="mb-4">
                                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">User Id</label>
                                                <input type="text" id="user_id" name="user_id" value={member.user_id} readOnly userclassName="w-full text-black border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter User Id" />
                
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="userType" className="block text-gray-700 font-semibold mb-2">Role</label>
                                                <select id="userType" name="userType" className="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-black text-1xl">
                                                    <option value="Associate Manager">Associate Manager</option>
                                                    <option value="Team Leader">Team Leader</option>
                                                    <option value="Member">Member</option>
                                                </select>
                                            </div>
                                            <div className="flex justify-between mb-4">
                                                
                                                <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Update Member</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </dialog>
                            {/** Member edit button and model end */}
                            <button className="btn btn-secondary  p2 m-2" onClick={() => handleDeleteMember(member.user_id)}>Delete</button>
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

    </div>
    );
};

export default Member;