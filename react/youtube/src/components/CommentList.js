import React, { useState } from "react";

import Comment from "./Comment";

const CommentList = ({ comments }) => {
    console.log(comments);
    const [showReplies, setShowReplies] = useState(false);
    return (
        <div className="ml-4">
            {comments?.map((comment, index) => (
                <div key={comment?.id || index} className="">
                    <Comment comment={comment} />
                    {!showReplies && comment?.replies?.length > 0 && (
                        <p
                            className="text-blue-900 text-sm ml-7 pl-7"
                            onClick={() => setShowReplies(true)}
                        >
                            Show replies
                        </p>
                    )}
                    {showReplies && (
                        <p
                            className="text-blue-900 text-sm ml-7 pl-7"
                            onClick={() => setShowReplies(false)}
                        >
                            Collapse replies
                        </p>
                    )}
                    {showReplies && comment?.replies?.length > 0 && (
                        <div className="pl-5 border-l border-l-black ml-6">
                            <CommentList comments={comment.replies} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CommentList;
