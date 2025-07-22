import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/constants";
import { removeUser } from "../store/userSlice";

const Navbar = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post(
                BACKEND_URL + "/logout",
                {},
                {
                    withCredentials: true,
                }
            );
            dispatch(removeUser());
            navigate("/login");
        } catch (error) {
            // May be redirect to a Logout page
            console.log(`ERROR While logging out the user`);
        }
    };

    return (
        <div className="navbar bg-black py-6">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl text-yellow-400">
                    Dev Tinder
                </Link>
            </div>
            {user && (
                <div className="flex items-center gap-4">
                    {/* <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-24 md:w-auto"
                /> */}
                    <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-yellow-400 font-semibold px-4 py-2 rounded-xl shadow-md text-center">
                        👋 Welcome, {user?.firstName}!
                    </div>

                    <div className="dropdown dropdown-end mx-4">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                    <span className="badge text-yellow-400">
                                        New
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/connections"
                                    className="justify-between hover:bg-gray-800 rounded-md p-2"
                                >
                                    Connections{" "}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/requests"
                                    className="justify-between hover:bg-gray-800 rounded-md p-2"
                                >
                                    Requests{" "}
                                </Link>
                            </li>
                            <li>
                                <a onClick={handleLogout}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
