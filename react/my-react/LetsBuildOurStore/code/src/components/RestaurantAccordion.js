import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

import ItemList from "./ItemList";

const ResAccordion = (props) => {
    console.log("cateogry", props.category);
    const { category, showItems, setOpenIndex } = props;

    const handleToggle = () => {
        setOpenIndex();
    };

    return (
        /** Header and Body */
        <div className="mt-2 w-full">
            <div className="my-6 py-4 bg-slate-50 shadow-lg">
                <div
                    className="flex justify-between cursor-pointer px-2"
                    onClick={() => handleToggle()}
                >
                    <h1 className="text-lg font-bold">
                        {category.title} ({category.itemCards.length})
                    </h1>
                    <GoChevronDown />
                </div>
                {showItems && <ItemList items={category?.itemCards} />}
            </div>
        </div>
    );
};

export default ResAccordion;
