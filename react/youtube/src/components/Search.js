import React from "react";

import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = () => {
    return (
        <div className="w-5/12 flex items-center">
            <input
                type="text"
                placeholder="Search"
                className="p-2 border border-gray-300 w-full rounded-l-2xl"
            />
            <div className="p-3 border border-gray-300 rounded-r-2xl">
                <FaMagnifyingGlass />
            </div>
        </div>
    );
};

export default Search;
