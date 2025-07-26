import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES, USER_LOGO } from "../utils/constants";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGPTSearch);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-45" src={LOGO} alt="logo"></img>
      {user && (
        <div className="flex p-2 m-3 ">
          {showGptSearch && (
            <select
              className="text-white bg-gray-900 rounded-md items-center py-2 px-4 mx-4 my-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className=" py-2 px-4 mx-4 my-2 cursor-pointer bg-purple-800 rounded-md"
            onClick={handleSearch}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 m-2 rounded-sm"
            src={USER_LOGO}
            alt="userLogo"
          ></img>
          <button
            onClick={handleSignOut}
            className="text-white font-bold cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
