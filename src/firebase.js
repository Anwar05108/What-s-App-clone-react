import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyAoS8ctTQyvpr_NQT4JM2JaeUuOO5lWby0",
    authDomain: "whatsapp-clone-c3ccd.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-c3ccd.firebaseio.com",
    projectId: "whatsapp-clone-c3ccd",
    storageBucket: "whatsapp-clone-c3ccd.appspot.com",
    messagingSenderId: "86434157015",
    appId: "1:86434157015:web:aee24da37c072e8039fb92",
    measurementId: "G-845EVBW1HL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider };
  export default db;