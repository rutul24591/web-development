import { configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "./sidebarSlice";
import searchReducer from "./searchSlice";
import chatReducer from "./chatSlice";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        search: searchReducer,
        chat: chatReducer,
    },
});

export default store;
