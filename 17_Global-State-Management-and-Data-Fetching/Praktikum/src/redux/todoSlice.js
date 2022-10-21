import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {id :1,
        title: "Mengerjakan Exercise",
        completed: true},
        {id: 2,
        title: "Mengerjakan Assignment",
        completed: false}
    ],
    status: 'idle',
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },
        changeTodo: (state, action) => {
            state.value[action.payload].completed = !state.value[action.payload].completed;
        },
        deleteTodo: (state, action) => {
            state.value.splice(action.payload, 1);
        },
    },
});

export const { addTodo, changeTodo, deleteTodo } = todoSlice.actions;

export const selectCount = (state) => state.todos.value;

export default todoSlice.reducer;