import React from "react";

const filters = [
    "All",
    "Music",
    "Cricket",
    "Football",
    "News",
    "Live Stream",
    "AI",
    "Programming",
    "Wealth",
];
const FilterList = () => {
    return (
        <div className="m-2 p-2">
            {filters.map((item, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => {}}
                        className="bg-gray-200 border border-gray-200 p-2 mx-2 rounded-2xl min-w-20 hover:bg-black hover:text-white hover:cursor-pointer"
                    >
                        {item}
                    </button>
                );
            })}
        </div>
    );
};

export default FilterList;
