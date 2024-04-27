// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KAY,
  authDomain: "mern-auth-c2c01.firebaseapp.com",
  projectId: "mern-auth-c2c01",
  storageBucket: "mern-auth-c2c01.appspot.com",
  messagingSenderId: "913147975703",
  appId: "1:913147975703:web:e7e7233f71e5d9de1ba452",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
