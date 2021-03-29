// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyATPEjf-MzX3uAAU-hFRiqFtQD0p6dZWTA",
    authDomain: "messenger-app-9f755.firebaseapp.com",
    projectId: "messenger-app-9f755",
    storageBucket: "messenger-app-9f755.appspot.com",
    messagingSenderId: "122405109717",
    appId: "1:122405109717:web:75a279667579e9e57a875c",
    measurementId: "G-D6Y9W75087"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };