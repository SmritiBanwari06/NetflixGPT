import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackground";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies?.[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="md:pt-0 pt-[30%] bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};
export default MainContainer;
