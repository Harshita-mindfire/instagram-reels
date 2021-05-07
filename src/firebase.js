import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBL6RCIWdmYCMTX9DQbhgC8rXf0gisLkpk",
    authDomain: "ig-reels-clone-app.firebaseapp.com",
    databaseURL: "https://ig-reels-clone-app.firebaseio.com",
    projectId: "ig-reels-clone-app",
    storageBucket: "ig-reels-clone-app.appspot.com",
    messagingSenderId: "255927908835",
    appId: "1:255927908835:web:cb99f5af73dadd1483c8d6"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;