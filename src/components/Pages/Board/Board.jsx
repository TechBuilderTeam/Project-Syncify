
import NewBoard from "./NewBoard/NewBoard";

const Board = () => {
   

    return (
        <div className="h-screen">

            <div className=" py-2">
                <div className="flex justify-between items-center pb-2">
                    <h1 className="text-3xl   pb-2 font-semibold ">
                        Board
                    </h1>
                    
                </div>

                <hr className="w-full h-1 bg-gradient-to-r from-[#2c01a1] to-[#73e9fe] " />
                <p className="text-sm  font-semibold mt-2 text-black dark:text-white  mb-10">
                    To ensure seamless progress tracking and maintenance of your project, check out the boards into your project structure. Assign task and distinct roles to each member to streamline collaboration and enhance accountability throughout the project lifecycle. Also chat with your team members.
                </p>
            </div>   

    <NewBoard />
        </div >
    );
};

export default Board;
