// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOX2Qny4CF5gFMjNv2ZGBDydqKEHI1aX8",
  authDomain: "auth-user-4a907.firebaseapp.com",
  projectId: "auth-user-4a907",
  storageBucket: "auth-user-4a907.firebasestorage.app",
  messagingSenderId: "357817100856",
  appId: "1:357817100856:web:0170e82203b7ea3d74d4cd",
  measurementId: "G-YWG992CXHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
