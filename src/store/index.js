import { createSlice, configureStore } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "songs",
  initialState: [],
  reducers: {
    addSongs(state, action) {
      state.push(action.payload);
    },
    removeSongs(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

const movieSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    addMovies(state, action) {
      state.push(action.payload);
    },
    removeMovies(state, action) {
      const idx = state.indexOf(action.payload);
      state.splice(idx, 1);
    },
  },
});

export const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: movieSlice.reducer,
  },
});

export const { addSongs, removeSongs } = songsSlice.actions;
export const { addMovies, removeMovies } = movieSlice.actions;
