import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        active: true,
    },
    reducers: {
        toggle: (state) => {
            state.active = !state.active;
        },
        close: (state) => {
            state.active = false;
        },
        open: (state) => {
            state.active = true;
        },
    },
});

console.log("sidebarSlice: ", sidebarSlice);

/** This is default way based on doc */
export const { toggle, close, open } = sidebarSlice.actions;
export default sidebarSlice.reducer;
