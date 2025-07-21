import React, { useEffect, useState, useContext } from "react";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import RestaurantCard, {
    withCostEffectiveRestaurant,
} from "../../components/RestaurantCard";
import Shimmer from "../../components/Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

import constants from "../../utils/constants";

const RestaurantsContainer = ({ restaurants }) => {
    const navigate = useNavigate();

    const handleRestaurantClick = (restaurant) => {
        navigate(`/restaurant-detail/${restaurant?.info?.id}`);
    };

    const RestaurantIsCostEffective =
        withCostEffectiveRestaurant(RestaurantCard);

    return (
        <div className="flex justify-start items-center flex-wrap">
            {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
            {restaurants?.map((restaurant, index) => {
                if (index % 2 === 0) {
                    restaurant.cost = 150;
                } else {
                    restaurant.cost = 151;
                }
                // <Link
                //     key={restaurant?.info?.id}
                //     to={`/restaurant-detail/${restaurant?.info?.id}`}
                // >
                return restaurant.cost <= 150 ? (
                    <RestaurantIsCostEffective
                        key={restaurant?.info?.id || index}
                        restaurant={restaurant}
                        handleRestaurantClick={handleRestaurantClick}
                    />
                ) : (
                    <RestaurantCard
                        // style={{ textDecoration: "none" }}
                        key={restaurant?.info?.id || index}
                        restaurant={restaurant}
                        handleRestaurantClick={handleRestaurantClick}
                    />
                );

                // </Link>
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
    const { loggedInUser, setUserName } = useContext(UserContext);

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
            <div className="m-[15px]">
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
            <div className="m-[15px]">
                {" "}
                {/* put debug on this line cN="body"  */}
                <div className="flex justify-between items-center m-[15px]">
                    <div className="m-[15px] border border-solid border-gray-200">
                        <input
                            placeholder="Search Restaurant"
                            type="text"
                            className="p-2"
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
                    <div className="flex justify-start items-center w-2lg">
                        <p className="p-1.5">Filter:</p>
                        <button
                            className="p-1.5 cursor-pointer border-none text-emerald-900 bg-green-100 rounded-xl"
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
                        {/* <div className="Search m-4 p-4 flex items-center">
                            <label className="px-4 py-1 m-3">Username</label>
                            <input
                                className="border border-gray-200 p-2"
                                value={loggedInUser || ""}
                                onChange={(e) => {
                                    setUserName(e.target.value);
                                }}
                            />
                        </div> */}
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
                <div className="m-[15px]">
                    <RestaurantsContainer restaurants={filteredRestaurants} />
                </div>
            </div>
        );
    }
};

export default Body;
