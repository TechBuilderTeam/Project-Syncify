import { useState, useEffect, useRef } from "react";
import { IoChatbubblesOutline, IoClose } from "react-icons/io5";

const ChatUI = ({ boardId, User, board }) => {
    console.log({ boardId, User, board });
    const [showChat, setShowChat] = useState(false);
    const [userName, setUserName] = useState(null);
    const [userGroup, setUserGroup] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const ws = useRef(null);

    const handleChat = (groupId, userName) => {
        localStorage.setItem('userName', userName);
        localStorage.setItem('userGroup', groupId);
        setUserName(userName);
        setUserGroup(groupId);
    };
    
    console.log({messages})
    const handleToggleChat = (groupId, userName) => {
        setShowChat(!showChat);
        handleChat(groupId, userName);
    };


    const loadMessage=()=>{
        fetch(` https://projectsyncifyapi.onrender.com/api/v1/chat/${userGroup}/`)
        .then((res) =>res.json())
        .then((data) =>setMessages(data))
        .catch((err) =>console.log(err));
    };

    


    useEffect(() => {
        if (userName && userGroup) {
            ws.current = new WebSocket(`wss://projectsyncifyapi.onrender.com/ws/v1/chat/${userGroup}/`);
            ws.current.onopen = () => console.log('WebSocket connected...');
            loadMessage()
            console.log(messages)
            ws.current.onmessage = (event) => {
                const data = JSON.parse(event.data);
                console.log({data})
                setMessages((prevMessages) => [...prevMessages, data]);
            };
            ws.current.onerror = (event) => console.log('WebSocket error', event);
            ws.current.onclose = (event) => console.log('WebSocket closed', event);

            return () => {
                if (ws.current) {
                    ws.current.close();
                }
            };
        }
    }, [userName, userGroup]);

    const handleMessageSend = () => {
        console.log({ userName, userGroup });

        ws.current.send(JSON.stringify({
            'user': userName,
            'message': newMessage
        }));
        setNewMessage('');
    };

    return (
        <div className="">
            <button onClick={() => handleToggleChat(boardId, User?.userId)} className="font-bold px-4 py-2 rounded-md">
                <IoChatbubblesOutline className="text-2xl" title="Chat" />
            </button>
            {showChat && (
                <div className="fixed bottom-10 right-4 w-96 h-96 bg-white dark:bg-gray-950 shadow-lg rounded-lg flex flex-col">
                <div className="flex items-center justify-between p-4 bg-[#0154a1] text-white rounded-t-lg">
                    <h3 className="text-lg font-semibold">{board.name}</h3>
                    <button onClick={() => setShowChat(false)}>
                        <IoClose className="text-2xl" />
                    </button>
                </div>
                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="flex flex-col space-y-2">
                        {messages.map((message, index) => (
                            // <div
                            //     key={index}
                            //     className={`p-2 rounded-md ${message.user.id === userName ? 'self-end bg-[#0154a1] text-white' : 'self-start bg-gray-200'}`}
                            // >
                            //     <span style={{ color: message.user.id === userName ? 'green' : 'red' }}>{message.user.first_name}</span>{message.message}
                            // </div>

<div
    key={index}
    className={`p-2 rounded-md ${message.user?.id === userName ? 'self-end bg-[#0154a1] text-white' : (message.user === userName) ? 'self-end bg-[#0154a1] text-white' : 'self-start bg-gray-200'}`}
>
    
    <div className="flex items-center">
        <img
            src={message.user.image ? `${message.user.image}` : `${message.user_image}`}
            alt={message.user_first_name}
            className="w-4 h-4 rounded-full mr-2"
        />
        <span style={{ color: message.user.id == userName ? 'green' : {color: message.user === userName ? "green" :'red' }}}>
            {message.user_first_name ? message.user_first_name : message.user.first_name  }
        </span>
    </div>
    <div>{message.message}</div>
</div>

                        ))}
                    </div>
                </div>
                <div className="p-4 flex items-center justify-center">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-800"
                    />
                    <button onClick={handleMessageSend} className="ml-2 bg-[#0154a1] text-white px-4 py-2 rounded-md">Send</button>
                </div>
            </div>
            )}
        </div>
    );
};

export default ChatUI;
