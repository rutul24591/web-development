import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";

import BodyContainer from "./containers/BodyContainer";

import appStore from "./store/appStore";
import Register from "./components/Register";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

function App() {
    return (
        <>
            <Provider store={appStore}>
                <BrowserRouter basename="/">
                    <Routes>
                        {/* <Route path="/login" element={<LoginPage />} /> */}
                        <Route path="/" element={<BodyContainer />}>
                            <Route path="/" element={<Feed />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route
                                path="/connections"
                                element={<Connections />}
                            />
                            <Route path="/requests" element={<Requests />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
                {/* 
            <h1 className="text-3xl font-bold">Hello world</h1> */}
            </Provider>
        </>
    );
}

export default App;
