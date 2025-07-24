import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { BG_IMG } from "../utils/constants";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessae] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessae(message);
    if (message) return;

    if (!isSignIn) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessae(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessae(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign in Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessae(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative h-screen">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BG_IMG}
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
          className="p-3 my-3 w-full bg-gray-700/70 text-white rounded-md"
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
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={toggleSignIn}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </span>
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
