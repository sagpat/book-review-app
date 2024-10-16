import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

// store is not persistance. Which is causing issue on page refresh.
// TODO: Fix the store issue if time permits.

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
