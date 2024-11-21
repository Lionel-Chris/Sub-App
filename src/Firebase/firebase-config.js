// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 