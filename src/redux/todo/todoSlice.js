import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    id: 1,
    todos: [],
  },

  reducers: {
    createTodo: (state, action) => {
      const { nameOfCreator, title, memo, refUrl1, refUrl2, refUrl3 } =
        action.payload;
      state.id++;
      const newTodo = {
        id: state.id,
        nameOfCreator,
        title,
        memo,
        refUrl1,
        refUrl2,
        refUrl3,
        isDone: false,
      };
      state.todos = [newTodo, ...state.todos];
    },

    editTodo: (state, action) => {
      const { id, title, memo, refUrl1, refUrl2, refUrl3 } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.title = title;
        todo.memo = memo;
        todo.refUrl1 = refUrl1;
        todo.refUrl2 = refUrl2;
        todo.refUrl3 = refUrl3;
      }
    },

    doneUndoneTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.isDone ? (todo.isDone = false) : (todo.isDone = true);
      }
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { createTodo, editTodo, doneUndoneTodo, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
