// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALvSZBRh5G7xGjaWamjyTOse9GyAG10g4",
  authDomain: "garuda-7b300.firebaseapp.com",
  projectId: "garuda-7b300",
  storageBucket: "garuda-7b300.firebasestorage.app",
  messagingSenderId: "667820107985",
  appId: "1:667820107985:web:07c57f2ab5bfcd703dfdf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;