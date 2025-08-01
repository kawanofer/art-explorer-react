import { configureStore } from "@reduxjs/toolkit";
import artsReducer from "./artsSlice";
import detailsArtReducer from "./detailsArtSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  arts: artsReducer,
  detailsArt: detailsArtReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
