import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";

// const cartReducer = cartSlice.reducer;
// const cartAction = cartSlice.actions;

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
    // actions: {
    //     addItem: cartAction.addItem,
    //     removeItem: cartAction.removeItem,
    //     clearItems: cartAction.clearItems,
    // },
});

export default appStore;
