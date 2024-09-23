// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpOOI3ypKYwU5dKWLypH47LwkNbkBo7Dw",
  authDomain: "test-myself-34967.firebaseapp.com",
  databaseURL: "https://test-myself-34967-default-rtdb.firebaseio.com",
  projectId: "test-myself-34967",
  storageBucket: "test-myself-34967.appspot.com",
  messagingSenderId: "55050173822",
  appId: "1:55050173822:web:89011d72538c197ded472f",
  measurementId: "G-ZFQYSGLK03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default (app);