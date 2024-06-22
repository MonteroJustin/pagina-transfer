// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC12Wx1rt9N6nxxIyJbQtCuPm7Mmb4P35k",
  authDomain: "ventastransfer-80490.firebaseapp.com",
  projectId: "ventastransfer-80490",
  storageBucket: "ventastransfer-80490.appspot.com",
  messagingSenderId: "735965551092",
  appId: "1:735965551092:web:0e938ae1a9b9a5f3d141a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

