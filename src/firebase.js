// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDue6JkjTVHGZb18JDbxljSVhyFd4GWPls",
  authDomain: "kitchen-4b3c5.firebaseapp.com",
  projectId: "kitchen-4b3c5",
  storageBucket: "kitchen-4b3c5.firebasestorage.app",
  messagingSenderId: "244776486646",
  appId: "1:244776486646:web:de188de2b0b493ef5aced7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};