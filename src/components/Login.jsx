import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessae] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current?.value || ""
    );
    setErrorMessae(message);
  };
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="relative h-screen">
      <Header />

      {/* Background Image */}
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-10 p-12 bg-black/80 w-11/12 md:w-3/4 lg:w-2/5 xl:w-1/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg"
      >
        <h1 className="font-bold text-white text-3xl mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-gray-700/70 text-white rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3  my-3 w-full bg-gray-700/70 text-white rounded-md"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-700/70 text-white rounded-md"
        />
        <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>

        <button
          className="p-2 my-5 bg-red-600 text-white w-full rounded-lg font-bold text-lg hover:bg-red-800 cursor-pointer transition-colors duration-300"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-gray-400 text-center mt-6">
          {isSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
          <a
            href="#"
            className="text-white hover:underline cursor-pointer"
            onClick={toggleSignIn}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </a>
        </p>

        <p className="text-gray-400 text-sm mt-3">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="text-blue-500 hover:underline cursor-pointer">
            Learn more.
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
