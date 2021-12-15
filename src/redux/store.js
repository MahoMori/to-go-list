import { configureStore } from "@reduxjs/toolkit";
import togoReducer from "./togo/togoSlice";
import todoReducer from "./todo/todoSlice";

const store = configureStore({
  reducer: {
    togo: togoReducer,
    todo: todoReducer,
  },
});

export default store;
