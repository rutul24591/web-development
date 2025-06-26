import React from "react";

import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = ({
    setSearchText,
    searchText,
    suggestions,
    showSuggestions,
    setShowSuggestions,
}) => {
    return (
        <div className="w-5/12 flex items-center">
            <div className="w-full flex items-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="p-2 border border-gray-300 w-full rounded-l-2xl"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />
                <div className="p-3 border border-gray-300 rounded-r-2xl">
                    <FaMagnifyingGlass />
                </div>
            </div>
            {showSuggestions && suggestions?.length > 0 && (
                <div className="w-4/12 h-auto absolute top-16 mt-2 bg-white border border-gray-200 rounded-xl pt-2">
                    {suggestions.map((item, index) => {
                        return (
                            <p
                                className="py-1 px-2 hover:cursor-pointer hover:bg-gray-200"
                                key={index}
                            >
                                {item}
                            </p>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Search;
