import { createSlice } from "@reduxjs/toolkit";

export const togoSlice = createSlice({
  name: "togo",
  initialState: {
    id: 1,
    togos: [],
  },

  reducers: {
    createTogo: (state, action) => {
      const { nameOfCreator, title, memo, mapUrl, wsUrl, refUrl } =
        action.payload;
      state.id++;
      const newTogo = {
        id: state.id,
        nameOfCreator,
        title,
        memo,
        mapUrl,
        wsUrl,
        refUrl,
        isDone: false,
      };
      state.togos = [newTogo, ...state.togos];
    },

    editTogo: (state, action) => {
      const { id, title, memo, mapUrl, wsUrl, refUrl } = action.payload;
      const togo = state.togos.find((t) => t.id === id);
      if (togo) {
        togo.title = title;
        togo.memo = memo;
        togo.mapUrl = mapUrl;
        togo.wsUrl = wsUrl;
        togo.refUrl = refUrl;
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
