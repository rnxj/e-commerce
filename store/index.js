import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import cart from "./cartSlice";

const reducers = combineReducers({ cart });

const config = {
	key: "root",
	storage,
};

const reducerCfg = persistReducer(config, reducers);

const store = configureStore({
	reducer: reducerCfg,
	devTools: process.env.NODE_ENV !== "production",
	middleware: [thunk],
});

export default store;
