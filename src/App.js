import logo from './logo.svg';
import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCxKo6uQS37dj5wXkJ-UVmTai64d7F7_9E",
    authDomain: "messageappdemo-cd24a.firebaseapp.com",
    projectId: "messageappdemo-cd24a",
    storageBucket: "messageappdemo-cd24a.appspot.com",
    messagingSenderId: "737910771326",
    appId: "1:737910771326:web:b91aaf09db923a0cad522f",
    measurementId: "G-DR81J2XCXD"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">


      </header>
    </div>
  );
}

export default App;
