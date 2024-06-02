import React, { useState } from "react";
import { BiCollapseVertical, BiDownArrowCircle, BiUpArrowCircle } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdAddTask, MdDeleteForever } from "react-icons/md";
import CreateTask from "../CreateTask";
import EditDeleteTask from "../../Tasks/EditDeleteTask";
import BoardDelete from "./BoardDelete";

const NewBoard = () => {
    const [showTasks, setShowTasks] = useState(false);

    const handleToggle = () => {
        setShowTasks(!showTasks);
    };

    return (
        <div className="overflow-x-auto shadow-xl rounded w-full">
            <table className="table w-full">
                <thead>
                    <tr className="text-center text-sm text-[#2c01a1] dark:text-[#73e9fe]">
                        <th> Plans Name </th>
                        <th>Board Name</th>

                        <th>Assigned </th>

                        <th>Delete</th>
                        <th>Add Task</th>
                        <th>Chat</th>
                        {/* <th>All Tasks</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center text-sm text-black dark:text-white">
                        <td>Plan Name</td>
                        <td>Board Name</td>
                        {/* <td>status</td> */}
                        <td>assigned person</td>

                        <td>
                            <BoardDelete />
                            {/* <button className="mx-4">
                                <MdDeleteForever className="text-xl" />
                            </button> */}
                        </td>
                        <td>
                            <CreateTask />
                            {/* <button className="mx-4">
                                <MdAddTask className="text-xl" />
                            </button> */}
                        </td>
                        <td>
                            <button className="mx-4">
                                <IoChatbubblesOutline className="text-xl" />
                            </button>
                        </td>
                        <td>
                            <button onClick={handleToggle} className="mx-4 px-2 py-1 rounded">
                                {showTasks ? <BiCollapseVertical classname="text-xl" /> : <HiMiniChevronUpDown className="text-xl" />}
                            </button>
                        </td>
                       
                    </tr>
                    {showTasks && (
                        <tr className="text-center text-sm text-black dark:text-white w-full ">
                            <td colSpan="8" className="w-full px-10">
                                <div className="overflow-x-auto w-full shadow-xl rounded">
                                    <table className="table w-full">
                                        <thead>
                                            <tr className="text-center text-sm text-[#2c01a1] dark:text-[#73e9fe] bg-cyan-50 dark:bg-gray-900">
                                                <th>Task Name</th>
                                                <th>Assigned To</th>
                                                <th>Status</th>
                                                <th>Type</th>
                                                <th>Priority</th>
                                                <th>
                                                   

                                                </th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-center text-sm text-black dark:text-white">
                                                <td>Task Name</td>
                                                <td>assigned person</td>
                                                <td>Status</td>
                                                <td>I don't know what type it is, ask nazim vai</td>
                                                <td>Priority</td>
                                                <td>
                                                    {/* <button className="mx-4">
                                                        <FaRegEdit className="text-xl" />
                                                    </button> */}
                                                    <EditDeleteTask />
                                                </td>
                                            </tr>
                                            {/* Add more tasks as needed */}
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default NewBoard;
