import React from "react";

const ChatComment = ({ name, message }) => {
    return (
        <div className="w-full pl-3 flex flex-row">
            <img
                className="h-8"
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className="p-1 font-bold text-lg">
                {name}
                <span>:</span>
            </div>
            <p className="p-1 wrap-break-word text-lg">{message}</p>
        </div>
    );
};

export default ChatComment;
