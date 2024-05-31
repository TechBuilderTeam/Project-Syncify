import { useState } from "react";


const CreateBoard = () => {
    const [boardName, setBoardName] = useState('');

    const handleBoardNameChange = async (e) => {
        e.preventDefault()

        const newBoard = {
            name: '',
            details: '',
        }
        newBoard.name = e.target.name.value;
        newBoard.details = e.target.details.value;

      

    };

    return (
        <div className="pt-10">
            <button id="my_modal_3"  className="px-4 py-2">Create Board</button>

            <div className="modal" id="my_modal_3">
                <div className="modal-box">
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
                            <input type="text" name="details" placeholder="Write Board Details" className="input input-bordered" />
                        </div>
                    </form>
                    <div className="modal-action">
                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').close()}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBoard;