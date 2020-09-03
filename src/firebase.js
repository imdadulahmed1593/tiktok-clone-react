import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCyoOVW_A4B8qlP9hr9m9HUZMGbsJdWAv4",
  authDomain: "tiktok-clone-react-da1c8.firebaseapp.com",
  databaseURL: "https://tiktok-clone-react-da1c8.firebaseio.com",
  projectId: "tiktok-clone-react-da1c8",
  storageBucket: "tiktok-clone-react-da1c8.appspot.com",
  messagingSenderId: "524617893436",
  appId: "1:524617893436:web:5d07bc8481b1972eec6539",
  measurementId: "G-C04QXH1JMY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
