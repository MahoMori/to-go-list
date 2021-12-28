import { createSlice } from "@reduxjs/toolkit";

export const togoSlice = createSlice({
  name: "togo",
  initialState: {
    // id: 0,
    togos: [],
  },

  reducers: {
    createTogo: (state, action) => {
      const { id, nameOfCreator, title, memo, refUrl1, refUrl2, refUrl3 } =
        action.payload;
      const newTogo = {
        id,
        nameOfCreator,
        title,
        memo,
        refUrl1,
        refUrl2,
        refUrl3,
        isDone: false,
      };
      state.togos = [newTogo, ...state.togos];
    },

    editTogo: (state, action) => {
      const { id, title, memo, refUrl1, refUrl2, refUrl3 } = action.payload;
      const togo = state.togos.find((t) => t.id === id);
      if (togo) {
        togo.title = title;
        togo.memo = memo;
        togo.refUrl1 = refUrl1;
        togo.refUrl2 = refUrl2;
        togo.refUrl3 = refUrl3;
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
