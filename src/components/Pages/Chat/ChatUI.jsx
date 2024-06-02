import { useState } from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const ChatUI = () => {
    const [showChat, setShowChat] = useState(false);

    const handleToggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <div className="">
            <button onClick={handleToggleChat} className="font-bold px-4 py-2 rounded-md ">
                <IoChatbubblesOutline className="text-2xl" />
            </button>
            {showChat && (
                <div className="fixed bottom-10 right-4 w-96 h-96 bg-white dark:bg-gray-950 shadow-lg rounded-lg flex flex-col">
                    <div className="flex items-center justify-between p-4  bg-[#0154a1]  text-white  rounded-t-lg">
                        <h3 className="text-lg font-semibold">Chat</h3>
                        <button onClick={handleToggleChat}>
                            <IoClose className="text-2xl" />
                        </button>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto">
                        <div className="flex flex-col space-y-2">
                            {/* Chat messages will go here */}
                            <div className="self-start bg-gray-200 p-2 rounded-md dark:bg-gray-800">
                                Hello! How can I help you?
                            </div>
                            <div className="self-end  bg-[#0154a1]  text-white p-2 rounded-md">
                                I have a question about your services.
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatUI;
