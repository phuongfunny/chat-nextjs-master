// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnvF2XM4P9MTRBi9XDlkSCygvTkG9vtSs",
  authDomain: "chatapp-9fcba.firebaseapp.com",
  projectId: "chatapp-9fcba",
  storageBucket: "chatapp-9fcba.appspot.com",
  messagingSenderId: "799438005275",
  appId: "1:799438005275:web:a42ef137f4c83be60a04be",
  measurementId: "G-22VV76ZSWD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
