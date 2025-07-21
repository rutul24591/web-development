import React from "react";
import ReactDOM from "react-dom/client";

import restaurants from "./data.json";

// console.log(restaurants);
/** Styles starts here */
const cardStyle = {
    backgroundColor: "#F5F5F5",
};

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
                />
            </div>
            <div className="nav-container">
                <ul className="nav">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Offers</li>
                    <li className="nav-item">Restaurants</li>
                    <li className="nav-item">Help</li>
                    <li className="nav-item">Cart</li>
                </ul>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="footer">
            <div className="copyrights-container">@ Copyright Rutul Amin</div>
            <div className="footer-nav-container">
                <ul className="nav">
                    <li className="nav-item">Team</li>
                    <li className="nav-item">Contact Us</li>
                    <li className="nav-item">About us</li>
                    <li className="nav-item">Careers</li>
                    <li className="nav-item">Complaince</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const { restaurant } = props;

    console.log(restaurant);

    const { name, cloudinaryImageId, veg, cuisines, avgRating, sla, id } =
        restaurant;
    /* One way to inline style in react */
    return (
        <div className="restaurant-card" style={cardStyle}>
            <img
                alt="restaurant-img"
                className="restaurant-card-image"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            />
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
};

const RestaurantsContainer = () => {
    return (
        <div className="restaurants-card-container">
            {restaurants?.map((restaurant, _index) => {
                return <RestaurantCard key={id} restaurant={restaurant} />;
            })}
        </div>
    );
};

const Body = () => {
    return (
        <div className="body-container">
            <div className="search-container">Search</div>
            <div className="restaurant-container">
                <RestaurantsContainer />
            </div>
        </div>
    );
};
const AppLayout = () => {
    return (
        <div className="app">
            <div className="header-container">
                <Header />
            </div>
            <div className="body-container">
                <Body />
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
