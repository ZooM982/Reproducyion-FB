// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyB6j-z-7UbUE4EZ-tnNI6GA52aUihwzuDk",
  authDomain: "reproduction-fb.firebaseapp.com",
  databaseURL: "https://reproduction-fb-default-rtdb.firebaseio.com",
  projectId: "reproduction-fb",
  storageBucket: "reproduction-fb.appspot.com",
  messagingSenderId: "734979697819",
  appId: "1:734979697819:web:83980f54f50d4788f12a3e",
  measurementId: "G-XMHJY4CKZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);