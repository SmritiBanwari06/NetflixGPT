// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2dAtYnuzK7wKGavQTiWAOWifqNYYVHh0",
  authDomain: "netflixgpt-4a888.firebaseapp.com",
  projectId: "netflixgpt-4a888",
  storageBucket: "netflixgpt-4a888.firebasestorage.app",
  messagingSenderId: "393594681186",
  appId: "1:393594681186:web:b0071388ed691c12e81e3b",
  measurementId: "G-QRE2MEFC89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
