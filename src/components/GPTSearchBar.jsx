import React from "react";

export const GPTSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center items-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className="p-4 m-4 text-black col-span-9 bg-white"
        ></input>
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg cursor-pointer col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};
