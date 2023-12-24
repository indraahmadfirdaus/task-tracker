// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// env file
const firebaseConfig = {
  apiKey: "AIzaSyBCVwSKr_vPeZfdtb7UNUBF2CdKSuNje1c",
  authDomain: "vocasia-task-tracker.firebaseapp.com",
  projectId: "vocasia-task-tracker",
  storageBucket: "vocasia-task-tracker.appspot.com",
  messagingSenderId: "863533267936",
  appId: "1:863533267936:web:3d45d2c7fd6d2945fa0985",
  measurementId: "G-2JM1D9SBV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app)
// const analytics = getAnalytics(app);