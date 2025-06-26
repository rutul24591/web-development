import React from "react";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";

import Search from "./Search";
import { toggle } from "../store/sidebarSlice";

const Header = () => {
    const dispatch = useDispatch();

    const toggleSidebar = () => dispatch(toggle());

    return (
        <div className="">
            <header className="bg-white-100 p-6 flex justify-between shadow-lg">
                <div className="flex items-center">
                    <GiHamburgerMenu
                        onClick={() => toggleSidebar()}
                        className="hover:cursor-pointer"
                    />
                    <img
                        className="flex mt-3 h-8 w-36 pl-4 items-center"
                        alt="youtube-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
                    />
                </div>
                <Search />
                <div className="flex items-center">
                    <FaUser />
                </div>
            </header>
        </div>
    );
};

export default Header;
