import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQHhhn10jil_D37VuP21Ty72GQGLK-qbw",
  authDomain: "capstone-925e4.firebaseapp.com",
  projectId: "capstone-925e4",
  storageBucket: "capstone-925e4.appspot.com",
  messagingSenderId: "250420799039",
  appId: "1:250420799039:web:1d00b6afed9e71a1c87a8a",
  measurementId: "G-R8EEX7K1WZ",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
