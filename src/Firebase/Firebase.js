// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvcq9k6t3xTlfW26IDDelIQmOD_MGT7ro",
  authDomain: "agrihub-76968.firebaseapp.com",
  projectId: "agrihub-76968",
  storageBucket: "agrihub-76968.appspot.com",
  messagingSenderId: "622219123656",
  appId: "1:622219123656:web:97e12080de6ebf0e6e7efd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
