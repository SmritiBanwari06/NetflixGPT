import { MovieCard } from "./MovieCard";
import React from "react";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="md:text-3xl text-lg py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto hide-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
