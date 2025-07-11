import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Landing from "./containers/Landing";
import Error from "./containers/Error";
import Browse from "./containers/Browse";

import store from "./store/store";
import Header from "./components/Header";
import LoginWrapper from "./components/LoginWrapper";
import SignupWrapper from "./components/SignupWrapper";

import { BG_URL } from "./utils/constants";

const AppLayout = () => {
    return (
        <Provider store={store}>
            <div className="flex flex-col">
                <div className="fixed inset-0 w-full h-full -z-10">
                    <img
                        className="w-full h-full object-cover object-center"
                        src={BG_URL}
                        alt="Background Image"
                    />
                    <div className="absolute inset-0 bg-gray-950/69"></div>
                </div>
                <Header />
                <Outlet />
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
                element: <Landing />,
                errorElement: <Error />,
            },
            {
                path: "/login",
                element: <LoginWrapper />,
                errorElement: <Error />,
            },
            {
                path: "/signup",
                element: <SignupWrapper />,
                errorElement: <Error />,
            },
            {
                path: "/browse",
                element: <Browse />,
                error: <Error />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
