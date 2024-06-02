import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const BoardDelete = () => {
    const handleBoardDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this board!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your board has been deleted.',
                    'success'
                )
            }
        });
    }
    return (
        <div>
            <button className="  font-bold px-4 py-2 rounded-md" onClick={() => handleBoardDelete()}>  <MdDeleteForever className="text-xl" /></button>
        </div>
    );
};

export default BoardDelete;