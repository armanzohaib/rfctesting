import { persistReducer, persistStore } from "redux-persist";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import logger from "redux-logger";
import storage from "@/config/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const reducers = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);
