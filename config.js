import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqqN_Ulb_9-o47w20u-5AMl8mB6qIGHfg",
  authDomain: "edya2-challenges.firebaseapp.com",
  projectId: "edya2-challenges",
  storageBucket: "edya2-challenges.appspot.com",
  messagingSenderId: "1020739286342",
  appId: "1:1020739286342:web:b4d746fda6d79215776147"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const firebaseStorage = getStorage(firebaseApp);

export { firebaseApp, auth, googleProvider, firebaseStorage };
