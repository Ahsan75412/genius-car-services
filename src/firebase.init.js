// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAqOjC2mhVTNqQPhh0AosGS_j2ZeyLAYc",
  authDomain: "genius-car-services-ee2f8.firebaseapp.com",
  projectId: "genius-car-services-ee2f8",
  storageBucket: "genius-car-services-ee2f8.appspot.com",
  messagingSenderId: "105292391867",
  appId: "1:105292391867:web:0e9b0d825d47e4156d109e"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default  auth ;