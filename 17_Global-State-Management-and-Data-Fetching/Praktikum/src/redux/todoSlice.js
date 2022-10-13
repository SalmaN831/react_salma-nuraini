import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        title: "Mengerjakan Assignment"
    },
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        }
    }
})

export const { setTitle } = todoSlice.actions;

export default todoSlice.reducer;