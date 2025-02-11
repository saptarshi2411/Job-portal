// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo-mGHrl5V8s1njdmJ-_cc1zh0L0YDZqc",
  authDomain: "online-job-portal-374fa.firebaseapp.com",
  projectId: "online-job-portal-374fa",
  storageBucket: "online-job-portal-374fa.appspot.com",
  messagingSenderId: "388054634931",
  appId: "1:388054634931:web:d7f2529f10e54fe1723bc6",
  measurementId: "G-XK1F2JKFPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};