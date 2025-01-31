// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD37Nuo_whgN6i1YHXHBiurHXWQm8-lyAY",
  authDomain: "croxton-website.firebaseapp.com",
  projectId: "croxton-website",
  storageBucket: "croxton-website.firebasestorage.app",
  messagingSenderId: "1025335827464",
  appId: "1:1025335827464:web:c68d111b8529adfb4c85bd",
  measurementId: "G-VDGKJZ6HL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;