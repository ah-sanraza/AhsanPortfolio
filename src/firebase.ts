// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUFoBkx8GMXxwvKHoyBm1pNQjyfUaH0Jo",
  authDomain: "ahsanrazaportfolio.firebaseapp.com",
  projectId: "ahsanrazaportfolio",
  storageBucket: "ahsanrazaportfolio.firebasestorage.app",
  messagingSenderId: "759178628521",
  appId: "1:759178628521:web:7f70aa1f4af69ce9bd88b8",
  measurementId: "G-KBVW1QMSF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analysis = getFirestore(app);
export const outcome = getFirestore(app);
