import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const activeSidebar = useSelector((store) => store.sidebar.active);
    console.log(`activeSidebar: `, activeSidebar);

    return (
        <div
            className={`w-[300px] p-2 border border-gray-50 ${
                activeSidebar ? "" : "hidden"
            }`}
        >
            <div className="w-[300px]">
                <ul className="border-b border-b-gray-100 p-2 my-3">
                    <li className="mt-2">Home</li>
                    <li className="mt-2">Shorts</li>
                    <li className="mt-2">Subscription</li>
                    <li className="mt-2">Music</li>
                </ul>
            </div>

            <div className="w-[300px]">
                <h2 className="font-bold text-xl mt-2">Subscriptions</h2>
                <ul className="border-b border-b-gray-100 p-2 my-3">
                    <li className="mt-2">Free code camp</li>
                    <li className="mt-2">Ndtv</li>
                    <li className="mt-2">Times</li>
                    <li className="mt-2">Code evolve</li>
                </ul>
            </div>

            <div className="w-[300px]">
                <h2 className="font-bold text-xl mt-2">Explore</h2>
                <ul className="border-b border-b-gray-100 p-2 my-3">
                    <li className="mt-2">Trending</li>
                    <li className="mt-2">Sports</li>
                    <li className="mt-2">Live</li>
                    <li className="mt-2">News</li>
                    <li className="mt-2">Music</li>
                </ul>
            </div>

            <div className="w-[300px]">
                <h2 className="font-bold text-xl mt-2">More from Youtube</h2>
                <ul className="border-b border-b-gray-100 p-2 my-3">
                    <li className="mt-2">Trending</li>
                    <li className="mt-2">Sports</li>
                    <li className="mt-2">Live</li>
                    <li className="mt-2">News</li>
                    <li className="mt-2">Music</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
