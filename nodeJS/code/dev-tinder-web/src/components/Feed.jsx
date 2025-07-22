import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";
import UserCard from "./UserCard";

import { BACKEND_URL } from "../utils/constants";

const Feed = () => {
    const dispatch = useDispatch();
    const feed = useSelector((store) => store.feed);

    const getFeed = async () => {
        try {
            const feed = await axios.get(BACKEND_URL + "/feed", {
                withCredentials: true,
            });
            dispatch(addFeed(feed.data.data));
            console.log(feed?.data?.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        if (!feed) {
            getFeed();
        }
    });
    if (!feed) return;

    if (feed.length <= 0) {
        return (
            <h1 className="flex justify-center m-52 text-3xl text-yellow-400">
                No more users!
            </h1>
        );
    }

    return (
        feed && (
            <div className="flex justify-center gap-4 my-5 min-h-screen h-[100%]">
                {/* {feed &&
                    feed?.map((user) => (
                        <UserCard key={user._id} user={user} />
                    ))} */}
                {feed && <UserCard key={UserCard._id} user={feed[0]} />}
            </div>
        )
    );
};

export default Feed;
