const RestaurantMenu = (props) => {
    const { resDetails } = props;

    console.log(resDetails);
    const { name, cuisines, costForTwoMessage } =
        resDetails?.cards[2]?.card?.card?.info;

    const { itemCards } =
        resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card;

    console.log(name, cuisines, costForTwoMessage);
    console.log(`IC: `, itemCards);

    return (
        <div className="menu-container">
            <div className="menu">
                <h1>Name: {name}</h1>
                <p>
                    {cuisines.join(", ")} - {costForTwoMessage}
                </p>
                <h2>Menu</h2>
                <ul>
                    {itemCards.map((item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {"Rs."}
                            {item.card.info.price / 100 ||
                                item.card.info.defaultPrice / 100}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
