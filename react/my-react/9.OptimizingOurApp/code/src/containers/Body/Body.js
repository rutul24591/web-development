import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import RestaurantCard from "../../components/RestaurantCard";
import Shimmer from "../../components/Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";

import constants from "../../utils/constants";

const RestaurantsContainer = ({ restaurants }) => {
    const navigate = useNavigate();

    const handleRestaurantClick = (restaurant) => {
        navigate(`/restaurant-detail/${restaurant?.info?.id}`);
    };

    return (
        <div className="restaurants-card-container">
            {restaurants?.map((restaurant, _index) => {
                return (
                    // <Link
                    //     key={restaurant?.info?.id}
                    //     to={`/restaurant-detail/${restaurant?.info?.id}`}
                    // >
                    <RestaurantCard
                        style={{ textDecoration: "none" }}
                        key={restaurant?.info?.id || _index}
                        restaurant={restaurant}
                        handleRestaurantClick={handleRestaurantClick}
                    />
                    // </Link>
                );
            })}
        </div>
    );
};

const Body = (props) => {
    // const { restaurants } = props;
    // React hooks are normal JS function with enhance capabilities.
    // Whenever the state variable changes, react renders the component.
    // 1. useState - Used to generate super powered state variables
    // 2. useEffect - Used to handle side effects like API call, timers,
    // 3. ...Many more
    const [originalRestaurants, setOriginalRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [filterActive, setFilterActive] = useState(false);
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    console.log(searchText);

    /**
     * This is nothing but array destrucing like below eg.
     * const arr = useState(restaurants);
     *
     * const [filteredRestaurants, setFilteredRestaurants] = arr;
     *
     * const filteredRestaurants = arr[0];
     * const setFilteredRestaurants = arr[1];
     */

    useEffect(() => {
        // This callback will be called once component renders.
        // Add debuggers as below and check what is rendered first.
        // console.log("useEffect called"); // put debug on this line
        fetchData();
    }, []);

    // Whenever a state variable changes, render triggers the reconciliation cycle(re-renders)
    // console.log("Rendering body"); // put debug on this line

    const fetchData = async () => {
        const data = await fetch(constants.RESTAURANTS_URL);
        const jsonData = await data.json();
        // console.log("Data from fetchData", jsonData);

        setFilteredRestaurants(
            jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        ); // Too Long

        setOriginalRestaurants(
            jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    /** For API Call */
    // let debounce = (fn, delay) => {
    //     let timer;

    //     return function (...args) {
    //         let context = this;

    //         clearTimeout(timer);

    //         timer = setTimeout(() => {
    //             fn.apply(context, args);
    //         }, delay);
    //     };
    // };

    useEffect(() => {
        console.log(`FILTER USE EFFECT CALLED`);
        const filteredRes = originalRestaurants?.filter((item) => {
            return item?.info?.name?.match(searchText);
        });
        console.log(filteredRes, filteredRes?.length);

        setFilteredRestaurants(filteredRes);
    }, [searchText]);

    if (!onlineStatus) {
        return (
            <div className="body">
                <h1>
                    Looks like you are offline! Also check your internet
                    connection
                </h1>
            </div>
        );
    }

    if (filteredRestaurants?.length === 0) {
        return (
            <div>
                {/* <FiCommand className="loading-icon" /> */}
                <Shimmer />
            </div>
        );
    } else {
        return (
            <div className="body">
                {" "}
                {/* put debug on this line cN="body"  */}
                <div className="search-and-filter-container">
                    <div className="search-container">
                        <input
                            placeholder="Search Restaurant"
                            type="text"
                            className="search"
                            value={searchText}
                            onChange={(event) => {
                                setSearchText(event.target.value);
                            }}
                        />
                        {/* <button
                            className="search-button"
                            onClick={() => {
                                const filteredRes = originalRestaurants?.filter(
                                    (item) => {
                                        console.log(`item.info`, item?.info);
                                        return item?.info?.name?.match(
                                            searchText
                                        );
                                    }
                                );
                                console.log(filteredRes, filteredRes?.length);

                                setFilteredRestaurants(filteredRes);
                                // setFilterActive(true);
                            }}
                        >
                            Search
                        </button> */}
                    </div>
                    <div className="filter-container">
                        <p className="filter-text">Filter:</p>
                        <button
                            className="top-rated"
                            onClick={() => {
                                // console.log(originalRestaurants);
                                const filteredRes = originalRestaurants?.filter(
                                    (item) => item?.info?.avgRating > 4
                                );
                                // console.log(filteredRes, filteredRes?.length);

                                setFilteredRestaurants(filteredRes);
                                setFilterActive(true);
                            }}
                        >
                            Top Rated
                        </button>
                        {filterActive && (
                            <MdCancel
                                onClick={() => {
                                    setFilteredRestaurants(originalRestaurants);
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
    }
};

export default Body;
