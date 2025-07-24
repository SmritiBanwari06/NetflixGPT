import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;
