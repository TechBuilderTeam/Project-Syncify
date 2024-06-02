import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FaCaretDown, FaCaretSquareDown, FaRegEdit } from 'react-icons/fa';
import { GiGameConsole } from 'react-icons/gi';
import { MdDeleteForever } from 'react-icons/md';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { TbListDetails } from "react-icons/tb";
import { CiSquarePlus } from "react-icons/ci";
import { MdDeveloperBoard } from "react-icons/md";
import { AuthContext } from '../../../Providers/AuthProviders/AuthProviders';

const Plans = () => {
  const { id } = useParams();
  const {user} = useContext(AuthContext);
  const [data, setData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(null); // State for error status
  const [reload, setReload] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState({});
  const [isOpen, setIsOpen] = useState({});
  const [members, setMembers] = useState(null);
  const navigate = useNavigate();

  console.log('data from plan component -> ', data)

  const toggleDropdown = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const refactorStatus = async (timelineId, statusValue) => {

    const newStatus = {
      status: statusValue
    }
    console.log({ newStatus })
    const result = await axios.patch(`https://projectsyncifyapi.onrender.com/workspace/timelines/update/status/${timelineId}/`,
      newStatus
    )

    console.log('result after status update -> ', result)
    if (result) {
      toast.success("Successfully updated status");
      toggleDropdown(timelineId)
      setReload(!reload);
    }
    else (
      console.log('Something went wrong')
    )
  }

  const handleStatusUpdateButton = async (id, status) => {
    setSelectedStatus((prevStatus) => ({
      ...prevStatus,
      [id]: status,
    }));

    console.log({ selectedStatus })

    if (status === "To Do") {
      refactorStatus(id, "To Do")
    }
    else if (status === 'In Progress') {
      console.log('Progress button clicked for timeline with id:', id);

      refactorStatus(id, "In Progress")

    }
    else if (status === 'Testing') {
      console.log('Testing button clicked for timeline with id:', id);

      refactorStatus(id, 'Testing')
    }
    else if (status === 'Done') {
      console.log('Done button clicked for timeline with id:', id);

      refactorStatus(id, 'Done')
    }

  };


  {/** start add timeline functionlity */ }
  const handleAddTimelineButton = async (e) => {
    e.preventDefault()

    const newTimeline = {
      workspace_Name: '',
      name: '',
      details: '',
      start_Date: '',
      end_Date: ''
    }

    newTimeline.workspace_Name = id;
    newTimeline.name = e.target.name.value;
    newTimeline.details = e.target.details.value;
    newTimeline.start_Date = e.target.startDate.value;
    newTimeline.end_Date = e.target.endDate.value;

    console.log({ newTimeline })

    const result = await axios.post('https://projectsyncifyapi.onrender.com/workspace/timelines/create/', newTimeline)

    if (result) {
      toast.success('Successfully created timeline')
      setReload(!reload);
      handleCloseModelButton("add")
      console.log('result data show after add timeline -> ', result)
    }
    else {
      console.log('timeline post result -> ', result)
    }
  }
  {/** end add timeline functionlity */ }

  {/** start update timeline form functionlity */ }
  const [formData, setFormData] = useState({
    workspace_Name: '',
    name: '',
    details: '',
    start_Date: '',
    end_Date: ''
  });

  const [selectedTimeline, setSelectedTimeline] = useState(null);

  const handleOpenDialog = (timeline, modalName) => {
    setSelectedTimeline(timeline);
    setFormData({
      timelineId: timeline.id,
      workspace_Name: timeline.workspace_name || '',
      name: timeline.name || '',
      details: timeline.details || '',
      start_Date: timeline.start_Date || '',
      end_Date: timeline.end_Date || ''
    });
    document.getElementById(modalName).showModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditTimelineButton = async (e) => {
    e.preventDefault()

    const updateTimeline = {
      workspace_Name: '',
      name: '',
      details: '',
      start_Date: '',
      end_Date: ''
    }

    updateTimeline.workspace_Name = id;
    updateTimeline.name = e.target.name.value;
    updateTimeline.details = e.target.details.value;
    updateTimeline.start_Date = e.target.startDate.value;
    updateTimeline.end_Date = e.target.endDate.value;

    console.log({ updateTimeline })

    const result = await axios.put(`https://projectsyncifyapi.onrender.com/workspace/timelines/update/${formData.timelineId}/`, updateTimeline)

    if (result) {
      toast.success('Successfully Updated timeline');

      setReload(!reload);
      handleCloseModelButton('edit')
    }
    else {
      console.log('timeline post result -> ', result)
    }
  }
  {/** end update timeline form functionlity */ }



  {/** handle Delete timeline functionlity */ }
  const handleDeleteTimeline = async (timeline_id) => {
    try {
      const result = await axios.delete(`https://projectsyncifyapi.onrender.com/workspace/timelines/delete/${timeline_id}/`);

      toast.success("Successfully deleted timeline...");
      setReload(!reload)
    } catch (error) {
      console.log("delete timeline error -> ", error)
    }
  }

  // handle close model 
  const handleCloseModelButton = (value) => {
    document.getElementById(value).close()
  }

  {/** start handle assign button */}
  const handleAssignButton = async (e) => {
    e.preventDefault()
    
    const timelineId = Number(e.target.timelineId.value);
    const email = e.target.leaderEmail.value;
    console.log({timelineId, email})

    if(timelineId && email){
      try {
        const result = await axios.patch(`https://projectsyncifyapi.onrender.com/workspace/timelines/update/assign/${timelineId}/
        `, {"email": email})
        console.log('result -> ', result)
        toast.success("Assign Successfully");

        setReload(!reload)

        handleCloseModelButton("assign")
    } catch (error) {
        console.log('error -> ', error)
    }

    }
}

  {/** end handle assign button */}

  {/** start handle create board button */}
  const handleCreateBoardButton = async (e) => {
    e.preventDefault();
    
    const timelineId = Number(e.target.timelineId.value);
    console.log('data type of timeline id -> ',typeof timelineId)
    const boardName = e.target.name.value;
    const boardDetails = e.target.details.value;

    const newBoard = {
      "timeline_Name": timelineId,
      "name": boardName,
      "details": boardDetails
    }

    console.log('form data before post api hit -> ', newBoard)

    if(timelineId && boardName && boardDetails){
      try {
        const result = await axios.post(`https://projectsyncifyapi.onrender.com/workspace/scrum/create/
        `, newBoard)
        console.log('this result show after post in create boared api  -> ', result)
        toast.success("Board Created Successfully");
        handleCloseModelButton("board")
        navigate(`/workspace/${id}/boards`,  { state: { timelineId } })
    } catch (error) {
        console.log('error -> ', error);

        console.log(error?.response?.data?.timeline_Name[0]);

        toast.warning(error?.response?.data?.timeline_Name[0]);
        handleCloseModelButton("board")
    }

    }

  }
  {/** end handle create board button */}

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError('')
      console.log({ id })


      try {
        const response = await axios.get(`https://projectsyncifyapi.onrender.com/workspace/singleworkspace/${id}/timelines/list/`);
        setData(response.data); // Update state with the fetched data
      } catch (err) {
        setError(err.message); // Update state with the error message
      } finally {
        setLoading(false); // Set loading state to false
        console.log('data -> ', data)
      }


    };

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
    fetchData(); // Call the function to fetch data

  }, [reload]); // Empty dependency array means this effect runs once when the component mounts



  return (
    <div className=''>

      {loading && <div>Loading...</div>}
      {error && <div>Error...</div>}

      <div>
        <button className="mx-4 my-4 text-lg border-none outline-none bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white rounded px-4 py-3" onClick={() => document.getElementById('add').showModal()}>
          Add timeline
        </button>

        <dialog id="add" className="modal">
          <div className="modal-box bg-white dark:bg-black">
            <button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]" onClick={() => handleCloseModelButton('add')}>✕</button>
            <h2 className="text-2xl font-bold mb-4 text-center">Create Timeline</h2>

            <form onSubmit={handleAddTimelineButton}>

              <div className='form-control'>
                <label htmlFor="text" className="label">Workspace Name</label>
                <input type="text" id="WorkspaceName" name="WorkspaceName" className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter Workspace Name" />
              </div>
              <div className="form-control mb-4">
                <label htmlFor="name" className="label">Timeline Name</label>
                <input type="text" id="name" name="name" className="input input-bordered bg-slate-200 dark:bg-black" />

              </div>
              <div className="form-control mb-4">
                <label htmlFor="userType" className="label">Details</label>
                <textarea name="details" id="details" className="input input-bordered bg-slate-200 dark:bg-black" ></textarea>
              </div>
              <div className="form-control mb-4">
                <label htmlFor="userType" className="label">StartDate</label>
                <input type="date" name="startDate" id="startDate" className="input input-bordered bg-slate-200 dark:bg-black" />
              </div>
              <div className="form-control mb-4">
                <label htmlFor="userType" className="label">EndDate</label>
                <input type="date" name="endDate" id="endDate" className="input input-bordered bg-slate-200 dark:bg-black" />
              </div>
              <div className="flex justify-between my-4">
                <button type="submit" className="text-lg border-none outline-none bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white rounded w-full px-4 py-3">Add Timeline</button>
              </div>
            </form>
          </div>
        </dialog>
      </div>

      {/** Start To do component*/}
      <div className='overflow-x-auto shadow-xl rounded w-full m-4'>
        <div>
          <button className='font-bold text-4xl rounded bg-slate-400'>To Do</button>

          <div className="overflow-x-auto shadow-xl rounded w-6/7 m-4">
            <table className="table">
              {/* head */}
              <thead className=' text-lg text-[#8401A1] dark:text-[#73e9fe]'>
                <tr className='text-center'>
                  <th>Timeline Name</th>
                  <th>Timeline</th>
                  <th>Status</th>
                  <th>Assign</th>
                  <th>Action</th>
                  <th> <button className='btn-ghost'>  </button>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}


                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Table data of To do status */}
                {data?.timelines?.filter(timeline => timeline.status === "To Do").map((timeline, index) => (
                  <tr key={index} className="text-center">
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{timeline.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {timeline.name}
                    </td>

                    <td>
                      <div className="relative inline-block text-left">
                        <div>
                          <button
                            type="button"
                            onClick={() => toggleDropdown(timeline.id)}
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            id={`options-menu-${timeline.id}`}
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            {selectedStatus[timeline.id] || 'To Do'}
                            <FaCaretSquareDown className="-mr-1 ml-2 h-5 w-5" />
                          </button>
                        </div>

                        {isOpen[timeline.id] && (
                          <div
                            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby={`options-menu-${timeline.id}`}
                          >
                            <div className="py-1" role="none">

                              <button
                                onClick={() => handleStatusUpdateButton(timeline.id, 'In Progress')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                In Progress
                              </button>
                              <button
                                onClick={() => handleStatusUpdateButton(timeline.id, 'Testing')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                Testing
                              </button>
                              <button
                                onClick={() => handleStatusUpdateButton(timeline.id, 'Done')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                Completed
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                    
                    <td>
                      {(timeline.assign) == null && <button onClick={() => handleOpenDialog(timeline, "assign")}><CiSquarePlus className='text-4xl cursor-pointer' /></button>}

                      
                    </td>

                    <th>

                      <Link to={`/workspace/${id}/boards`} state={timeline} className="btn btn-info px-4  py-2 text-xl" >
                        <TbListDetails />
                      </Link>

                      {/** Member edit button and model start */}
                      <button className='btn-ghost'>  </button>
                      {/* You can open the modal using document.getElementById('ID').showModal() method */}
                      <button className="btn btn-success px-4  py-2" onClick={() => handleOpenDialog(timeline, "edit")}>
                        <FaRegEdit className="text-xl" />
                      </button>
                      <dialog id="edit" className="modal">
                        <div className="modal-box bg-white dark:bg-black">
                          <button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]" onClick={() => handleCloseModelButton('edit')}>✕</button>
                          <h2 className="text-2xl font-bold mb-4 text-center">Update Timeline</h2>
                          <form onSubmit={handleEditTimelineButton}>
                            <div className='form-control'>
                              <label htmlFor="text" className="label">Workspace Name</label>
                              <input type="text" id="WorkspaceName" name="WorkspaceName" className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter Workspace Name" value={formData.workspace_Name}
                                onChange={handleChange} />
                            </div>
                            <div className="form-control mb-4">
                              <label htmlFor="name" className="label">Timeline Name</label>
                              <input type="text" id="name" name="name" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.name}
                                onChange={handleChange} />

                            </div>
                            <div className="form-control mb-4">
                              <label htmlFor="userType" className="label">Details</label>
                              <textarea name="details" id="details" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.details}
                                onChange={handleChange}></textarea>
                            </div>
                            <div className="form-control mb-4">
                              <label htmlFor="userType" className="label">StartDate</label>
                              <input type="date" name="startDate" id="startDate" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.start_Date}
                                onChange={handleChange} />
                            </div>
                            <div className="form-control mb-4">
                              <label htmlFor="userType" className="label">EndDate</label>
                              <input type="date" name="endDate" id="endDate" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.end_Date}
                                onChange={handleChange} />
                            </div>
                            <div className="flex justify-between my-4">
                              <button type="submit" className="text-lg border-none outline-none bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white rounded w-full px-4 py-3">Update</button>
                            </div>
                          </form>
                        </div>
                      </dialog>
                      {/** Member edit button and model end */}
                      <button className="btn btn-warning  p-2 m-2" >
                        <MdDeleteForever className="text-xl cursor-pointer " onClick={() => handleDeleteTimeline(timeline.id)} />
                      </button>
                    </th>

                    <td>{timeline.assign && <MdDeveloperBoard className='text-4xl cursor-pointer' onClick={() => handleOpenDialog(timeline, 'board')} />}</td>
                    {/* <td>{(timeline?.assign?.id == user.userId) && <MdDeveloperBoard className='text-4xl cursor-pointer' onClick={() => handleOpenDialog(timeline, 'board')} />}</td> */}

{/** start create board modal for specefic timeline */}
<dialog id="board" className="modal">
    <div className="modal-box bg-white dark:bg-black">
    <button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]" onClick={() => document.getElementById('board').close()}>✕</button>
            <h2 className="font-bold text-2xl text-center my-3">Create Board</h2>
        
        <form onSubmit={handleCreateBoardButton}>
              
          <div className='form-control'>
                                                                            <label htmlFor="email" className="label">Timeline  Id</label>
              <input type="text" id="timelineId" name="timelineId" value={formData.timelineId} className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter Email" />
          </div>

          <div className="form-control">
              <label className="label">
                  <span className="label-text">Board Name</span>
              </label>
              <input
                  type="text"
                  placeholder="Enter Board Name"
                  className="input input-bordered"
                  name="name"
              />
          </div>
          <div className="form-control">
              <label className="label">
                  <span className="label-text">Board Details</span>
              </label>
              <input
                  type="text"
                  name="details"
                  placeholder="Write Board Details"
                  className="input input-bordered"
              />
          </div>

          <div className="flex justify-center mt-6">
              <button className="border-none outline-none bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white rounded w-full px-4 py-2" type="submit">Create</button>
          </div>


        </form>
    </div>
</dialog>
{/** end create board modal for specefic timeline */}
                  </tr>
                ))}

              </tbody>
            </table>

{/** start modal layout for assign */}
<dialog id="assign" className="modal">
    <div className="modal-box bg-white dark:bg-black">
    <button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]" onClick={() => handleCloseModelButton("assign")}>✕</button>
            <h2 className="font-bold text-2xl text-center my-3">Assign Member</h2>
        
        <form onSubmit={handleAssignButton}>
            
            <div className='form-control'>
            <label htmlFor="email" className="label">Timeline Id</label>
            <input type="text" id="timelineId" name="timelineId" value={formData.timelineId} className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter Email" />
            </div>

            <div className="form-control">
                <label className="label" htmlFor="email">
                    <span className="label-text dark:text-[#73e9fe] text-[#8401A1]">Email</span>
                </label>
                <select id="leaderEmail" name="leaderEmail" className="select select-bordered bg-slate-200 dark:bg-black">
                  {members?.filter(member => member.role === 'Team Leader').map((member,idx) => <option value={member.user_email} key={idx}>{member.user_email}</option>)}
                </select>
            </div>

            <div className="flex justify-center mt-6">
                <button className="border-none outline-none bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white rounded w-full px-4 py-2" type="submit">Assign Member</button>
            </div>


        </form>
    </div>
</dialog>
{/** end modal layout for assign */}

          </div>
        </div>
      </div>
      {/** End To do component*/}


      {/** Start Progress component */}
      <div className='w-8/10 mx-auto h-[200px] bg-green-400 text-white my-2 rounded-md'>
        <div>
          <button className='font-bold text-4xl rounded bg-slate-400'>Progress</button>

          <div className="overflow-x-auto shadow-xl rounded w-6/7 m-4">
            <table className="table">
              {/* head */}
              <thead className=' text-lg text-[#8401A1] dark:text-[#73e9fe]'>
                <tr className='text-center'>
                  <th>Timeline Name</th>
                  <th>Timeline</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th> <button className='btn-ghost'>  </button>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}


                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {data?.timelines?.filter(timeline => timeline.status === 'In Progress').map((timeline, index) => (
                  <tr key={index} className="text-center">
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{timeline.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {timeline.name}
                    </td>

                    <td>
                      <div className="relative inline-block text-left">
                        <div>
                          <button
                            type="button"
                            onClick={() => toggleDropdown(timeline.id)}
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            id={`options-menu-${timeline.id}`}
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            {selectedStatus[timeline.id] || 'To Do'}
                            <FaCaretSquareDown className="-mr-1 ml-2 h-5 w-5" />
                          </button>
                        </div>

                        {isOpen[timeline.id] && (
                          <div
                            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby={`options-menu-${timeline.id}`}
                          >
                            <div className="py-1" role="none">

                              <button
                                onClick={() => handleStatusUpdateButton(timeline.id, "To Do")}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                To Do
                              </button>
                              <button
                                onClick={() => handleStatusUpdateButton(timeline.id, 'Testing')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                Testing
                              </button>
                              <button
                                onClick={() => handleStatusUpdateButton(timeline.id, 'Done')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                Completed
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                    <th>

                      <Link to={`/workspace/${id}/boards`} state={timeline} className="btn btn-info px-4  py-2 text-xl" >
                        <TbListDetails />
                      </Link>

                      {/** Member edit button and model start */}
                      <button className='btn-ghost'>  </button>
                      {/* You can open the modal using document.getElementById('ID').showModal() method */}
                      <button className="btn btn-success px-4  py-2" onClick={() => handleOpenDialog(timeline)}>
                        <FaRegEdit className="text-xl" />
                      </button>
                      <dialog id="edit" className="modal">
                        <div className="modal-box bg-white dark:bg-black">
                          <button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]" onClick={() => handleCloseModelButton('edit')}>✕</button>
                          <h2 className="text-2xl font-bold mb-4 text-center">Update Timeline</h2>
                          <form onSubmit={handleEditTimelineButton}>
                            <div className='form-control'>
                              <label htmlFor="text" className="label">Workspace Name</label>
                              <input type="text" id="WorkspaceName" name="WorkspaceName" className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter Workspace Name" value={formData.workspace_Name}
                                onChange={handleChange} />
                            </div>
                            <div className="form-control mb-4">
                              <label htmlFor="name" className="label">Timeline Name</label>
                              <input type="text" id="name" name="name" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.name}
                                onChange={handleChange} />

                            </div>
                            <div className="form-control mb-4">
                              <label htmlFor="userType" className="label">Details</label>
                              <textarea name="details" id="details" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.details}
                                onChange={handleChange}></textarea>
                            </div>
                            <div className="form-control mb-4">
                              <label htmlFor="userType" className="label">StartDate</label>
                              <input type="date" name="startDate" id="startDate" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.start_Date}
                                onChange={handleChange} />
                            </div>
                            <div className="form-control mb-4">
                              <label htmlFor="userType" className="label">EndDate</label>
                              <input type="date" name="endDate" id="endDate" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.end_Date}
                                onChange={handleChange} />
                            </div>
                            <div className="flex justify-between my-4">
                              <button type="submit" className="text-lg border-none outline-none bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white rounded w-full px-4 py-3">Update</button>
                            </div>
                          </form>
                        </div>
                      </dialog>
                      {/** Member edit button and model end */}
                      <button className="btn btn-warning  p-2 m-2" >
                        <MdDeleteForever className="text-xl cursor-pointer " onClick={() => handleDeleteTimeline(timeline.id)} />
                      </button>
                    </th>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/** End Progress component */}

      {/** Start Completed component*/}
      <div className='w-8/10 mx-auto h-[200px] bg-green-700 text-white my-2 rounded-md'>
        <div>
          <button className='font-bold text-4xl rounded bg-slate-400'>Completed</button>

          <div className="overflow-x-auto shadow-xl rounded w-6/7 m-4">
            <table className="table">
              {/* table headline for Completed component */}
              <thead className=' text-lg text-[#8401A1] dark:text-[#73e9fe]'>
                <tr className='text-center'>
                  <th>Timeline Name</th>
                  <th>Timeline</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th> <button className='btn-ghost'>  </button>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}


                  </th>
                </tr>
              </thead>
              <tbody>

                {/* table data of completed status */}
                {data?.timelines?.filter(timeline => timeline.status === "Done").map((timeline, index) => (
                  <tr key={index} className="text-center">
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{timeline.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {timeline.name}
                    </td>

                    <td>
                      <div className="relative inline-block text-left">
                        <div>
                          <button
                            type="button"
                            onClick={() => toggleDropdown(timeline.id)}
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            id={`options-menu-${timeline.id}`}
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            {selectedStatus[timeline.id] || 'To Do'}
                            <FaCaretSquareDown className="-mr-1 ml-2 h-5 w-5" />
                          </button>
                        </div>

                        {isOpen[timeline.id] && (
                          <div
                            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby={`options-menu-${timeline.id}`}
                          >
                            <div className="py-1" role="none">

                              <button
                                onClick={() => handleStatusUpdateButton(timeline.id, "To Do")}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                To Do
                              </button>
                              <button
                                onClick={() => handleStatusUpdateButton(timeline.id, 'In Progress')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                In Progress
                              </button>
                              <button
                                onClick={() => handleStatusUpdateButton(timeline.id, 'Testing')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                Testing
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                    <th>

                      <Link to={`/workspace/${id}/boards`} state={timeline} className="btn btn-info px-4  py-2 text-xl" >
                        <TbListDetails />
                      </Link>

                      {/** Member edit button and model start */}
                      <button className='btn-ghost'>  </button>
                      {/* You can open the modal using document.getElementById('ID').showModal() method */}
                      <button className="btn btn-success px-4  py-2" onClick={() => handleOpenDialog(timeline)}>
                        <FaRegEdit className="text-xl" />
                      </button>
                      <dialog id="edit" className="modal">
                        <div className="modal-box bg-white dark:bg-black">
                          <button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]" onClick={() => handleCloseModelButton('edit')}>✕</button>
                          <h2 className="text-2xl font-bold mb-4 text-center">Update Timeline</h2>
                          <form onSubmit={handleEditTimelineButton}>
                            <div className='form-control'>
                              <label htmlFor="text" className="label">Workspace Name</label>
                              <input type="text" id="WorkspaceName" name="WorkspaceName" className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter Workspace Name" value={formData.workspace_Name}
                                onChange={handleChange} />
                            </div>
                            <div className="form-control mb-4">
                              <label htmlFor="name" className="label">Timeline Name</label>
                              <input type="text" id="name" name="name" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.name}
                                onChange={handleChange} />

                            </div>
                            <div className="form-control mb-4">
                              <label htmlFor="userType" className="label">Details</label>
                              <textarea name="details" id="details" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.details}
                                onChange={handleChange}></textarea>
                            </div>
                            <div className="form-control mb-4">
                              <label htmlFor="userType" className="label">StartDate</label>
                              <input type="date" name="startDate" id="startDate" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.start_Date}
                                onChange={handleChange} />
                            </div>
                            <div className="form-control mb-4">
                              <label htmlFor="userType" className="label">EndDate</label>
                              <input type="date" name="endDate" id="endDate" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.end_Date}
                                onChange={handleChange} />
                            </div>
                            <div className="flex justify-between my-4">
                              <button type="submit" className="text-lg border-none outline-none bg-gradient-to-r from-cyan-500 to-[#8401A1] text-white rounded w-full px-4 py-3">Update</button>
                            </div>
                          </form>
                        </div>
                      </dialog>
                      {/** Member edit button and model end */}
                      <button className="btn btn-warning  p-2 m-2" >
                        <MdDeleteForever className="text-xl cursor-pointer " onClick={() => handleDeleteTimeline(timeline.id)} />
                      </button>
                    </th>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

        </div>
      </div>
      {/** End Completed component*/}

    </div>
  );
};

export default Plans;