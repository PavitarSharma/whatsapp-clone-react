import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAgSyp-UIw9vo4bvRuxXzV4Gm8Eq0n8fg",
  authDomain: "whatsapp-clone-642d2.firebaseapp.com",
  projectId: "whatsapp-clone-642d2",
  storageBucket: "whatsapp-clone-642d2.appspot.com",
  messagingSenderId: "534195194300",
  appId: "1:534195194300:web:8ce7401d16d12c1d3343b9",
  measurementId: "G-8DYS6J9VDY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;