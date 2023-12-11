import numberReducer from "../reducer";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ numbers: numberReducer })
);

export const store = createStore(persistedReducer);
export const persistManager = persistStore(store);
