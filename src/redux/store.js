import { configureStore } from "@reduxjs/toolkit";
import togoReducer from "./togo/togoSlice";

const store = configureStore({
  reducer: {
    togo: togoReducer,
  },
});

export default store;
