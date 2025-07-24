import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies || !movies.nowPlayingMovies) return;
  console.log("popular movies", movies.addPopularMovies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-50 pl-12 relative z-20">
          <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.addPopularMovies} />
          <MovieList title={"Thriller"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Sit-Com"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
