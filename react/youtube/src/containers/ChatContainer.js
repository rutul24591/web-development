import React, { useEffect, useState } from "react";
import LiveChat from "../components/LiveChat";
import { useDispatch, useSelector } from "react-redux";

import { addChat } from "../store/chatSlice";
import nameList from "../utils/names.json";
import messageList from "../utils/messageList.json";

const ChatContainer = () => {
    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    const generateName = () => {
        return nameList[Math.floor(Math.random() * nameList.length)];
    };
    const generateMessage = () => {
        return messageList[Math.floor(Math.random() * messageList.length)];
    };

    useEffect(() => {
        //API polling
        const interval = setInterval(() => {
            dispatch(
                addChat({
                    name: generateName(),
                    message: generateMessage(),
                })
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-[640px] max-h-full flex flex-col-reverse border border-gray-200 rounded-xl mx-2">
            <form
                className="w-full p-2 border-y border-gray-200 rounded-b-xl"
                onSubmit={(e) => {
                    e.preventDefault();

                    dispatch(
                        addChat({
                            name: "Rutul Amin",
                            message: liveMessage,
                        })
                    );
                    setLiveMessage("");
                }}
            >
                <div className="flex flex-row justify-between">
                    <input
                        className="px-2 w-96 border border-gray-100 outline-none"
                        type="text"
                        placeholder="Send message to chat"
                        value={liveMessage}
                        onChange={(event) => {
                            setLiveMessage(event.target.value);
                        }}
                    />
                    <button className="px-2 mx-2 bg-green-100">Send</button>
                </div>
            </form>
            <LiveChat chatMessages={chatMessages} />
        </div>
    );
};

export default ChatContainer;
