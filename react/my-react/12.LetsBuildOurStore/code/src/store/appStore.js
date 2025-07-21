import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";

// const cartReducer = cartSlice.reducer;
// const cartAction = cartSlice.actions;

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;
