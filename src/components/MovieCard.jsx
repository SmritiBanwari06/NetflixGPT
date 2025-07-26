import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

export const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="pr-4 md:w-48 w-36">
      <img src={IMG_CDN_URL + posterPath} alt="movieCard"></img>
    </div>
  );
};
