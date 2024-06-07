import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FaCaretDown, FaCaretSquareDown, FaRegEdit } from 'react-icons/fa';
import { GiGameConsole } from 'react-icons/gi';
import { MdDeleteForever } from 'react-icons/md';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TbListDetails } from "react-icons/tb";
import { CiSquarePlus } from "react-icons/ci";
import { MdDeveloperBoard } from "react-icons/md";
import { AuthContext } from '../../../Providers/AuthProviders/AuthProviders';
import { IoPersonAddOutline } from 'react-icons/io5';

const Plans = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
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
      toast.success('Successfully created Plan');
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
      toast.success('Successfully Updated Plan');

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

      toast.success("Successfully deleted Plan");
      setReload(!reload)
    } catch (error) {
      console.log("delete timeline error -> ", error)
    }
  }

  // handle close model 
  const handleCloseModelButton = (value) => {
    document.getElementById(value).close()
  }

  {/** start handle assign button */ }
  const handleAssignButton = async (e) => {
    e.preventDefault()

    const timelineId = Number(e.target.timelineId.value);
    const email = e.target.leaderEmail.value;
    console.log({ timelineId, email })

    if (timelineId && email) {
      try {
        const result = await axios.patch(`https://projectsyncifyapi.onrender.com/workspace/timelines/update/assign/${timelineId}/
        `, { "email": email })
        console.log('result -> ', result)
        toast.success("Member is Assigned Successfully");

        setReload(!reload)

        handleCloseModelButton("assign")
      } catch (error) {
        console.log('error -> ', error)
      }

    }
  }

  {/** end handle assign button */ }

  {/** start handle create board button */ }


  const handleCreateBoardButton = async (e) => {
    e.preventDefault();

    const timelineId = Number(e.target.timelineId.value);
    console.log('data type of timeline id -> ', typeof timelineId)
    const boardName = e.target.name.value;
    const boardDetails = e.target.details.value;

    const newBoard = {
      "timeline_Name": timelineId,
      "name": boardName,
      "details": boardDetails
    }

    console.log('form data before post api hit -> ', newBoard)

    if (timelineId && boardName && boardDetails) {
      try {
        const result = await axios.post(`https://projectsyncifyapi.onrender.com/workspace/scrum/create/
        `, newBoard)
        console.log('this result show after post in create boared api  -> ', result)
        toast.success("Board Created Successfully");
        handleCloseModelButton("board")
        navigate(`/workspace/${id}/boards`, { state: { timelineId } })
      } catch (error) {
        console.log('error -> ', error);
        console.log(error?.response?.data?.timeline_Name[0]);
        toast.warning("Already board is created");
        handleCloseModelButton("board")
      }

    }

  }
  {/** end handle create board button */ }

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
    fetchData();

  }, [reload]);


  // Count the length of timelines
  const timelinesLength = data?.timelines?.length || 0;

  console.log({ timelinesLength })

  return (
    <div className='h-fit'>
      <div className=" py-2 mt-4 ">
        <div className="flex justify-between items-center pb-2">
          <h1 className="text-3xl   pb-2 font-semibold ">
            Plans
          </h1>

          <button className="bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white  font-bold px-4 py-2 rounded-md" onClick={() => document.getElementById('add').showModal()}>
            Add Plan
          </button>
        </div>

        <hr className="w-full h-1 bg-gradient-to-r from-[#0c01a1] to-[#73e9fe] " />
        <p className="text-sm  font-semibold mt-2 text-black dark:text-white ">
          To ensure seamless progress tracking and maintenance of your project, incorporate team members into your project structure. Assign distinct roles to each member to streamline collaboration and enhance accountability throughout the project lifecycle. Add member and explore more.
        </p>
      </div>
      {/* {loading && <div>Loading...</div>}
      {error && <div>Error...</div>} */}

      <div>


        <dialog id="add" className="modal">
          <div className="modal-box bg-white dark:bg-black">
            <button id="closeBtn" className=" absolute right-3 top-3 bg-white dark:bg-black text-[#0c01a1] dark:text-[#73e9fe] rounded-full border w-6 h-6" onClick={() => handleCloseModelButton('add')}>✕</button>
            <h2 className="text-2xl font-bold mb-4 text-center">Create Plans</h2>

            <form onSubmit={handleAddTimelineButton}>

              {/* <div className='form-control'>
                <label htmlFor="text" className="label">Project Name</label>
                <input type="text" id="WorkspaceName" name="WorkspaceName" className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter Workspace Name" />
              </div> */}
              <div className="form-control mb-4">
                <label htmlFor="name" className="label">Plan Name</label>
                <input type="text" id="name" name="name" className="input input-bordered bg-slate-200 dark:bg-black " placeholder="Enter Plan Name" />

              </div>
              <div className="form-control mb-4">
                <label htmlFor="userType" className="label">Details</label>
                <textarea name="details" id="details" className="textarea textarea-bordered bg-slate-200 dark:bg-black" placeholder='Enter Details'></textarea>
              </div>
              <div className="form-control mb-4">
                <label htmlFor="userType" className="label">Start Date</label>
                <input type="date" name="startDate" id="startDate" className="input input-bordered bg-slate-200 dark:bg-black" />
              </div>
              <div className="form-control mb-4">
                <label htmlFor="userType" className="label">End Date</label>
                <input type="date" name="endDate" id="endDate" className="input input-bordered bg-slate-200 dark:bg-black" />
              </div>
              <div className="flex justify-between my-4">
                <button type="submit" className="text-lg border-none outline-none bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white rounded w-full px-4 py-3">Add Plan</button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
      { timelinesLength === 0 ? (
        <div className="text-center mt-10 h-screen">
          <h1 className="text-xl font-bold">No Plans add yet... add some plans and explore more</h1>
        </div>
      ) : (
        <div>
          {/** Start To do component*/}
          <div className='overflow-x-auto shadow-xl rounded-sm w-full mt-4'>
            <div>
              <button className='font-bold text-md px-2 py-1 rounded-sm bg-sky-300 text-[#0c01a1]'>To Do</button>

              <div className="overflow-x-auto shadow-xl rounded-sm w-6/7">
                <table className="table">
                  {/* head */}
                  <thead className=' text-sm text-[#0c01a1] dark:text-[#73e9fe]'>
                    <tr className='text-center'>

                      <th>Plans</th>
                      <th>Assign</th>
                      <th>Status</th>
                      <th>Edit</th>
                      <th>Delete</th>
                      <th>Board</th>
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

                          <div className="font-bold text-center">{timeline.name.slice(0, 16)}</div>

                        </td>

                        <td>
                          {(timeline.assign) == null && <button onClick={() => handleOpenDialog(timeline, "assign")} className='rounded-full border border-[#0c01a1] px-1 py-1 '><IoPersonAddOutline className='text-lg cursor-pointer ' title="Assign" /></button>}

                          {timeline.assign && (
                            <div className='flex items-center justify-center gap-6' >
                              <img src={timeline.assign.image} alt="image" className='w-8 h-8 rounded-full' />
                              {/* <p className="font-semibold">{timeline.assign.first_name + " " + timeline.assign.last_name}</p> */}
                            </div>
                          )}

                        </td>
                        <td>
                          <div className="relative inline-block text-left">
                            <div >
                              <button
                                type="button"
                                onClick={() => toggleDropdown(timeline.id)}
                                className="inline-flex justify-center w-full rounded-sm border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-950 text-sm font-medium  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                id={`options-menu-${timeline.id}`}
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                {selectedStatus[timeline.id] || 'To Do'}
                                <FaCaretSquareDown className="-mr-1 ml-2 h-3 w-3" />
                              </button>
                            </div>

                            {isOpen[timeline.id] && (
                              <div
                                className="absolute right-6 bottom-0  w-44 rounded-sm shadow-lg bg-white dark:bg-gray-950 ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby={`options-menu-${timeline.id}`}
                              >
                                <div className="py-1 ml-6" role="none">

                                  <button
                                    onClick={() => handleStatusUpdateButton(timeline.id, 'In Progress')}
                                    className="block px-2 py-1 text-sm "
                                    role="menuitem"
                                  >
                                    In Progress
                                  </button>
                                  <button
                                    onClick={() => handleStatusUpdateButton(timeline.id, 'Testing')}
                                    className="block px-2 py-1 text-sm "
                                    role="menuitem"
                                  >
                                    Testing
                                  </button>
                                  <button
                                    onClick={() => handleStatusUpdateButton(timeline.id, 'Done')}
                                    className="block px-2 py-1 text-sm "
                                    role="menuitem"
                                  >
                                    Done
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </td>

                        <th>
                          <button className=" px-4  py-2" onClick={() => handleOpenDialog(timeline, "edit")}>
                            <FaRegEdit className="text-xl" />
                          </button>
                          {/** Member edit button and model start */}

                          {/* You can open the modal using document.getElementById('ID').showModal() method */}

                          <dialog id="edit" className="modal">
                            <div className="modal-box bg-white dark:bg-black">
                              <button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#0c01a1] dark:text-[#73e9fe]" onClick={() => handleCloseModelButton('edit')}>✕</button>
                              <h2 className="text-2xl font-bold mb-4 text-center">Update Plan</h2>
                              <form onSubmit={handleEditTimelineButton}>
                                <div className='form-control'>
                                  <label htmlFor="text" className="label">Project Name</label>
                                  <input type="text" id="WorkspaceName" name="WorkspaceName" className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter Workspace Name" value={formData.workspace_Name}
                                    onChange={handleChange} />
                                </div>
                                <div className="form-control mb-4">
                                  <label htmlFor="name" className="label"> Name</label>
                                  <input type="text" id="name" name="name" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.name}
                                    onChange={handleChange} />

                                </div>
                                <div className="form-control mb-4">
                                  <label htmlFor="userType" className="label">Details</label>
                                  <textarea name="details" id="details" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.details}
                                    onChange={handleChange}></textarea>
                                </div>
                                <div className="form-control mb-4">
                                  <label htmlFor="userType" className="label">Start Date</label>
                                  <input type="date" name="startDate" id="startDate" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.start_Date}
                                    onChange={handleChange} />
                                </div>
                                <div className="form-control mb-4">
                                  <label htmlFor="userType" className="label">End Date</label>
                                  <input type="date" name="endDate" id="endDate" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.end_Date}
                                    onChange={handleChange} />
                                </div>
                                <div className="flex justify-between my-4">
                                  <button type="submit" className="text-lg border-none outline-none bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white rounded w-full px-4 py-3">Update</button>
                                </div>
                              </form>
                            </div>
                          </dialog>
                          {/** Member edit button and model end */}
                        </th>
                        <th>
                          <button className=" p-2 m-2" >
                            <MdDeleteForever className="text-xl cursor-pointer " onClick={() => handleDeleteTimeline(timeline.id)} />
                          </button>
                        </th>
                        <th>

                          <button className='px-4  py-2'>
                            <Link to={`/workspace/${id}/boards`} state={timeline} className="  text-xl cursor-pointer" title='Let&apos;s see the board' >
                              <TbListDetails />
                            </Link>
                          </button>
                        </th>



                        <td>
                          {!timeline?.scrum_id && <MdDeveloperBoard className='text-xl cursor-pointer' title='Create Board' onClick={() => handleOpenDialog(timeline, 'board')} />}


                        </td>
                        {/* <td>{(timeline?.assign?.id == user.userId) && <MdDeveloperBoard className='text-4xl cursor-pointer' onClick={() => handleOpenDialog(timeline, 'board')} />}</td> */}

                        {/** start create board modal for specefic timeline */}
                        <dialog id="board" className="modal">
                          <div className="modal-box bg-white dark:bg-black">
                            <button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#0c01a1] dark:text-[#73e9fe]" onClick={() => document.getElementById('board').close()}>✕</button>
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
                                  className="input input-bordered bg-white dark:bg-gray-950"
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
                                  className="input input-bordered bg-white dark:bg-gray-950"
                                />
                              </div>

                              <div className="flex justify-center mt-6">
                                <button className="border-none outline-none bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white rounded w-full px-4 py-2" type="submit">Create</button>
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
                    <button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#0c01a1] dark:text-[#73e9fe]" onClick={() => handleCloseModelButton("assign")}>✕</button>
                    <h2 className="font-bold text-2xl text-center my-3">Assign Member</h2>

                    <form onSubmit={handleAssignButton}>

                      <div className='form-control'>
                        <label htmlFor="email" className="label">Timeline Id</label>
                        <input type="text" id="timelineId" name="timelineId" value={formData.timelineId} className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter Email" />
                      </div>

                      <div className="form-control">
                        <label className="label" htmlFor="email">
                          <span className="label-text dark:text-[#73e9fe] text-[#0c01a1]">Email</span>
                        </label>
                        <select id="leaderEmail" name="leaderEmail" className="select select-bordered bg-slate-200 dark:bg-black">
                          {members?.filter(member => member.role === 'Team Leader').map((member, idx) => <option value={member.user_email} key={idx}>{member.user_email}</option>)}
                        </select>
                      </div>

                      <div className="flex justify-center mt-6">
                        <button className="border-none outline-none bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white rounded w-full px-4 py-2" type="submit">Assign Member</button>
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
          <div className='overflow-x-auto shadow-xl rounded-sm w-full mt-10'>
            <div>
              <button className='font-bold text-md px-2 py-1 rounded-sm bg-green-200 text-green-900'>In Progress</button>

              <div className="overflow-x-auto shadow-xl rounded-sm w-6/7">
                <table className="table">
                  {/* head */}
                  <thead className=' text-sm text-[#0c01a1] dark:text-[#73e9fe]'>
                    <tr className='text-center'>

                      <th>Plans</th>
                      <th>Assign</th>
                      <th>Status</th>
                      <th>Edit</th>
                      <th>Delete</th>
                      <th>Board</th>
                      <th> <button className='btn-ghost'>  </button>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}


                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Table data of in progress status */}

                    {data?.timelines ? (
                      data.timelines.filter(timeline => timeline.status === "In Progress").length > 0 ? (
                        data?.timelines?.filter(timeline => timeline.status === "In Progress").map((timeline, index) => (
                          <tr key={index} className="text-center">
                            <td>

                              <div className="font-bold text-center">{timeline.name.slice(0, 16)}</div>

                            </td>

                            <td>
                              {(timeline.assign) == null && <button onClick={() => handleOpenDialog(timeline, "assign")} className='rounded-full border border-[#0c01a1] px-1 py-1 '><IoPersonAddOutline className='text-lg cursor-pointer ' title="Assign" /></button>}

                              {timeline.assign && (
                                <div className='flex items-center justify-center gap-6' >
                                  <img src={timeline.assign.image} alt="image" className='w-8 h-8 rounded-full' />
                                  {/* <p className="font-semibold">{timeline.assign.first_name + " " + timeline.assign.last_name}</p> */}
                                </div>
                              )}

                            </td>
                            <td>
                              <div className="relative inline-block text-left">
                                <div >
                                  <button
                                    type="button"
                                    onClick={() => toggleDropdown(timeline.id)}
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-950 text-sm font-medium  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    id={`options-menu-${timeline.id}`}
                                    aria-haspopup="true"
                                    aria-expanded="true"
                                  >
                                    {selectedStatus[timeline.id] || 'In Progress'}
                                    <FaCaretSquareDown className="-mr-1 ml-2 h-3 w-3" />
                                  </button>
                                </div>

                                {isOpen[timeline.id] && (
                                  <div
                                    className="absolute right-6 bottom-0  w-44 rounded-sm shadow-lg bg-white dark:bg-gray-950 ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby={`options-menu-${timeline.id}`}
                                  >
                                    <div className="py-1 ml-6" role="none">

                                      <button
                                        onClick={() => handleStatusUpdateButton(timeline.id, 'To Do')}
                                        className="block px-2 py-1 text-sm "
                                        role="menuitem"
                                      >
                                        To Do
                                      </button>
                                      <button
                                        onClick={() => handleStatusUpdateButton(timeline.id, 'Testing')}
                                        className="block px-2 py-1 text-sm "
                                        role="menuitem"
                                      >
                                        Testing
                                      </button>
                                      <button
                                        onClick={() => handleStatusUpdateButton(timeline.id, 'Done')}
                                        className="block px-2 py-1 text-sm "
                                        role="menuitem"
                                      >
                                        Done
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </td>

                            <th>
                              <button className=" px-4  py-2" onClick={() => handleOpenDialog(timeline, "edit")}>
                                <FaRegEdit className="text-xl" />
                              </button>
                              {/** Member edit button and model start */}

                              {/* You can open the modal using document.getElementById('ID').showModal() method */}

                              <dialog id="edit" className="modal">
                                <div className="modal-box bg-white dark:bg-black">
                                  <button id="closeBtn" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#0c01a1] dark:text-[#73e9fe]" onClick={() => handleCloseModelButton('edit')}>✕</button>
                                  <h2 className="text-2xl font-bold mb-4 text-center">Update Plan</h2>
                                  <form onSubmit={handleEditTimelineButton}>
                                    <div className='form-control'>
                                      <label htmlFor="text" className="label">Project Name</label>
                                      <input type="text" id="WorkspaceName" name="WorkspaceName" className="input input-bordered bg-slate-200 dark:bg-black" placeholder="Enter Workspace Name" value={formData.workspace_Name}
                                        onChange={handleChange} />
                                    </div>
                                    <div className="form-control mb-4">
                                      <label htmlFor="name" className="label"> Name</label>
                                      <input type="text" id="name" name="name" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.name}
                                        onChange={handleChange} />

                                    </div>
                                    <div className="form-control mb-4">
                                      <label htmlFor="userType" className="label">Details</label>
                                      <textarea name="details" id="details" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.details}
                                        onChange={handleChange}></textarea>
                                    </div>
                                    <div className="form-control mb-4">
                                      <label htmlFor="userType" className="label">Start Date</label>
                                      <input type="date" name="startDate" id="startDate" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.start_Date}
                                        onChange={handleChange} />
                                    </div>
                                    <div className="form-control mb-4">
                                      <label htmlFor="userType" className="label">End Date</label>
                                      <input type="date" name="endDate" id="endDate" className="input input-bordered bg-slate-200 dark:bg-black" value={formData.end_Date}
                                        onChange={handleChange} />
                                    </div>
                                    <div className="flex justify-between my-4">
                                      <button type="submit" className="text-lg border-none outline-none bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white rounded w-full px-4 py-3">Update</button>
                                    </div>
                                  </form>
                                </div>
                              </dialog>
                              {/** Member edit button and model end */}
                            </th>
                            <th>
                              <button className=" p-2 m-2" >
                                <MdDeleteForever className="text-xl cursor-pointer " onClick={() => handleDeleteTimeline(timeline.id)} />
                              </button>
                            </th>
                            <th>

                              <button className='px-4  py-2'>
                                <Link to={`/workspace/${id}/boards`} state={timeline} className="  text-xl cursor-pointer" title='Let&apos;s see the board' >
                                  <TbListDetails />
                                </Link>
                              </button>
                            </th>



                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="text-center py-4 font-bold">
                            No timelines available with status "In Progress".Change the status !!!
                          </td>
                        </tr>
                      )
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center py-4">
                          Loading timelines...
                        </td>
                      </tr>
                    )}

                  </tbody>
                </table>

              </div>
            </div>
          </div>
          {/** End Progress component */}

          {/** Start Testing component */}
          <div className='overflow-x-auto shadow-xl rounded-sm w-full mt-10'>
            <div>
              <button className='font-bold text-md px-2 py-1 rounded-sm bg-red-200 text-red-900'>Testing</button>

              <div className="overflow-x-auto shadow-xl rounded-sm w-6/7">
                <table className="table">
                  {/* head */}
                  <thead className=' text-sm text-[#0c01a1] dark:text-[#73e9fe]'>
                    <tr className='text-center'>

                      <th>Plans</th>
                      <th>Assign</th>
                      <th>Status</th>
                      <th>Edit</th>
                      <th>Delete</th>
                      <th>Board</th>
                      <th> <button className='btn-ghost'>  </button>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}


                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Table data of testing status */}
                    {data?.timelines ? (
                      data.timelines.filter(timeline => timeline.status === "Testing").length > 0 ? (
                        data.timelines.filter(timeline => timeline.status === "Testing").map((timeline, index) => (
                          <tr key={index} className="text-center">
                            <td>
                              <div className="font-bold text-center">{timeline.name.slice(0, 16)}</div>
                            </td>

                            <td>
                              {timeline.assign == null ? (
                                <button
                                  onClick={() => handleOpenDialog(timeline, "assign")}
                                  className='rounded-full border border-[#0c01a1] px-1 py-1'
                                >
                                  <IoPersonAddOutline className='text-lg cursor-pointer' title="Assign" />
                                </button>
                              ) : (
                                <div className='flex items-center justify-center gap-6'>
                                  <img src={timeline.assign.image} alt="image" className='w-8 h-8 rounded-full' />
                                </div>
                              )}
                            </td>

                            <td>
                              <div className="relative inline-block text-left">
                                <button
                                  type="button"
                                  onClick={() => toggleDropdown(timeline.id)}
                                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-950 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                  id={`options-menu-${timeline.id}`}
                                  aria-haspopup="true"
                                  aria-expanded="true"
                                >
                                  {selectedStatus[timeline.id] || 'Testing'}
                                  <FaCaretSquareDown className="-mr-1 ml-2 h-3 w-3" />
                                </button>

                                {isOpen[timeline.id] && (
                                  <div
                                    className="absolute right-6 bottom-0 w-44 rounded-sm shadow-lg bg-white dark:bg-gray-950 ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby={`options-menu-${timeline.id}`}
                                  >
                                    <div className="py-1 ml-6" role="none">
                                      <button
                                        onClick={() => handleStatusUpdateButton(timeline.id, 'To Do')}
                                        className="block px-2 py-1 text-sm"
                                        role="menuitem"
                                      >
                                        To Do
                                      </button>
                                      <button
                                        onClick={() => handleStatusUpdateButton(timeline.id, 'In Progress')}
                                        className="block px-2 py-1 text-sm"
                                        role="menuitem"
                                      >
                                        In Progress
                                      </button>
                                      <button
                                        onClick={() => handleStatusUpdateButton(timeline.id, 'Done')}
                                        className="block px-2 py-1 text-sm"
                                        role="menuitem"
                                      >
                                        Done
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </td>

                            <th>
                              <button className="px-4 py-2" onClick={() => handleOpenDialog(timeline, "edit")}>
                                <FaRegEdit className="text-xl" />
                              </button>
                              <dialog id="edit" className="modal">
                                <div className="modal-box bg-white dark:bg-black">
                                  <button
                                    id="closeBtn"
                                    className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#0c01a1] dark:text-[#73e9fe]"
                                    onClick={() => handleCloseModelButton('edit')}
                                  >
                                    ✕
                                  </button>
                                  <h2 className="text-2xl font-bold mb-4 text-center">Update Plan</h2>
                                  <form onSubmit={handleEditTimelineButton}>
                                    <div className='form-control'>
                                      <label htmlFor="text" className="label">Project Name</label>
                                      <input
                                        type="text"
                                        id="WorkspaceName"
                                        name="WorkspaceName"
                                        className="input input-bordered bg-slate-200 dark:bg-black"
                                        placeholder="Enter Workspace Name"
                                        value={formData.workspace_Name}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="form-control mb-4">
                                      <label htmlFor="name" className="label"> Name</label>
                                      <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="input input-bordered bg-slate-200 dark:bg-black"
                                        value={formData.name}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="form-control mb-4">
                                      <label htmlFor="userType" className="label">Details</label>
                                      <textarea
                                        name="details"
                                        id="details"
                                        className="input input-bordered bg-slate-200 dark:bg-black"
                                        value={formData.details}
                                        onChange={handleChange}
                                      ></textarea>
                                    </div>
                                    <div className="form-control mb-4">
                                      <label htmlFor="userType" className="label">Start Date</label>
                                      <input
                                        type="date"
                                        name="startDate"
                                        id="startDate"
                                        className="input input-bordered bg-slate-200 dark:bg-black"
                                        value={formData.start_Date}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="form-control mb-4">
                                      <label htmlFor="userType" className="label">End Date</label>
                                      <input
                                        type="date"
                                        name="endDate"
                                        id="endDate"
                                        className="input input-bordered bg-slate-200 dark:bg-black"
                                        value={formData.end_Date}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="flex justify-between my-4">
                                      <button
                                        type="submit"
                                        className="text-lg border-none outline-none bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white rounded w-full px-4 py-3"
                                      >
                                        Update
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </dialog>
                            </th>
                            <th>
                              <button className="p-2 m-2">
                                <MdDeleteForever
                                  className="text-xl cursor-pointer"
                                  onClick={() => handleDeleteTimeline(timeline.id)}
                                />
                              </button>
                            </th>
                            <th>
                              <button className='px-4 py-2'>
                                <Link
                                  to={`/workspace/${id}/boards`}
                                  state={timeline}
                                  className="text-xl cursor-pointer"
                                  title="Let's see the board"
                                >
                                  <TbListDetails />
                                </Link>
                              </button>
                            </th>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="text-center py-4 font-bold">
                            No timelines available with status "Testing". Change the status !!!
                          </td>
                        </tr>
                      )
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center py-4">
                          Loading timelines...
                        </td>
                      </tr>
                    )}


                  </tbody>
                </table>

              </div>
            </div>
          </div>


          {/** Start Done component*/}
          <div className='overflow-x-auto shadow-xl rounded-sm w-full mt-10'>
            <div>
              <button className='font-bold text-md px-2 py-1 rounded-sm bg-gray-200 text-gray-900'>Done</button>

              <div className="overflow-x-auto shadow-xl rounded-sm w-6/7">
                <table className="table">
                  {/* head */}
                  <thead className=' text-sm text-[#0c01a1] dark:text-[#73e9fe]'>
                    <tr className='text-center'>

                      <th>Plans</th>
                      <th>Assign</th>
                      <th>Status</th>
                      <th>Edit</th>
                      <th>Delete</th>
                      <th>Board</th>
                      <th> <button className='btn-ghost'>  </button>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}


                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Table data of Done status */}
                    {data?.timelines ? (
                      data.timelines.filter(timeline => timeline.status === "Done").length > 0 ? (
                        data.timelines.filter(timeline => timeline.status === "Done").map((timeline, index) => (
                          <tr key={index} className="text-center">
                            <td>
                              <div className="font-bold text-center">{timeline.name.slice(0, 16)}</div>
                            </td>

                            <td>
                              {(timeline.assign == null) ? (
                                <button
                                  onClick={() => handleOpenDialog(timeline, "assign")}
                                  className='rounded-full border border-[#0c01a1] px-1 py-1'
                                >
                                  <IoPersonAddOutline className='text-lg cursor-pointer' title="Assign" />
                                </button>
                              ) : (
                                <div className='flex items-center justify-center gap-6'>
                                  <img src={timeline.assign.image} alt="image" className='w-8 h-8 rounded-full' />
                                </div>
                              )}
                            </td>

                            <td>
                              <div className="relative inline-block text-left">
                                <button
                                  type="button"
                                  onClick={() => toggleDropdown(timeline.id)}
                                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-950 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                  id={`options-menu-${timeline.id}`}
                                  aria-haspopup="true"
                                  aria-expanded="true"
                                >
                                  {selectedStatus[timeline.id] || 'Done'}
                                  <FaCaretSquareDown className="-mr-1 ml-2 h-3 w-3" />
                                </button>

                                {isOpen[timeline.id] && (
                                  <div
                                    className="absolute right-6 bottom-0 w-44 rounded-sm shadow-lg bg-white dark:bg-gray-950 ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby={`options-menu-${timeline.id}`}
                                  >
                                    <div className="py-1 ml-6" role="none">
                                      <button
                                        onClick={() => handleStatusUpdateButton(timeline.id, 'To Do')}
                                        className="block px-2 py-1 text-sm"
                                        role="menuitem"
                                      >
                                        To Do
                                      </button>
                                      <button
                                        onClick={() => handleStatusUpdateButton(timeline.id, 'In Progress')}
                                        className="block px-2 py-1 text-sm"
                                        role="menuitem"
                                      >
                                        In Progress
                                      </button>
                                      <button
                                        onClick={() => handleStatusUpdateButton(timeline.id, 'Testing')}
                                        className="block px-2 py-1 text-sm"
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
                              <button className="px-4 py-2" onClick={() => handleOpenDialog(timeline, "edit")}>
                                <FaRegEdit className="text-xl" />
                              </button>
                              <dialog id="edit" className="modal">
                                <div className="modal-box bg-white dark:bg-black">
                                  <button
                                    id="closeBtn"
                                    className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#0c01a1] dark:text-[#73e9fe]"
                                    onClick={() => handleCloseModelButton('edit')}
                                  >
                                    ✕
                                  </button>
                                  <h2 className="text-2xl font-bold mb-4 text-center">Update Plan</h2>
                                  <form onSubmit={handleEditTimelineButton}>
                                    <div className='form-control'>
                                      <label htmlFor="text" className="label">Project Name</label>
                                      <input
                                        type="text"
                                        id="WorkspaceName"
                                        name="WorkspaceName"
                                        className="input input-bordered bg-slate-200 dark:bg-black"
                                        placeholder="Enter Workspace Name"
                                        value={formData.workspace_Name}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="form-control mb-4">
                                      <label htmlFor="name" className="label"> Name</label>
                                      <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="input input-bordered bg-slate-200 dark:bg-black"
                                        value={formData.name}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="form-control mb-4">
                                      <label htmlFor="userType" className="label">Details</label>
                                      <textarea
                                        name="details"
                                        id="details"
                                        className="input input-bordered bg-slate-200 dark:bg-black"
                                        value={formData.details}
                                        onChange={handleChange}
                                      ></textarea>
                                    </div>
                                    <div className="form-control mb-4">
                                      <label htmlFor="userType" className="label">Start Date</label>
                                      <input
                                        type="date"
                                        name="startDate"
                                        id="startDate"
                                        className="input input-bordered bg-slate-200 dark:bg-black"
                                        value={formData.start_Date}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="form-control mb-4">
                                      <label htmlFor="userType" className="label">End Date</label>
                                      <input
                                        type="date"
                                        name="endDate"
                                        id="endDate"
                                        className="input input-bordered bg-slate-200 dark:bg-black"
                                        value={formData.end_Date}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="flex justify-between my-4">
                                      <button
                                        type="submit"
                                        className="text-lg border-none outline-none bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white rounded w-full px-4 py-3"
                                      >
                                        Update
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </dialog>
                            </th>
                            <th>
                              <button className="p-2 m-2">
                                <MdDeleteForever
                                  className="text-xl cursor-pointer"
                                  onClick={() => handleDeleteTimeline(timeline.id)}
                                />
                              </button>
                            </th>
                            <th>
                              <button className='px-4 py-2'>
                                <Link
                                  to={`/workspace/${id}/boards`}
                                  state={timeline}
                                  className="text-xl cursor-pointer"
                                  title="Let's see the board"
                                >
                                  <TbListDetails />
                                </Link>
                              </button>
                            </th>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="text-center py-4 font-bold">
                            No plans available with status "Done". Change the status !!!
                          </td>
                        </tr>
                      )
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center py-4">
                          Loading timelines...
                        </td>
                      </tr>
                    )}


                  </tbody>
                </table>

              </div>
            </div>
          </div>
          {/** End Done component*/}
        </div>
      )
      }


    </div>
  );
};

export default Plans;