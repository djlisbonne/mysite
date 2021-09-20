// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBLE-I2bEdRPm4ycO-KtZMdF3Fhcx6QWk",
  authDomain: "personalsite-16deb.firebaseapp.com",
  projectId: "personalsite-16deb",
  storageBucket: "personalsite-16deb.appspot.com",
  messagingSenderId: "326454824650",
  appId: "1:326454824650:web:ee0db51b60c3a5ddac6e33",
  measurementId: "G-VNCXBELTRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

