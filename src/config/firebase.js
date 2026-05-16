// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Copied directly from your Firebase Console screen
const firebaseConfig = {
  apiKey: "AIzaSyDCZIgxNkKL5lDvwbuXdUKwyyCEfvJAVeo",
  authDomain: "ceo-dashboard-app.firebaseapp.com",
  projectId: "ceo-dashboard-app",
  storageBucket: "ceo-dashboard-app.appspot.com",
  messagingSenderId: "36724395899", // Grab this number from your screen scroll
  appId: "1:36724395899:web:5b967a514e8b3b44b6c321", // Grab this string from your screen scroll
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
