import React from 'react';

const singleShowTask = () => {
    return (
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
    );
};

export default singleShowTask;