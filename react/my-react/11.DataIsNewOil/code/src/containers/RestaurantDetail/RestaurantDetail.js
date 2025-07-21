import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

import RestaurantMenu from "../../components/RestaurantMenu";
import Shimmer from "../../components/Shimmer";
import useRestaurantDetail from "../../utils/useRestaurantDetail";

const RestaurantDetail = () => {
    const { resId } = useParams();
    const navigate = useNavigate();

    /** Abstracting fetching data into a new hook to adhere to single responsibility */
    const restaurantDetail = useRestaurantDetail(resId);

    console.log(`restaurantDetail: `, restaurantDetail);

    if (restaurantDetail === null || restaurantDetail === undefined)
        return <Shimmer />;

    return (
        <div className="m-[15px] h-screen">
            <div className="hover:cursor-pointer">
                <IoMdArrowRoundBack
                    size={30}
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </div>
            <RestaurantMenu resDetails={restaurantDetail} />
        </div>
    );
};

export default RestaurantDetail;
