import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import { close } from "../store/sidebarSlice";

const Watch = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    console.log(searchParams);
    console.log(searchParams?.get("v"));

    useEffect(() => {
        dispatch(close());
    }, []);

    return (
        <div className="flex">
            <div className="video-container">
                <iframe
                    height={640}
                    width={1200}
                    tabIndex="-1"
                    className="video-stream html5-main-video"
                    controlsList="nodownload"
                    allowFullScreen
                    src={
                        "https://www.youtube.com/embed/" + searchParams.get("v")
                    }
                    // src="blob:https://www.youtube.com/8bb690d2-2d11-4e7c-a2f3-b264e218fa77"
                    // style="width: 640px; height: 360px; left: 0px; top: 0px; -webkit-user-select: text; -webkit-user-drag: auto;"
                ></iframe>
            </div>
        </div>
    );
};

export default Watch;
