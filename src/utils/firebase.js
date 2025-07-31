import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const api_key = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: api_key,
  authDomain: "netflixgpt-4a888.firebaseapp.com",
  projectId: "netflixgpt-4a888",
  storageBucket: "netflixgpt-4a888.appspot.com",
  messagingSenderId: "393594681186",
  appId: "1:393594681186:web:b0071388ed691c12e81e3b",
  measurementId: "G-QRE2MEFC89",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
