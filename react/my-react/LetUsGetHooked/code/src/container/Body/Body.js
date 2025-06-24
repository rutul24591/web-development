import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

import RestaurantCard from "../../components/RestaurantCard";

const RestaurantsContainer = ({ restaurants }) => {
    return (
        <div className="restaurants-card-container">
            {restaurants?.map((restaurant, _index) => {
                return (
                    <RestaurantCard
                        key={restaurant?.id}
                        restaurant={restaurant}
                    />
                );
            })}
        </div>
    );
};

const Body = (props) => {
    const { restaurants } = props;
    // React hooks are normal JS function with enhance capabilities.
    // Whenever the state variable changes, react renders the component.
    // 1. useState - Used to generate super powered state variables
    // 2. useEffect - Used to handle side effects like API call, timers,
    // 3. ...Many more
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
    const [filterActive, setFilterActive] = useState(false);

    /**
     * This is nothing but array destrucing like below eg.
     * const arr = useState(restaurants);
     *
     * const [filteredRestaurants, setFilteredRestaurants] = arr;
     *
     * const filteredRestaurants = arr[0];
     * const setFilteredRestaurants = arr[1];
     */

    return (
        <div className="body">
            <div className="search-and-filter-container">
                <div className="search-container">
                    <input
                        placeholder="Search Restaurant"
                        type="text"
                        className="search"
                    />
                </div>
                <div className="filter-container">
                    <p className="filter-text">Filter:</p>
                    <button
                        className="top-rated"
                        onClick={() => {
                            const filteredRes = restaurants?.filter(
                                (item) => item.avgRating > 4
                            );
                            console.log(filteredRes, filteredRes?.length);

                            setFilteredRestaurants(filteredRes);
                            setFilterActive(true);
                        }}
                    >
                        Top Rated
                    </button>
                    {filterActive && (
                        <MdCancel
                            onClick={() => {
                                setFilteredRestaurants(restaurants);
                                setFilterActive(false);
                            }}
                        />
                    )}
                </div>
            </div>
            <div className="restaurant-container">
                <RestaurantsContainer restaurants={filteredRestaurants} />
            </div>
        </div>
    );
};

export default Body;
