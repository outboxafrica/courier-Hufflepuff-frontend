export const server =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000/api"
    : "https://hufflepuff.vercel.app/api";

   
     // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 //firebase config(v9..)
const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_KEY,
  authDomain: process.env.NEXT_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_FIREBASE_APPID,
};

export const app = initializeApp(firebaseConfig);