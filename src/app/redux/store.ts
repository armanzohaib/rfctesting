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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          // If needed, add other action types here that are known to be non-serializable
        ],
        // Optionally, ignore specific paths in the state
        ignoredPaths: [
          "register",
          // Add any other paths you want to ignore
        ],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
