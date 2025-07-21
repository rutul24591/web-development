import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

import RestaurantMenu from "../../components/RestaurantMenu";
import Shimmer from "../../components/Shimmer";

import constants from "../../utils/constants";

const RestaurantDetail = () => {
    const [restaurantDetail, setRestaurantDetail] = useState();

    const { resId } = useParams();
    const navigate = useNavigate();

    const fetchRestaurantDetail = async () => {
        const data = await fetch(constants.RESTAURANT_DETAIL_URL + resId);
        const dataJson = await data?.json();
        setRestaurantDetail(dataJson?.data);
    };

    useEffect(() => {
        fetchRestaurantDetail();
    }, []);

    console.log(`restaurantDetail: `, restaurantDetail);

    if (restaurantDetail === null || restaurantDetail === undefined)
        return <Shimmer />;

    return (
        <div className="restaurant-detail-container">
            <div className="back-button-container">
                <div className="back-button">
                    <IoMdArrowRoundBack
                        size={30}
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                </div>
            </div>
            <RestaurantMenu resDetails={restaurantDetail} />
        </div>
    );
};

export default RestaurantDetail;
