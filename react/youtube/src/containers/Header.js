import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Search from "../components/Search";
import { toggle } from "../store/sidebarSlice";

import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../store/searchSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchCache = useSelector((store) => store.search);

    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const toggleSidebar = () => dispatch(toggle());

    const getSearchSuggestions = async () => {
        console.log("Calling getSearchSuggestion: " + searchText);
        const data = await fetch(YOUTUBE_SEARCH_API + searchText);
        const jsonData = await data.json();
        // console.log(jsonData);
        setSuggestions(jsonData[1]);
        setShowSuggestions(true);
        dispatch(
            cacheResults({
                [searchText]: jsonData[1],
            })
        );
    };

    console.log("searchCache: ", searchCache);

    useEffect(() => {
        //debounce
        const timer = setTimeout(() => {
            if (searchCache[searchText]) {
                setSuggestions(searchCache[searchText]);
            } else {
                getSearchSuggestions();
            }
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [searchText]);

    // console.log(searchText);

    return (
        <div className="">
            <header className="bg-white-100 p-6 flex justify-between shadow-lg">
                <div className="flex items-center">
                    <GiHamburgerMenu
                        onClick={() => toggleSidebar()}
                        className="hover:cursor-pointer"
                    />
                    <img
                        fetchPriority="high"
                        onClick={() => navigate("/")}
                        className="flex mt-3 h-8 w-36 pl-4 items-center hover:cursor-pointer"
                        alt="youtube-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
                    />
                </div>
                <Search
                    searchText={searchText}
                    setSearchText={setSearchText}
                    suggestions={suggestions}
                    showSuggestions={showSuggestions}
                    setShowSuggestions={setShowSuggestions}
                />
                <div className="flex items-center">
                    <FaUser />
                </div>
            </header>
        </div>
    );
};

export default Header;
