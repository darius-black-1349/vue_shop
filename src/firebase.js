
import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyD3y_2UQdz9bTH5MELQTOyPpcN52SORe5s",
  authDomain: "vue-shop-1f9df.firebaseapp.com",
  projectId: "vue-shop-1f9df",
  storageBucket: "vue-shop-1f9df.appspot.com",
  messagingSenderId: "381827156949",
  appId: "1:381827156949:web:4ab6da0898b0fad88c8b5c",
  measurementId: "G-8GQE18C4E3"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)





