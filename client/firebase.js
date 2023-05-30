// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOoL-t-_tK2bvxd7X53p5XBdpqkPr3Jxk",
  authDomain: "finance-tracker-59c54.firebaseapp.com",
  projectId: "finance-tracker-59c54",
  storageBucket: "finance-tracker-59c54.appspot.com",
  messagingSenderId: "873836009475",
  appId: "1:873836009475:web:f1af7c9352f1c5c91f9636",
  measurementId: "G-FRX8B81CNG",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
