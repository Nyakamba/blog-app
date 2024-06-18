// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5bb58.firebaseapp.com",
  projectId: "mern-blog-5bb58",
  storageBucket: "mern-blog-5bb58.appspot.com",
  messagingSenderId: "822955397217",
  appId: "1:822955397217:web:54a243c46b14c98df69a20",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
