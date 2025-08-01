import { configureStore } from "@reduxjs/toolkit";
import artsReducer from "./artsSlice";

export const store = configureStore({
  reducer: {
    arts: artsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
