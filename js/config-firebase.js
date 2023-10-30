// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3rfbp0GM1z5a8UvLKNQ73oFRLUNZCbrc",
  authDomain: "dpl-teste.firebaseapp.com",
  projectId: "dpl-teste",
  storageBucket: "dpl-teste.appspot.com",
  messagingSenderId: "896899744257",
  appId: "1:896899744257:web:725e667233e7e8c6da3600"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

