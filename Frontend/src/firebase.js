// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ek-pratisat-mern.firebaseapp.com",
  projectId: "ek-pratisat-mern",
  storageBucket: "ek-pratisat-mern.appspot.com",
  messagingSenderId: "682284722264",
  appId: "1:682284722264:web:e5dd8b74e813faf938822d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);