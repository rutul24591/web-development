import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import restaurants from "./utils/data.json";

import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Error from "./components/Error";
// import Offers from "./components/Offers";
import Restaurants from "./components/Restaurants";
import Help from "./components/Help";

import Body from "./containers/Body/Body";
// import AboutContainer from "./containers/About/About";
import RestaurantDetail from "./containers/RestaurantDetail/RestaurantDetail";

const Offers = lazy(() => import("./components/Offers"));
const AboutContainer = lazy(() => import("./containers/About/About"));

// console.log(restaurants);
// Hooks are just a utility function

const AppLayout = () => {
    return (
        <div className="app">
            <div className="header-container">
                <Header />
            </div>
            {/** This sandwiched part should be dynamic Eg Body, Aboutus, Offers, etc */}
            <div className="main-container">
                <Outlet />
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: <Error />,
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading.......</h1>}>
                        <AboutContainer />
                    </Suspense>
                ),
                errorElement: <Error />,
            },
            {
                path: "/offers",
                element: (
                    <Suspense fallback={<h1>Loading.......</h1>}>
                        <Offers />
                    </Suspense>
                ),
                errorElement: <Error />,
            },
            {
                path: "/restaurants",
                element: <Restaurants />,
                errorElement: <Error />,
            },
            {
                path: "/help",
                element: <Help />,
                errorElement: <Error />,
            },
            {
                path: "/restaurant-detail/:resId",
                element: <RestaurantDetail />,
                errorElement: <Error />,
            },
        ],
    },
    // {
    //     path: "/about",
    //     element: <AboutContainer />,
    //     errorElement: <Error />,
    // },
    // {
    //     path: "/",
    //     element: <AppLayout />,
    //     errorElement: <Error />,
    // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
