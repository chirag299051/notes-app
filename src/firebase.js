import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnlmI17UDpUXzrIgzA9JiJpcxzAj96dTA",
  authDomain: "notes-app-829ed.firebaseapp.com",
  projectId: "notes-app-829ed",
  storageBucket: "notes-app-829ed.appspot.com",
  messagingSenderId: "428503295730",
  appId: "1:428503295730:web:fbe34e8781264e2f81126b",
  measurementId: "G-SW1NZFMXPJ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
