import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";

import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";

const LoginWrapper = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef();
    const password = useRef();

    const handleSignUpNavigate = () => {
        navigate("/signup");
    };

    const handleFormSubmit = async () => {
        console.log("Inside handleFormSubmit LOGIN");

        const message = checkValidData(
            email.current.value,
            password.current.value
        );
        setErrorMessage(message);
        if (message) return;

        // Sign In Logic

        signInWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
        )
            .then((userCredential) => {
                const user = userCredential.user;
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
                    Sign In
                </h1>
                <input
                    type="email"
                    placeholder="Enter Email"
                    className="border border-gray-700 rounded-lg bg-gray-800 p-4 mx-10 mt-6 placeholder-gray-400 outline-0 text-gray-400"
                />
                <input
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
                    Sign In
                </button>
                <p className="mx-10 mt-6 text-gray-400">
                    New to Netflix?{" "}
                    <span
                        onClick={handleSignUpNavigate}
                        className="text-gray-200 cursor-pointer"
                    >
                        Sign up now.
                    </span>{" "}
                </p>
            </form>
        </div>
    );
};

export default LoginWrapper;
