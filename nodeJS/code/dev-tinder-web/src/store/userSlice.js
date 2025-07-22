import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        loginUser: (state, action) => {},
        // registerUser: (state, action) => {
        //   return action.payload
        // },
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        },
    },
});

export const { loginUser, removeUser, addUser } = userSlice.actions;
export default userSlice.reducer;
