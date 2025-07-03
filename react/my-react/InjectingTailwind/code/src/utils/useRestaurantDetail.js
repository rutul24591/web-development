import { useState, useEffect } from "react";

import constants from "./constants";

const useRestaurantDetail = (resId) => {
    const [restaurantDetail, setRestaurantDetail] = useState(null);

    const fetchRestaurantDetail = async () => {
        const data = await fetch(constants.RESTAURANT_DETAIL_URL + resId);
        const dataJson = await data?.json();
        setRestaurantDetail(dataJson?.data);
    };

    useEffect(() => {
        fetchRestaurantDetail();
    }, []);

    return restaurantDetail;
};

export default useRestaurantDetail;
