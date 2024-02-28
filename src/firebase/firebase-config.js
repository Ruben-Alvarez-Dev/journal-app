import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC35HtbdGi5hNr3WkeP9BZdOK301rhqGtU",
    authDomain: "journal-app-d67ee.firebaseapp.com",
    projectId: "journal-app-d67ee",
    storageBucket: "journal-app-d67ee.appspot.com",
    messagingSenderId: "207976369614",
    appId: "1:207976369614:web:98e0b8579eb03476d4af9f",
    measurementId: "G-EJPBCFTK4L"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize Database
  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
    db,
    googleAuthProvider,
    firebase
  }