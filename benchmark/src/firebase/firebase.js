// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuSKnjj1I1RRWyCl3EayIf-giZqhHviUY",
  authDomain: "benchmark-1372a.firebaseapp.com",
  projectId: "benchmark-1372a",
  storageBucket: "benchmark-1372a.appspot.com",
  messagingSenderId: "703217161579",
  appId: "1:703217161579:web:7191a8754352b6f70f282e",
  measurementId: "G-CT5RRP186Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {db};