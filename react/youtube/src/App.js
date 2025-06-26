import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Error from "./containers/Error";
import Body from "./containers/Body";
import Sidebar from "./containers/Sidebar";
import Watch from "./containers/Watch";
import Header from "./containers/Header";

import store from "./store/store";

const AppLayout = () => {
    return (
        <Provider store={store}>
            <div className="flex flex-col">
                <Header />
                <div className="flex h-screen">
                    {/* h-screen */}
                    {/* <Sidebar /> */}
                    {/* <Outlet /> */}
                </div>
                {/* <div className="bg-gray-100 p-6 shadow-lg mt-auto">
                <footer className="flex flex-wrap justify-between items-center">
                    <div className="copyrights-container">
                        @ Copyright Rutul Amin
                    </div>
                    <div className="flex flex-row">
                        <ul className="flex">
                            <li className="p-2 m-2">Team</li>
                            <li className="p-2 m-2">Contact Us</li>
                            <li className="p-2 m-2">About us</li>
                            <li className="p-2 m-2">Careers</li>
                            <li className="p-2 m-2">Complaince</li>
                        </ul>
                    </div>
                </footer>
            </div> */}
            </div>
        </Provider>
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
                path: "/watch",
                element: <Watch />,
                errorElement: <Error />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
