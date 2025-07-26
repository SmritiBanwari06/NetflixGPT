import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

export const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center items-center">
      <form className=" w-1/2 bg-black grid grid-cols-12 mt-20">
        <input
          type="text"
          placeholder={lang[langKey].placeholder}
          className="p-4 m-4 text-black col-span-9 bg-white"
        ></input>
        <button className="py-2 px-2 m-4 bg-red-700 text-white rounded-lg cursor-pointer col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
