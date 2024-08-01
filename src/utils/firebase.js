// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0iZJbd7tiUf7ugAhnRFwinAjLaFWxQoo",
  authDomain: "netflixgpt-3cb4b.firebaseapp.com",
  projectId: "netflixgpt-3cb4b",
  storageBucket: "netflixgpt-3cb4b.appspot.com",
  messagingSenderId: "432984953412",
  appId: "1:432984953412:web:2b65514fdb86139c2da211",
  measurementId: "G-R2NT4S5XXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()