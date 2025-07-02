import constants from "../utils/constants"; // Named Import

/** Styles starts here */
const cardStyle = {
    backgroundColor: "#F5F5F5",
};

const RestaurantCard = (props) => {
    const { restaurant, handleRestaurantClick } = props;

    console.log(restaurant?.info);

    const {
        name,
        cloudinaryImageId,
        veg,
        cuisines,
        avgRating,
        sla,
        areaName,
        costForTwo,
    } = restaurant?.info;
    /* One way to inline style in react */
    return (
        <div
            className="m-[15px] w-[300px] h-[450px] border border-solid border-gray-100 hover:cursor-pointer hover:w-[320px] hover:h-[480px]"
            style={cardStyle}
            onClick={() => handleRestaurantClick(restaurant)}
        >
            <img
                alt="restaurant-img"
                className="w-[320px] h-[260px]"
                src={`${constants.CDN_URL}${cloudinaryImageId}`}
            />
            <h3 className="font-extrabold p-1.5">{name}</h3>
            <h4 className="px-1.5">{cuisines?.join(", ")}</h4>
            <h4 className="px-1.5">{costForTwo}</h4>
            <h4 className="font-extrabold px-1.5">{avgRating} ⭐️</h4>
            <h4 className="px-1.5">{sla?.slaString}</h4>
            <h4 className="px-1.5">{areaName}</h4>
        </div>
    );
};

// Higher order Component.
// Higher order component takes a component as an argument and returns an enhanced component.
// Consider something like Tony Stark with Iron man suit. Its Tony Stark only with enhanced capabilities.
export const withCostEffectiveRestaurant = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="bg-black text-white font-bold my-1 absolute">
                    Cost Effective
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard; // default export
