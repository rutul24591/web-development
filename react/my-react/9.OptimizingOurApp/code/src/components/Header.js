import React, { useState } from "react";
import { Link } from "react-router-dom";

import constants from "../utils/constants"; // Named Import
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    // const btnName = "Login"; JS variable will change but don't trigger render on UI so we use useState
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={constants.LOGO_URL} />
            </div>
            <div className="nav-container">
                <ul className="nav">
                    <li className="nav-item">
                        Online status: {onlineStatus ? "✅" : "❌"}
                    </li>
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/offers">Offers</Link>
                    </li>
                    {/** Using anchor tag with href with render entire component, so not recommended to use
                     * We make use of Link from react-router-dom
                     */}
                    <li className="nav-item">
                        <Link to="/restaurants">Restaurants</Link>
                    </li>
                    {/** Check this out which uses anchor tag, it will reload entire page. */}
                    <li className="nav-item">
                        <a href="/help">Help</a>
                    </li>
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
