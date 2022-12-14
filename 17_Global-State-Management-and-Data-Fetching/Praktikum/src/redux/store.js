import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from './todoSlice';
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage
};

const rootReducer = combineReducers({
    todos: todosReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);