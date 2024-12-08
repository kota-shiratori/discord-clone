import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLY3uTzNc5VF43i4hnrP-l3wZdoO_Z_XA",
  authDomain: "discord-clone-a2db5.firebaseapp.com",
  projectId: "discord-clone-a2db5",
  storageBucket: "discord-clone-a2db5.firebasestorage.app",
  messagingSenderId: "1054705885049",
  appId: "1:1054705885049:web:d00947e06ffce6cf2219a8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
