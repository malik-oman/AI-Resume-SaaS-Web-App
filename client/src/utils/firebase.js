
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-7b9af.firebaseapp.com",
  projectId: "ai-interview-7b9af",
  storageBucket: "ai-interview-7b9af.firebasestorage.app",
  messagingSenderId: "646603166596",
  appId: "1:646603166596:web:3d20e8cbda4caf9df643d1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}