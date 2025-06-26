import React from "react";
// import { useNavigate } from "react-router-dom";

const Card = ({ video }) => {
    const { snippet, id, statistics } = video;
    const { thumbnails } = snippet;
    const { viewCount, likeCount } = statistics;
    // console.log(statistics);
    // console.log(snippet);

    // const navigate = useNavigate();

    // const routeToWatchPage = () => {
    //     navigate("/watch/v=" + id);
    // };

    return (
        <div
            className="border border-gray-100 rounded-2xl m-4 wrap-break-word w-[320px] h-[320px] hover:cursor-pointer"
            // onClick={() => routeToWatchPage()}
        >
            {/* <div> */}
            <img
                src={thumbnails?.high?.url}
                className="h-[203px] w-[320px] rounded-t-2xl "
            />
            {/* </div> */}
            <div className="font-bold text-xl pl-1 wrap-break-word">
                {snippet?.channelTitle}
            </div>
            <div className="pl-1">{viewCount}</div>
            <div className="pl-1 font-bold">
                Likes: <span className="font-normal">{likeCount}</span>
            </div>
        </div>
    );
};

export default Card;
