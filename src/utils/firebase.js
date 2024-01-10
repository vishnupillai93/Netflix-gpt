// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnsVV9_F1TJMkvXa3gpE0TbqHJu_7sP1g",
  authDomain: "netflixgpt-429f9.firebaseapp.com",
  projectId: "netflixgpt-429f9",
  storageBucket: "netflixgpt-429f9.appspot.com",
  messagingSenderId: "430417906587",
  appId: "1:430417906587:web:8287c74cf0b75667e2af3e",
  measurementId: "G-RR46P1MV80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();