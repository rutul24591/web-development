import React, { useEffect } from "react";
// import Link from "next/link";
// import { useRouter, usePathname } from "next/navigation";
import { useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";

import { addUser, removeUser } from "../store/userSlice";

import { toggleGptSearchView } from "../store/gptSlice";
import { changeLanguage } from "../store/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    console.log("location", location);

    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleGptSearchClick = () => {
        // Toggle GPT Search
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                navigate("/error");
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });

        // Unsiubscribe when component unmounts
        return () => unsubscribe();
    }, []);

    const handleSignUpNavigate = () => {
        navigate("/login");
    };

    return (
        <div className="absolute w-screen px-6 py-2 z-100 bg-gradient-to-b from-gray-950 flex justify-between items-center">
            <img
                className="w-36 cursor-pointer md:mx-0"
                src={LOGO_URL}
                alt="Netflix Logo"
                onClick={() => navigate("/")}
            />
            {user && (
                <div className="flex p-2 justify-between">
                    {showGptSearch && (
                        <select
                            className="p-2 m-2 bg-gray-900 text-white"
                            onChange={handleLanguageChange}
                        >
                            {SUPPORTED_LANGUAGES.map((lang) => (
                                <option
                                    key={lang.identifier}
                                    value={lang.identifier}
                                >
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    )}
                    <button
                        className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
                        onClick={handleGptSearchClick}
                    >
                        {showGptSearch ? "Homepage" : "GPT Search"}
                    </button>
                    <img
                        className="hidden md:block w-12 h-12"
                        alt="usericon"
                        src={user?.photoURL}
                    />
                    <button
                        onClick={handleSignOut}
                        className="font-bold text-white "
                    >
                        (Sign Out)
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
