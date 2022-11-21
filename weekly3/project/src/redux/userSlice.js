import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: "user",
    initialState: {
        user: [],
    },
    reducers: {
        getUser: (state, actions) => {
            state.user = [...actions.payload];
        },
        addUser: (state, actions) => {
            state.user = [...state.user, actions.payload];
        },
    }
})

export const { getUser, addUser } = userReducer.actions;
export default userReducer.reducer;