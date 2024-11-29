// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBITjHeNAIlJyfAe-fPsZvf6GpMN1mSdlo",
  authDomain: "subcription-app-eaba6.firebaseapp.com",
  projectId: "subcription-app-eaba6",
  storageBucket: "subcription-app-eaba6.firebasestorage.app",
  messagingSenderId: "234373150379",
  appId: "1:234373150379:web:d4435eda4ec2b5ddab69ee",
  measurementId: "G-5HJ8F0DGDN"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();

export default app;