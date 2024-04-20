// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIXw6r3A_sAPN7Mk-OsvT9kOXf6mx3eLc",
  authDomain: "react-contact-8ebab.firebaseapp.com",
  projectId: "react-contact-8ebab",
  storageBucket: "react-contact-8ebab.appspot.com",
  messagingSenderId: "367190626837",
  appId: "1:367190626837:web:3cb9f1246568648aefb41c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);