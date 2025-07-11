import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { addUser } from "../store/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const SignupWrapper = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSignInNavigate = () => {
        navigate("/login");
    };

    const handleFormSubmit = async () => {
        console.log("Inside handleFormSubmit SIGN UP");
        const message = checkValidData(
            email.current.value,
            password.current.value
        );
        console.log("message:", message);

        setErrorMessage(message);
        if (message) return;

        // Sign Up Logic
        createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
        )
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("user: ", user);

                updateProfile(user, {
                    displayName: name.current.value,
                    photoURL: USER_AVATAR,
                })
                    .then(() => {
                        console.log("auth: ", auth);
                        const currentUser = auth.currentUser;
                        if (currentUser) {
                            const { uid, email, displayName, photoURL } =
                                currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                            );
                        }
                    })
                    .catch((error) => {
                        setErrorMessage(error.message);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
    };

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <form
                className="w-[480px] h-[600px] border border-gray-950 bg-gray-950 pt-16 flex flex-col"
                onSubmit={(event) => event.preventDefault()}
            >
                <h1 className="p-4 mx-6 mt-4 text-4xl font-bold text-white items-center">
                    Sign Up
                </h1>
                <input
                    ref={name}
                    type="text"
                    placeholder="Enter Full Name"
                    className="border border-gray-700 rounded-lg bg-gray-800 p-4 mx-10 mt-6 placeholder-gray-400 outline-0 text-gray-400"
                />
                <input
                    ref={email}
                    type="email"
                    placeholder="Enter Email"
                    className="border border-gray-700 rounded-lg bg-gray-800 p-4 mx-10 mt-6 placeholder-gray-400 outline-0 text-gray-400"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Enter Password"
                    className="border border-gray-700 bg-gray-800 rounded-lg p-4 mx-10 mt-6 placeholder-gray-400 outline-0 text-gray-400"
                />
                <p className="text-red-500 font-bold text-lg py-2">
                    {errorMessage}
                </p>
                <button
                    className="w-[400px] bg-red-700 text-white shadow-lg p-2 cursor-pointer font-bold mx-10 mt-6 rounded-lg"
                    onClick={handleFormSubmit}
                >
                    Sign Up
                </button>
                <p className="mx-10 mt-6 text-gray-400">
                    Already a Netflix user?{" "}
                    <span
                        onClick={handleSignInNavigate}
                        className="text-gray-200 cursor-pointer"
                    >
                        Sign in now.
                    </span>{" "}
                </p>
            </form>
        </div>
    );
};

export default SignupWrapper;
