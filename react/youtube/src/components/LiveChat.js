import React, { useState } from "react";

import ChatComment from "./ChatComment";

const LiveChat = ({ chatMessages }) => {
    // console.log("chatMessages:", chatMessages);
    return (
        <div className="p-2 h-[600px] flex flex-col-reverse overflow-y-auto">
            {chatMessages?.map((chat, index) => {
                return (
                    <ChatComment
                        key={index}
                        message={chat?.message}
                        name={chat?.name || "abc"}
                    />
                );
            })}
        </div>
    );
};

export default LiveChat;
