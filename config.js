import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: " ",
  authDomain: "edya2-challenges.firebaseapp.com",
  projectId: "edya2-challenges",
  storageBucket: "edya2-challenges.appspot.com",
  messagingSenderId: "1020739286342",
  appId: " "
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const firebaseStorage = getStorage(firebaseApp);

export { firebaseApp, auth, googleProvider, firebaseStorage };
