import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import genAI from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovies } from "../utils/gptSlice";

export const GPTSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchTMDBMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a movie recommendation  system and suggest  some movies for the query" +
      searchText.current.value +
      "Only give me names of 5 movies, comma seperated like  the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya ";
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent(gptQuery);
      const response = await result.response;
      const text = response.text();
      const geminiMovies = text.split(",");
      console.log(geminiMovies);

      const promiseArray = geminiMovies.map((movie) => searchTMDBMovie(movie));
      const tmdbResults = await Promise.all(promiseArray);
      console.log("TMDB RESULTS", tmdbResults);
      dispatch(
        addGPTMovies({ movieNames: geminiMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error("Gemini API call failed:", error);
    }
  };

  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center items-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12 mt-20"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].placeholder}
          className="p-4 m-4 text-black col-span-9 bg-white"
        ></input>
        <button
          className="py-2 px-2 m-4 bg-red-700 text-white rounded-lg cursor-pointer col-span-3"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
