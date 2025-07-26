import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies || !movies.nowPlayingMovies) return;

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="md:-mt-50 mt-0 md:pl-12 ml-4 relative z-20">
          <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
