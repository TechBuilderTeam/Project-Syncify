import axios from "axios";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import MemberAni from "../../../../public/member.json";
import { MdDeleteForever } from 'react-icons/md';
import { IoPeopleSharp } from "react-icons/io5";
import { FaRegEdit, FaSearch } from 'react-icons/fa';
import TitlePages from '../../../pages/shared/TitlePages';
import TitleDynamic from '../../../pages/shared/TitleDynamic';


const Member = () => {
  const [members, setMembers] = useState([]);
  const [change, setChange] = useState(false);
  const { id } = useParams();
  // console.log({ id });

  const newMember = {
    workspace_Name: "",
    role: "",
    email: "",
  };

  const handleCloseModelButton = (value) => {
    document.getElementById(value).close();
  };

  const handleAddUserButton = async (e) => {
    e.preventDefault();

    newMember.workspace_Name = id;
    newMember.role = e.target.userType.value;
    newMember.email = e.target.email.value;

    if(!newMember.workspace_Name){
      toast.warning("not found workspace id,please reload page...");
      return
    }
    else if(!newMember.role){
      toast.warning("Please select role for this user...");
      return;
    }
    else if(!newMember.email){
      toast.warning("Write user email");
      return
    }

    try {
      const result = await axios.post(
        `https://projectsyncifyapi.onrender.com/api/v2/workspace/members/add/`,
        newMember
      );
      // console.log("result -> ", result);
      toast.success("Member Successfully Added");
      setChange(!change);
      handleCloseModelButton("my_modal_3");
    } catch (error) {
      if(error?.message === "Network Error"){
        toast.warning("Network connection failed.Check this network");       
      }
      // console.log("error -> ", error);
      let err = error?.response?.data?.non_field_errors[0]
      if(err){
         toast.warning(err)
      }
    }
  };

  const [formData, setFormData] = useState({
    workspace_id: id,
    userId: "",
    user_email: "",
    new_role: "",
  }
  );

  const [selectedTimeline, setSelectedTimeline] = useState(null);




const handleOpenDialog = (member, modalName) => {
    
    // console.log({member})
    setSelectedTimeline(member);
    //  console.log(member.user_id)

    setFormData({
      workspace_id: id,
      userId: member.user_id,
      user_email: member.user_email,
      new_role: "",
      user_id: "",
    });


    document.getElementById("edit").showModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log({name,value})

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };





  const handleUpdateButton = async (e) => {
    e.preventDefault();
    const updateMember = {
      workspace_id: Number(id),
      new_role: e.target.userType.value,
      user_id: formData.userId,
    };

    // console.log({updateMember})


    try {
      const result = await axios.patch(
        `https://projectsyncifyapi.onrender.com/api/v2/workspace/members/change-role/`,
        updateMember
      );

      // console.log("result -> ", result);
      toast.success("Member Successfully Updated");
      setChange(!change);
      handleCloseModelButton("edit");
    } catch (error) {
      console.log("error -> ", error);
    }
  };

  const handleDeleteMember = async (user_id) => {
    // console.log("user id -> ", user_id);
    const convertIdToSring = id.toString();
    // console.log(typeof convertIdToSring);
    const data = { workspace_id: convertIdToSring, user_id: user_id };
    // console.log("data -> ", data);
    try {
      const result = await axios.delete(
        "https://projectsyncifyapi.onrender.com/api/v2/workspace/members/remove/",
        { data }
      );
      // console.log("delete member -> ", result);
      toast.success("Successfully deleted member");
      setChange(!change);
    } catch (error) {
      console.log("delete member error -> ", error);
    }
  };
  function getBackgroundColor(role) {
    switch (role) {
      case 'Associate Manager':
        return 'bg-[#AF47D2] text-white';
      case 'Member':
        return 'bg-[#007BFF] text-white';
      case 'Team Leader':
        return 'bg-[#006769] text-white';
      default:
        return 'bg-gray-400 text-black';
    }
  }


  useEffect(() => {
    const getSpecificMembers = async () => {
      try {
        const result = await axios.get(
          `https://projectsyncifyapi.onrender.com/api/v2/workspace/${id}/members/`
        );
        // console.log("get member -> ", result.data);
        setMembers(result.data);
      } catch (error) {
        console.log("get member error -> ", error);
      }
    };

    getSpecificMembers();
  }, [change]);

  const memberLength = members.length;

  return (
    <div className="h-screen text-black dark:text-white">


      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-black">
           <button
              id="closeBtn"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#0c01a1] dark:text-[#73e9fe]"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
            <h2 className="font-bold text-2xl text-center my-3 dark:text-[#73e9fe] text-[#0c01a1]">
              Create New Member
            </h2>
          <form onSubmit={handleAddUserButton}>
            
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">
                  Email
                </span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email Address"
                className="input input-bordered bg-slate-200 dark:bg-black"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="userType">
                <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">
                  Role
                </span>
              </label>
              <select
                id="userType"
                name="userType"
                className="select select-bordered bg-slate-200 dark:bg-black"
              >
                <option value="Associate Manager">Associate Manager</option>
                <option value="Team Leader">Team Leader</option>
                <option value="Member">Member</option>
              </select>
            </div>

            <div className="flex justify-center mt-6">
              <button className="border-none outline-none bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white rounded w-full px-4 py-2" type="submit">Add Member</button>
            </div>


          </form>
        </div>

      </dialog>
      <div className='dark:text-[#73e9fe] text-[#010ca1] '>
        <div className=" py-2 mt-4 ">
          <div className="flex justify-between items-center pb-2">
            <h1 className="text-3xl   pb-2 font-semibold ">
              Member
            </h1>

            <button className="bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white  font-bold px-4 py-2 rounded-md" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Member</button>
          </div>

          <hr className="w-full h-1 bg-gradient-to-r from-[#0c01a1] to-[#73e9fe] " />
          <p className="text-sm  font-semibold mt-2 text-black dark:text-white ">
            To ensure seamless progress tracking and maintenance of your project, incorporate team members into your project structure. Assign distinct roles to each member to streamline collaboration and enhance accountability throughout the project lifecycle. Add member and explore more.
          </p>
        </div>
        {/* <TitleDynamic title="Member" subTitle="To ensure seamless progress tracking and maintenance of your project, incorporate team members into your project structure. Assign distinct roles to each member to streamline collaboration and enhance accountability throughout the project lifecycle. Add member and explore more. " /> */}
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center my-6 gap-2 '>
        <div>
          {memberLength === 0 && <><div className='flex justify-center items-center gap-2'>
            <IoPeopleSharp className='text-3xl text-[#0c01a1] dark:text-[#73e9fe]' />
            <h2 className='text-xl font-bold  '>  No Member Found, Add Member!</h2>
          </div></>}
        </div>
        <div className='relative md:w-65 flex items-center '>
          <input type="text" className='w-full px-4 py-1 rounded shadow outline-none bg-white dark:bg-black ' placeholder='Search' />
          <button className='p-1 m-2 focus:outline-none  '><FaSearch /></button>
        </div>
        {/* <div>
                    <button className="bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white  font-bold px-4 py-2 rounded-md" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Member</button>
                </div> */}
      </div>
      {/* <h2 className='m-4 text-5xl text-center '>User List </h2> */}

      {
        memberLength > 0 && (
          <div className="overflow-x-auto shadow-xl rounded w-full ">
            <table className="table">
              {/* head */}
              <thead className=' text-sm text-[#0c01a1] dark:text-[#73e9fe]'>
                <tr className='text-center'>

                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Edit Member</th>
                  <th>Delete Member</th>

                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  members?.map(member =>
                    <tr key={member.user_id} className="text-center">
                      <td>
                        <div className="flex items-center gap-3 ">
                          <div className="avatar">
                            <div className="rounded-full w-8 h-8">
                              <img src={member.user_image} alt="member image" />
                            </div>
                          </div>
                          <div>
                            <Link to={`/profile/${member.user_id}`}>{member.user_name}</Link>
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

                      <td className="">
                        <p className={`px-1 py-1 rounded ${getBackgroundColor(member.role)}`}>
                          {member.role}
                        </p>
                      </td>

                      <th>
                        {/* <Link to= {`/admin/admin/userDetails`} state={user} className="btn btn-accent  p-2 m-2">details</Link> */}
                        {/* <button className="btn btn-neutral px-4  py-2">Edit</button> */}

                        {/** Member edit button and model start */}
                        <button className='btn-ghost'>  </button>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="mx-4" onClick={() => handleOpenDialog(member, "edit")}>
                          <FaRegEdit className="text-xl" />
                        </button>
                        <dialog id="edit" className="modal">
                          <div className="modal-box bg-white dark:bg-black dark:text-[#73e9fe] text-[#2c01a1]">

                            <button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#2c01a1] dark:text-[#73e9fe]" onClick={() => document.getElementById('edit').close()}>✕</button>
                            <h2 className="text-2xl font-bold mb-4 text-center">Update Member Role</h2>

                            <form onSubmit={handleUpdateButton}>

                              <div className='form-control'>
                                <label htmlFor="email" className="label">Email</label>
                                <input type="email" id="email" name="email" value={formData.user_email} className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter Email" />
                              </div>
                              <div className="form-control mb-4">
                                <label htmlFor="email" className="label">User Id</label>
                                <input type="text" id="user_id" name="user_id" value={formData.userId} className="input input-bordered bg-slate-200 dark:bg-black" />

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
                                <button type="submit" className="text-lg border-none outline-none bg-gradient-to-r from-cyan-500 to-[#2c01a1] text-white rounded w-full px-4 py-3">Update Member</button>
                              </div>
                            </form>
                          </div>
                        </dialog>
                      </th>
                      <th>
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
        )}
    </div>
  );
}

export default Member;
  




