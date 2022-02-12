import { createSlice } from "@reduxjs/toolkit";

const labelStateChange = (label, state) => {
  if (label === "togo") {
    return state.togos;
  } else {
    return state.todos;
  }
};

export const togoTodoSlice = createSlice({
  name: "togoTodo",
  initialState: {
    togos: [],
    todos: [],
  },

  reducers: {
    createTogoTodo: (state, action) => {
      const {
        id,
        label,
        nameOfCreator,
        title,
        memo,
        refUrl1,
        refUrl2,
        refUrl3,
        isDone,
      } = action.payload;

      const newTogoTodo = {
        id,
        nameOfCreator,
        title,
        memo,
        refUrl1,
        refUrl2,
        refUrl3,
        isDone,
      };

      switch (label) {
        case "togo":
          state.togos = [newTogoTodo, ...state.togos];
          break;
        case "todo":
          state.todos = [newTogoTodo, ...state.todos];
          break;
        default:
          break;
      }
    },

    editTogoTodo: (state, action) => {
      const { label, id, title, memo, refUrl1, refUrl2, refUrl3 } =
        action.payload;
      const oneToEdit = labelStateChange(label, state).find(
        (data) => data.id === id
      );
      console.log(oneToEdit);

      if (oneToEdit) {
        oneToEdit.title = title;
        oneToEdit.memo = memo;
        oneToEdit.refUrl1 = refUrl1;
        oneToEdit.refUrl2 = refUrl2;
        oneToEdit.refUrl3 = refUrl3;
      } else if (oneToEdit === undefined) {
        switch (label) {
          case "togo":
            state.togos = [action.payload, ...state.togos];
            break;
          case "todo":
            state.todos = [action.payload, ...state.todos];
            break;
          default:
            break;
        }
      }
      console.log("slice ", state.togos);
    },
  },
});

export const { onLoad, createTogoTodo, editTogoTodo } = togoTodoSlice.actions;

export default togoTodoSlice.reducer;
