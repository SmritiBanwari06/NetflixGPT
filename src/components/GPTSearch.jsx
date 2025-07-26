import React from "react";
import { GPTSearchBar } from "./GPTSearchBar";
import { GPTMovieSuggestion } from "./GPTMovieSuggestion";
import { BG_IMG } from "../utils/constants";

export const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_IMG}
          alt="background"
          className="h-screen w-screen object-cover"
        />
      </div>
      <div className="pt-[30%] md:pt-0">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  );
};
