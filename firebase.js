// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJeQKpO_vaUMAwZjUNAez7ZjpFl8f189g",
  authDomain: "insta-2-c1dc3.firebaseapp.com",
  projectId: "insta-2-c1dc3",
  storageBucket: "insta-2-c1dc3.appspot.com",
  messagingSenderId: "703761216161",
  appId: "1:703761216161:web:e422199819809def94f6e0"
};

// Initialize Firebase
const app = !getApps().lenght ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };