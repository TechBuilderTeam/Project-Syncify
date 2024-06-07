import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CreateBoard = ({ timelineData }) => {
    const [boardName, setBoardName] = useState('');
    const { id } = timelineData || {};

    const handleOpenModal = () => {
        document.getElementById('my_modal_3').showModal();
    };

    const handleCloseModal = () => {
        document.getElementById('my_modal_3').close();
    };

    const handleBoardNameChange = async (e) => {
        e.preventDefault();

        const newBoard = {
            timeline_name: '',
            name: '',
            details: '',
        };

        newBoard.timeline_name = id;
        newBoard.name = e.target.name.value;
        newBoard.details = e.target.details.value;

        console.log({ newBoard });

        const result = await fetch('https://projectsyncifyapi.onrender.com/workspace/scrum/create/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newBoard),
        });

        const data = await result.json();
        console.log({ data });

        if (data.insertedId) {
            toast.success('Board Added Successfully');
            handleCloseModal();
        }
    };

    return (
        <div className="pt-10">
            <button onClick={handleOpenModal} className="px-4 py-2 bg-red-300">Create Board</button>
            <dialog className="modal" id="my_modal_3">
                <div>
                    <div className="modal-box">
                        <button
                            id="closeBtn"
                            className="btn btn-sm btn-circle absolute right-2 top-2 bg-white dark:bg-black text-[#0c01a1] dark:text-[#73e9fe]"
                            onClick={handleCloseModal}
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-lg">Create Board</h3>
                        <form onSubmit={handleBoardNameChange}>
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
                            <div className="modal-action">
                                <button type="submit" className="b">
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CreateBoard;
