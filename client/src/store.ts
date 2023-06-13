import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authSlice from "./features/auth/authSlice";
import SportsmenSlice from "./features/SportsmenPage/SportsmenSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: SportsmenSlice
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;


