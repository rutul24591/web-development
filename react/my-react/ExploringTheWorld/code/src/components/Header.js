import React, { useState } from "react";

import constants from "../utils/constants"; // Named Import

const Header = () => {
    // const btnName = "Login"; JS variable will change but don't trigger render on UI so we use useState
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={constants.LOGO_URL} />
            </div>
            <div className="nav-container">
                <ul className="nav">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Offers</li>
                    <li className="nav-item">Restaurants</li>
                    <li className="nav-item">Help</li>
                    <li className="nav-item">Cart</li>
                    <li
                        className="nav-item"
                        onClick={() => {
                            // if (btnName === "Login") setBtnName("Logout");
                            // else setBtnName("Login");
                            btnName === "Login"
                                ? setBtnName("Logout")
                                : setBtnName("Login");
                        }}
                    >
                        {btnName}
                    </li>
                </ul>
                {/* <div className="login-button-container">
                    <button className="login-button">{btnName}</button>
                </div> */}
            </div>
        </div>
    );
};

export default Header;
