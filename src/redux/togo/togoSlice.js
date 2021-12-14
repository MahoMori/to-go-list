import { createSlice } from "@reduxjs/toolkit";

export const togoSlice = createSlice({
  name: "togo",
  initialState: {
    id: 1,
    togos: [],
  },

  reducers: {
    createTogo: (state, action) => {
      const { nameOfCreator, title, memo, map } = action.payload;
      state.id++;
      const newTogo = {
        id: state.id,
        nameOfCreator,
        title,
        memo,
        map,
        isDone: false,
      };
      state.togos = [newTogo, ...state.togos];
    },

    editTogo: (state, action) => {
      const { id, title, memo, map } = action.payload;
      const togo = state.togos.find((t) => t.id === id);
      if (togo) {
        togo.title = title;
        togo.memo = memo;
        togo.map = map;
      }
    },

    doneUndoneTogo: (state, action) => {
      const togo = state.togos.find((t) => t.id === action.payload);
      if (togo) {
        togo.isDone ? (togo.isDone = false) : (togo.isDone = true);
      }
    },

    deleteTogo: (state, action) => {
      state.togos = state.togos.filter((togo) => togo.id !== action.payload);
    },
  },
});

export const { createTogo, editTogo, doneUndoneTogo, deleteTogo } =
  togoSlice.actions;

export default togoSlice.reducer;
