import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCZIgxNkKL5lDvwbuXdUKwyYCEfvJAVeo",
  authDomain: "ceo-dashboard-app.firebaseapp.com",
  projectId: "ceo-dashboard-app",
  storageBucket: "ceo-dashboard-app.firebasestorage.app",
  messagingSenderId: "511815382835",
  appId: "1:511815382835:web:88806c7c3e91712c39b046",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth specifically for React Native
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
