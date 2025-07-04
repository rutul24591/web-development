import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import constants from "../utils/constants"; // Named Import
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    // const btnName = "Login"; JS variable will change but don't trigger render on UI so we use useState
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();
    const contextData = useContext(UserContext);

    // console.log(`contextData: `, contextData);

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between items-center border border-solid border-indigo-900 bg-indigo-950 text-pink-200">
            <img
                className="w-16 h-14 m-2.5 rounded-2xl"
                src={constants.LOGO_URL}
            />
            <div className="flex justify-start mx-2.5">
                <ul className="flex flex-row justify-end">
                    <li className="nav-item p-2.5 mx-2.5 list-none text-xl cursor-pointer">
                        Online status: {onlineStatus ? "✅" : "❌"}
                    </li>
                    <li className="nav-item p-2.5 mx-2.5 list-none text-xl cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item p-2.5 mx-2.5 list-none text-xl cursor-pointer">
                        <Link to="/offers">Offers</Link>
                    </li>
                    {/** Using anchor tag with href with render entire component, so not recommended to use
                     * We make use of Link from react-router-dom
                     */}
                    <li className="nav-item p-2.5 mx-2.5 list-none text-xl cursor-pointer">
                        <Link to="/restaurants">Restaurants</Link>
                    </li>
                    {/** Check this out which uses anchor tag, it will reload entire page. */}
                    <li className="nav-item p-2.5 mx-2.5 list-none text-xl cursor-pointer">
                        <a href="/help">Help</a>
                    </li>
                    <li className="nav-item p-2.5 mx-2.5 list-none text-xl cursor-pointer">
                        <Link to="/cart">
                            <span>🛒({cartItems.length})</span>
                        </Link>
                    </li>
                    <li
                        className="nav-item p-2.5 mx-2.5 list-none text-xl cursor-pointer"
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
                    {btnName === "Logout" && (
                        <li className="nav-item p-2.5 mx-2.5 list-none text-xl cursor-pointer">
                            {contextData.loggedInUser}
                        </li>
                    )}
                </ul>
                {/* <div className="login-button-container">
                    <button className="login-button">{btnName}</button>
                </div> */}
            </div>
        </div>
    );
};

export default Header;
