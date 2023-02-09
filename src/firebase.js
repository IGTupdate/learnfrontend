// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1kt6QRWeC1nS_L3UiX5INuujss3jPGBA",
  authDomain: "learnfrontend-ad2cc.firebaseapp.com",
  projectId: "learnfrontend-ad2cc",
  storageBucket: "learnfrontend-ad2cc.appspot.com",
  messagingSenderId: "316932388508",
  appId: "1:316932388508:web:d75c25a2181fcbe4eb9f59",
  measurementId: "G-PDXS9JEZLF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
