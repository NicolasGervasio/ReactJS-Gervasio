import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZABpWRcZfNrSGEXRtgzsPiVqCtLrSvcI",
  authDomain: "reactjs-gervasio.firebaseapp.com",
  projectId: "reactjs-gervasio",
  storageBucket: "reactjs-gervasio.appspot.com",
  messagingSenderId: "62287916454",
  appId: "1:62287916454:web:2d629bede35ebc6b197367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)