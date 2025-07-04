import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop(); // create logic by id
        },
        clearItems: (state) => {
            state.items.length = 0; // [] won't work
        },
    },
});

console.log("cartSlice: ", cartSlice);

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;

// export default cartSlice;
