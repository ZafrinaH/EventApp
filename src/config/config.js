import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyCptoG0TNp1nnCeIzsyD5IN-HHKlR4hwOg',
    authDomain: 'eventapp-cea8f.firebaseapp.com',
    projectId: 'eventapp-cea8f',
    storageBucket: 'eventapp-cea8f.appspot.com',
    messagingSenderId: '919504577905',
    appId: '1:919504577905:web:1b7bd847e3bb2fa000c2d0',
    measurementId: 'G-689WMR0N90',
  }

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  const userCollection = collection(db, 'user');

  export { app, db, auth, userCollection };