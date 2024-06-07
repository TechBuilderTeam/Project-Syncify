import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiChatSmile3Line } from "react-icons/ri";

const ChatOnetoOne = ({user, profile}) => {
    console.log({user, profile})
    const [showChat, setShowChat] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userGroup, setUserGroup] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const ws = useRef(null);

    const handleChat = (userId, otherId) => {
        let groupId;

        if (userId > otherId) {
            // Concatenating the user IDs in ascending order to form a group ID
            groupId = otherId.toString() + "oto" + userId.toString();
        } else {
            // Concatenating the user IDs in descending order to form a group ID
            groupId = userId.toString() + "oto" + otherId.toString();
        }

        setUserId(userId)
        setUserGroup(groupId)
    };
    
    console.log({messages})
    const handleToggleChat = (groupId, userId) => {
        setShowChat(!showChat);
        handleChat(groupId, userId);
    };


    const loadMessage=()=>{
        fetch(`https://projectsyncifyapi.onrender.com/api/v1/chat/${userGroup}/`)
        .then((res) =>res.json())
        .then((data) =>{
            
            console.log({data})
            setMessages(data)})
        .catch((err) =>console.log(err));
    };

    


    useEffect(() => {
        if (userId && userGroup) {
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
    }, [userId, userGroup]);

    const handleMessageSend = () => {
        console.log({ userId, userGroup });

        ws.current.send(JSON.stringify({
            'user': userId,
            'message': newMessage
        }));
        setNewMessage('');
    };

    return (
        <div className="">
            <button onClick={() => handleToggleChat(user?.userId, profile?.id)} className="font-bold px-4 py-4 rounded-full bg-[#0154a1] text-white ">
                <RiChatSmile3Line className="text-4xl rounded-full "  title="Chat Now"/>
            </button>
            {showChat && (
                <div className="fixed bottom-10 right-4 w-96 h-96 bg-white dark:bg-gray-950 shadow-lg rounded-lg flex flex-col">
                    <div className="flex items-center justify-between p-4  bg-[#0154a1]  text-white  rounded-t-lg">
                        <div className="flex items-center">
                            <img
                            src={profile?.image ? `${profile?.image}` : `${profile?.image}`}
                            alt={profile?.get_full_name}
                            className="w-6 h-6 rounded-full mr-2"
                            />
                            <span className="text-lg font-semibold">
                            {profile?.get_full_name}
                            </span>
                        </div>
                        <button onClick={handleToggleChat}>
                            <IoClose className="text-2xl" />
                        </button>
                    </div>
<div className="flex-1 p-4 overflow-y-auto">
    <div className="flex flex-col space-y-2">
        {/* Chat messages will go here */}
        <div className="flex flex-col space-y-2">
    {messages.map((message, index) => (
            <div
            key={index}
            className={`p-2 rounded-md ${message.user?.id === userId ? 'self-end bg-[#0154a1] text-white' : (message.user === userId) ? 'self-end bg-[#0154a1] text-white' : 'self-start bg-gray-200'}`}
            >

            <div className="flex items-center">
            <img
            src={message.user.image ? `${message.user.image}` : `${message.user_image}`}
            alt={message.user_first_name}
            className="w-4 h-4 rounded-full mr-2"
            />
            <span style={{ color: message.user.id == userId ? 'green' : {color: message.user === userId ? "green" :'red' }}}>
            {message.user_first_name ? message.user_first_name : message.user.first_name  }
            </span>
            </div>
            <div>{message.message}</div>
            </div>
    ))}
        </div>
    </div>
</div>
                    <div className="p-4  flex items-center justify-center">
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

export default ChatOnetoOne;