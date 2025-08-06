// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7m5nt3MgVC7M6Hyffd3oFfyYAin9eG_s",
  authDomain: "fir-authentication-72dbe.firebaseapp.com",
  projectId: "fir-authentication-72dbe",
  storageBucket: "fir-authentication-72dbe.firebasestorage.app",
  messagingSenderId: "1054063495355",
  appId: "1:1054063495355:web:a8d21064a43753f133c19e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
