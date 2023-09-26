// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsKpY_pvgG4y41lh4vdGv-D1wSQLZdAmY",
  authDomain: "covercollab-b1858.firebaseapp.com",
  projectId: "covercollab-b1858",
  storageBucket: "covercollab-b1858.appspot.com",
  messagingSenderId: "189929204721",
  appId: "1:189929204721:web:83b88ce12c1a84c0ceb250",
  measurementId: "G-60BMS4R249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);