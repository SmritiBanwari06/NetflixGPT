import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

export const MovieCard = ({ posterPath }) => {
  return (
    <div className="pr-4 w-48">
      <img src={IMG_CDN_URL + posterPath} alt="movieCard"></img>
    </div>
  );
};
