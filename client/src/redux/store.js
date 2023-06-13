import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./userSlice";
import postReducer from "./jobSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    post: postReducer,
  },
});
