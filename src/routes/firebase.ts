import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARhQylnz83VW50ZSRT8-VxmUeZCTUvvMM",
  authDomain: "nwitter-reloaded-8d7ab.firebaseapp.com",
  projectId: "nwitter-reloaded-8d7ab",
  storageBucket: "nwitter-reloaded-8d7ab.firebasestorage.app",
  messagingSenderId: "105675278460",
  appId: "1:105675278460:web:5940954f3cdf4d446561f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
