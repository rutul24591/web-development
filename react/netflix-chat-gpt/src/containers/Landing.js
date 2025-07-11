import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="p-8 sm:w-[650px] sm:p-0 flex flex-col top-5/12 left-4/12">
                <p className="font-extrabold text-white text-6xl">
                    Unlimited movies, TV shows and more
                </p>
                <span className="font-normal text-xl py-2 text-white">
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </span>
                <button className="w-28 bg-red-700 text-white shadow-lg p-2 my-4 font-bold cursor-pointer">
                    <Link to="/signup">Sign Up</Link>
                </button>
            </div>
        </div>
    );
};

export default Landing;
