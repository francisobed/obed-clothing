import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCoYMNB1V3VGLFcIcEpHnJ6nRMsh2Z4PvQ",
    authDomain: "obed-clothing-db.firebaseapp.com",
    databaseURL: "https://obed-clothing-db.firebaseio.com",
    projectId: "obed-clothing-db",
    storageBucket: "obed-clothing-db.appspot.com",
    messagingSenderId: "423754384768",
    appId: "1:423754384768:web:49db94302a559101acad65",
    measurementId: "G-2F6P5FWKLB"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
