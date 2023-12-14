import { numberReducer, userReducer, cartReducer } from "../reducer";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    numbers: numberReducer,
    user: userReducer,
    cart: cartReducer,
  })
);
export const store = createStore(persistedReducer, applyMiddleware());
export const persistManager = persistStore(store);
