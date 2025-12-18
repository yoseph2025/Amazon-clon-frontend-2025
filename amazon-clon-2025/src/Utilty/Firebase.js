import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU7DoAhqpwiS8ByebsquXbT8b6pcfP_DA",
  authDomain: "clon-2025.firebaseapp.com",
  projectId: "clon-2025",
  storageBucket: "clon-2025.firebasestorage.app",
  messagingSenderId: "1000786678960",
  appId: "1:1000786678960:web:af3670f1ca1b0b74909775",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
