import React from "react";
import { FaUser } from "react-icons/fa";

const Comment = (props) => {
    const { name, id, comment, replies } = props.comment;
    return (
        <div className="flex flex-row items-center">
            <div className="p-2 w-10">
                <FaUser />
            </div>
            <div className="flex-col flex-wrap p-2 ml-2">
                <p className="text-lg font-bold">{name}</p>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Comment;
