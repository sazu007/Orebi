// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhh_99d0DuWfjdEsk1ZhJC0mqG-k8h1ss",
  authDomain: "orebi-fcaf0.firebaseapp.com",
  projectId: "orebi-fcaf0",
  storageBucket: "orebi-fcaf0.appspot.com",
  messagingSenderId: "905276762289",
  appId: "1:905276762289:web:5364c30e1ac42671301a90",
  measurementId: "G-R7DBMJR1E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;