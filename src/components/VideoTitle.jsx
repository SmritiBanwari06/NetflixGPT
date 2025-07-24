import React from "react";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="hover:bg-white/80 bg-white text-black p-2 px-5 text-lg rounded-lg cursor-pointer">
          ▶️ Play Now
        </button>
        <button className="bg-gray-500 mx-2 text-white p-2 px-5 text-lg rounded-lg cursor-pointer bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
