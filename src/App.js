import logo from './logo.svg';
import React, {useState} from 'react';
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

        <section>
            {user ? <ChatRoom /> : <SignIn />}
        </section>
      </header>
    </div>
  );
}

function ChatRoom() {
    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e) => {
        
    }

    return (
        <>
            <div>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            </div>

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <button type="submit">Send</button>
            </form>
        </>
    )
}

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} />
            <p>{text}</p>
        </div>
    )
}

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return(
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default App;
