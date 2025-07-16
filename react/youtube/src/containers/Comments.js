import React from "react";

import CommentList from "../components/CommentList";

import data from "../utils/comments.json";

const Comments = () => {
    return (
        <div className="w-[1200px] h-auto m-2">
            <h2 className="p-2 text-2xl font-bold">Comments: </h2>
            <CommentList comments={data} />
        </div>
    );
};

export default Comments;
