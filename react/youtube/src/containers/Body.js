import React, { useEffect, useState } from "react";

import CardList from "../components/CardList";
import Shimmer from "../components/Shimmer";
import FilterList from "../components/FilterList";

import { YOUTUBE_VIDEOS_URL } from "../utils/constants";

const Body = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetch(YOUTUBE_VIDEOS_URL);
            const json = await data.json();
            // console.log(`Json: `, json);
            setVideos(json.items);
        };
        getData();
    }, []);

    return (
        <div className="min-h-screen overflow-y-scroll m-4">
            <FilterList />
            {videos?.length === 0 && <Shimmer />}
            <CardList videos={videos} />
        </div>
    );
};

export default Body;
