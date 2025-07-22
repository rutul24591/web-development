import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND_URL } from "../utils/constants";
import { addUser } from "../store/userSlice";

const BodyContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = useSelector((store) => store.user);

    const fetchUser = async () => {
        try {
            const user = await axios.get(BACKEND_URL + "/profile/view", {
                withCredentials: true,
            });
            dispatch(addUser(user.data.data));
        } catch (error) {
            // console.log(typeof error.status);
            if (error.status === 401) {
                navigate("/login");
            }
        }
    };

    useEffect(() => {
        if (!userData) {
            fetchUser();
        }
    }, []);

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default BodyContainer;
