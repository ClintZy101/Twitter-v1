// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDvd5E_yTkig0AX6AhmReDAIlH0mH3mFFY",
    authDomain: "twitter-clone-73788.firebaseapp.com",
    projectId: "twitter-clone-73788",
    storageBucket: "twitter-clone-73788.appspot.com",
    messagingSenderId: "245881435555",
    appId: "1:245881435555:web:ba0f35b5ed05337d329616",
    measurementId: "G-FMTDTX9BP2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;