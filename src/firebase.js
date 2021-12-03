// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3y_2UQdz9bTH5MELQTOyPpcN52SORe5s",
  authDomain: "vue-shop-1f9df.firebaseapp.com",
  projectId: "vue-shop-1f9df",
  storageBucket: "vue-shop-1f9df.appspot.com",
  messagingSenderId: "381827156949",
  appId: "1:381827156949:web:4ab6da0898b0fad88c8b5c",
  measurementId: "G-8GQE18C4E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);