import React from "react";
import ReactDOM from "react-dom/client";

import restaurants from "./utils/data.json";

import Header from "./components/Header"; // is default or named import? default import
import { Footer } from "./components/Footer"; // is default or named import? named import

import Body from "./container/Body/Body";

// console.log(restaurants);

const AppLayout = () => {
    return (
        <div className="app">
            <div className="header-container">
                <Header />
            </div>
            <div className="body-container">
                <Body restaurants={restaurants} />
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
