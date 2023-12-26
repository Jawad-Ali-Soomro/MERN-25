// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBifedWA2_XV_3bTywNrKxwXYFqvEZW_SU",
  authDomain: "book-auct.firebaseapp.com",
  projectId: "book-auct",
  storageBucket: "book-auct.appspot.com",
  messagingSenderId: "379675862572",
  appId: "1:379675862572:web:8610eda80674575b9d5389",
  measurementId: "G-10WYZ54H2V",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
