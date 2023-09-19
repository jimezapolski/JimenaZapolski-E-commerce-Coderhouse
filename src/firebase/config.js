// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfqdvTWs97N6MsjkUwSoLaeFUXnG5hpCE",
  authDomain: "coderhouse-ecommerce-zapolski.firebaseapp.com",
  projectId: "coderhouse-ecommerce-zapolski",
  storageBucket: "coderhouse-ecommerce-zapolski.appspot.com",
  messagingSenderId: "197868266903",
  appId: "1:197868266903:web:5aed627d328294c35ad0d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app