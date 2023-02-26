import { FirebaseApp } from "firebase/app";
import {getAuth} from  "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPWAgOCShRZTv1oNOx992y7y2MMcYXCcE",
  authDomain: "mightphiriproject.firebaseapp.com",
  projectId: "mightphiriproject",
  storageBucket: "mightphiriproject.appspot.com",
  messagingSenderId: "995097897225",
  appId: "1:995097897225:web:54e4275da215fb7738cbd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}