import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuQ-YPE_WEnA7lYdsRqNgLJ9HYRb7dQdA",
  authDomain: "react-blog-app-6febc.firebaseapp.com",
  projectId: "react-blog-app-6febc",
  storageBucket: "react-blog-app-6febc.appspot.com",
  messagingSenderId: "708443890676",
  appId: "1:708443890676:web:53bd8e37eeb3e38e488fa1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
