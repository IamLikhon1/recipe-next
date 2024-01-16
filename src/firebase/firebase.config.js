// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLdEAw6IGGLPxfodZ0F87CRuxVAg55TUE",
  authDomain: "recipe-app-2024.firebaseapp.com",
  projectId: "recipe-app-2024",
  storageBucket: "recipe-app-2024.appspot.com",
  messagingSenderId: "432984500415",
  appId: "1:432984500415:web:bee130b9e0215a3e513e0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app