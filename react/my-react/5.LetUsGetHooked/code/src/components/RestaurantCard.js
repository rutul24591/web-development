import constants from "../utils/constants"; // Named Import

/** Styles starts here */
const cardStyle = {
    backgroundColor: "#F5F5F5",
};

const RestaurantCard = (props) => {
    const { restaurant } = props;

    // console.log(restaurant);

    const { name, cloudinaryImageId, veg, cuisines, avgRating, sla } =
        restaurant;
    /* One way to inline style in react */
    return (
        <div className="restaurant-card" style={cardStyle}>
            <img
                alt="restaurant-img"
                className="restaurant-card-image"
                src={`${constants.CDN_URL}${cloudinaryImageId}`}
            />
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
};

export default RestaurantCard; // default export
