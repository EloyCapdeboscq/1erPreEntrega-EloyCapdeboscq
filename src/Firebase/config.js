import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDsdEizO7LsyET3kUYWgw0zYeyNIg5uLEc",
  authDomain: "cafeteria-mucho-gusto.firebaseapp.com",
  projectId: "cafeteria-mucho-gusto",
  storageBucket: "cafeteria-mucho-gusto.appspot.com",
  messagingSenderId: "773512062749",
  appId: "1:773512062749:web:2fd44b543e844edf7123f4"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app