import React from "react";
import { GPTSearchBar } from "./GPTSearchBar";
import { GPTMovieSuggestion } from "./GPTMovieSuggestion";
import { BG_IMG } from "../utils/constants";

export const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={BG_IMG}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};
