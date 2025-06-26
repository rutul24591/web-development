import React from "react";
import { Link } from "react-router-dom";

import CardItem from "./Card";

const CardList = ({ videos }) => {
    // console.log("videos in cardList", videos);
    return (
        <div className="flex flex-wrap justify-start items-center">
            {videos.map((video) => {
                return (
                    <Link key={video.id} to={"/watch?v=" + video.id}>
                        <CardItem
                            key={video.id.videoId || video.id}
                            video={video}
                        />
                    </Link>
                );
            })}
        </div>
    );
};

export default CardList;
