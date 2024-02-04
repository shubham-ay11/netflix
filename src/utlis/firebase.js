// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5XOAEiXjJ3oRjqMMC26DTQcHlZK43_Jw",
  authDomain: "netflixgpt-f09cb.firebaseapp.com",
  projectId: "netflixgpt-f09cb",
  storageBucket: "netflixgpt-f09cb.appspot.com",
  messagingSenderId: "611756735233",
  appId: "1:611756735233:web:ad5fae51beb90207e57900",
  measurementId: "G-QB6S98R037"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);