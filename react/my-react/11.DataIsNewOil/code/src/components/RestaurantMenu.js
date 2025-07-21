import { useState } from "react";

import ResAccordion from "./RestaurantAccordion";

const RestaurantMenu = (props) => {
    const { resDetails } = props;
    const [openIndex, setOpenIndex] = useState(null);

    console.log(resDetails);
    const { name, cuisines, costForTwoMessage } =
        resDetails?.cards[2]?.card?.card?.info;

    const { itemCards } =
        resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card;

    const categories =
        resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (item) =>
                item?.card?.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    return (
        <div className="text-left p-[15px] mx-auto w-6/12">
            <div className="mx-auto p-2">
                <h1 className="font-extrabold text-4xl my-4">{name}</h1>
                <p className="font-bold text-lg">
                    {cuisines.join(", ")} - {costForTwoMessage}
                </p>
            </div>
            {categories?.map((category, index) => {
                return (
                    <ResAccordion
                        key={`${index}_${category?.card?.card?.title}`}
                        category={category?.card?.card}
                        showItems={index === openIndex ? true : false}
                        setOpenIndex={() =>
                            index === openIndex
                                ? setOpenIndex(null)
                                : setOpenIndex(index)
                        }
                    />
                );
            })}
        </div>
    );
};

export default RestaurantMenu;
