import React, { lazy, Suspense, useEffect, useState } from "react";
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

import UserContext from "./utils/UserContext";

// console.log(restaurants);
// Hooks are just a utility function

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: userName,
        };
        setUserName(data.userName);
    }, []);

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="font-sans flex flex-col min-h-screen">
                <div className="sticky top-0 z-30">
                    <Header />
                </div>
                {/** This sandwiched part should be dynamic Eg Body, Aboutus, Offers, etc */}
                <div className="flex-1 flex-grow overflow-y-auto max-h-11/12">
                    <Outlet />
                </div>
                <div className="sticky bottom-0 z-30">
                    <Footer />
                </div>
            </div>
        </UserContext.Provider>
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
