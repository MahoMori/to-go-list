import { configureStore } from "@reduxjs/toolkit";
import togoReducer from "./togo/togoSlice";
import todoReducer from "./todo/todoSlice";
import togoTodoReducer from "./togoTodoSlice"

const store = configureStore({
  reducer: {
    togo: togoReducer,
    todo: todoReducer,
    togoTodo: togoTodoReducer
  },
});

export default store;
